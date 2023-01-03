// @noflow

import visit from "unist-util-visit";
import path from "path";
import fs from "fs";
import chalk from "chalk";
import axios from "axios";
import { createFileNode } from "gatsby-source-filesystem/create-file-node";
import dotenv from "dotenv-safe";

// const { warnMissingFigmaToken } = require("../../utils/warnings");

const ALLOWED_ATTRS = ["fileId", "nodeId"];

const defaults = {
  scale: 1,
  format: "png",
};

export default (props, pluginOptions) => {
  const { markdownAST, markdownNode, reporter, getNode, actions, createNodeId } = props;
  const { createNode } = actions;

  const options = { ...defaults, ...pluginOptions };

  if (!options.path) {
    reporter.panic(
      `Please specify the ${chalk.bold(
        "path",
      )} option for the plugin gatsby-remark-figma-images plugin in your configuration.`,
    );
  }

  try {
    dotenv.config({
      example: path.resolve(__dirname, `../../../.env.example`),
      path: path.resolve(__dirname, `../../../.env`),
      allowEmptyValues: true,
    });
  } catch (error) {
    // warnMissingFigmaToken(error);
  }

  const checkNodeContent = (content, filePath) => {
    const [fileId, nodeId] = ALLOWED_ATTRS;
    if (!(fileId in content && nodeId in content)) {
      reporter.error(
        `Wrong definition for fetching Figma files. Please check the definition of fileId or nodeId in ${filePath}.`,
      );
    }
  };

  const parseImageDefinition = (definition, filePath) => {
    const content = Object.assign(
      {},
      ...definition
        .split(";")
        .filter(Boolean)
        .map(part => {
          const values = part.split(":").filter(Boolean);
          const [key, value] = values;
          if (!ALLOWED_ATTRS.includes(key)) reporter.error(`Unknown attribute "${key}" specified.`);
          return { [key]: value };
        }),
    );
    checkNodeContent(content, filePath);
    return content;
  };

  const wait = delay => {
    return new Promise(resolve => setTimeout(resolve, delay));
  };

  const fetchRetry = (url, delay, tries) => {
    function onError(err) {
      const triesLeft = tries - 1;
      if (!triesLeft) {
        return { data: { err } };
      }
      return wait(delay).then(() => fetchRetry(url, delay, triesLeft));
    }
    return axios({
      method: `GET`,
      url,
      headers: { "X-Figma-Token": process.env.FIGMA_TOKEN || "" },
    }).catch(onError);
  };

  const fetchNode = (fileId, nodeId) => {
    const url = `https://api.figma.com/v1/images/${fileId}`;
    // Copied nodeIds are already encoded, so we don't have to do it twice. URLSearchParams does it automatically.
    const params = new URLSearchParams([
      ["ids", decodeURIComponent(nodeId)],
      ["scale", options.scale],
      ["format", options.format],
    ]);
    return fetchRetry(`${url}?${params.toString()}`, 30000, 3);
  };

  const checkAndCreateFolder = p => {
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
    }
    return p;
  };

  const getFileIdFolder = fileId => {
    const fileIdFolder = path.resolve(options.path, fileId);
    return checkAndCreateFolder(fileIdFolder);
  };

  const getImageHashName = (nodeId, format) => `${nodeId}.${format}`;

  const fetchFigmaImage = (fileId, nodeId) => {
    return new Promise(resolve => {
      fetchNode(fileId, nodeId).then(({ data }) => {
        const { images, err } = data;
        if (err) {
          reporter.error(
            `The Figma image with a file ID of ${fileId} and a node ID of ${nodeId} was not found.\nThe specific error was: ${err}.`,
          );
          return;
        }
        const result = Object.values(images);
        if (result.length !== 1 || err) {
          // error specified nodeId doesn't exist in fileId
        }
        resolve(result[0]);
      });
    });
  };

  const downloadAndSaveImage = async (imageRemoteUrl, imageLocalUrl) => {
    const writer = fs.createWriteStream(imageLocalUrl);

    const response = await axios({
      url: imageRemoteUrl,
      method: "GET",
      responseType: "stream",
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  };

  const checkAndCreateImage = (fileId, nodeId, imageHash, directory) => {
    return new Promise(resolve => {
      const imagePath = path.resolve(directory, imageHash);
      fs.access(imagePath, fs.constants.F_OK, notExists => {
        if (notExists) {
          fetchFigmaImage(fileId, nodeId).then(figmaImageUrl => {
            if (figmaImageUrl) {
              downloadAndSaveImage(figmaImageUrl, imagePath).then(() => resolve(imagePath));
            }
          });
        } else {
          resolve(imagePath);
        }
      });
    });
  };

  const getAbsolutePath = node => {
    const parentNode = getNode(node.parent);
    if (parentNode && parentNode.internal.type === "File") {
      return parentNode.dir;
    }
    return null;
  };

  /*
    Collect only nodes that are type of image based on markdownAST.
    Will catch following defined nodes:
    ![alt](fileId:string;nodeId:string)
   */
  const imagesNodes: any[] = [];

  const visitor = node => {
    const { url } = node;
    if (url && url.startsWith("fileId:")) {
      const filePath = getAbsolutePath(markdownNode);
      const { fileId, nodeId } = parseImageDefinition(node.url, filePath);
      imagesNodes.push({ node, fileId, nodeId });
    }
  };

  visit(markdownAST, "image", visitor);

  return Promise.all(
    imagesNodes.map(
      ({ node, fileId, nodeId }) =>
        new Promise(resolve => {
          const fileDir = getFileIdFolder(fileId);

          const imageHash = getImageHashName(nodeId, options.format);

          checkAndCreateImage(fileId, nodeId, imageHash, fileDir).then(imageFilePath => {
            createFileNode(imageFilePath, createNodeId, { path: options.path }).then(fileNode => {
              createNode(fileNode, { name: "gatsby-source-filesystem" });
            });
          });

          const parentAbsolutePath = getAbsolutePath(markdownNode);

          const imageAbsolutePath = path.resolve(fileDir, imageHash);

          // eslint-disable-next-line no-param-reassign
          node.url = path.relative(parentAbsolutePath, imageAbsolutePath);

          resolve(node);
        }),
    ),
  ).then(nodes => nodes.filter(node => !!node));
};
