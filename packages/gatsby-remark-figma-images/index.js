// @noflow

const visit = require("unist-util-visit");
const Path = require("path");
const hash = require("object-hash");
const fs = require("fs");
const _ = require("lodash");
const chalk = require("chalk");
const fsPromises = require("fs").promises;
const axios = require("axios");
const { createFileNode } = require("gatsby-source-filesystem/create-file-node");

const ALLOWED_ATTRS = ["fileId", "nodeId"];

const defaults = {
  scale: 1,
  format: "png",
};

module.exports = (props, pluginOptions) => {
  const {
    markdownAST,
    markdownNode,
    reporter,
    getNode,
    actions,
    createNodeId,
    cache: gatsbyCache,
  } = props;
  const { createNode } = actions;
  const { cache } = gatsbyCache;

  const options = _.defaults({}, pluginOptions, defaults);

  if (!options.path) {
    reporter.panic(
      `Please specify the ${chalk.bold(
        "path",
      )} option for the plugin gatsby-remark-figma-images plugin in your configuration.`,
    );
  }

  if (!options.accessToken) {
    reporter.panic(
      `Please specify the ${chalk.bold(
        "accessToken",
      )} option for the plugin gatsby-remark-figma-images plugin in your configuration.`,
    );
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
          if (!ALLOWED_ATTRS.includes(key)) reporter.error(`Unknown attribute ${key} specified.`);
          return { [key]: value };
        }),
    );
    checkNodeContent(content, filePath);
    return content;
  };

  const cachified = async (cacheKey, cacheValue) => {
    const cached = await cache.get(cacheKey);

    if (cached) {
      return cached;
    }

    const value = typeof cacheValue === "function" ? cacheValue() : cacheValue;

    await cache.set(cacheKey, value);

    return value;
  };

  const wait = delay => {
    return new Promise(resolve => setTimeout(resolve, delay));
  };

  const fetchRetry = (url, delay, tries) => {
    function onError(err) {
      const triesLeft = tries - 1;
      if (!triesLeft) {
        throw err;
      }
      return wait(delay).then(() => fetchRetry(url, delay, triesLeft));
    }
    return axios({
      method: `GET`,
      url,
      headers: { "X-Figma-Token": options.accessToken },
    }).catch(onError);
  };

  const fetchNode = (fileId, nodeId) => {
    return fetchRetry(
      `https://api.figma.com/v1/images/${fileId}?ids=${nodeId}${
        options.scale ? `&scale=${options.scale}` : ""
      }${options.format ? `&format=${options.format}` : ""}`,
      30000,
      3,
    );
  };

  const fetchVersions = fileId => {
    return fetchRetry(`https://api.figma.com/v1/files/${fileId}/versions`, 20000, 3);
  };

  const fetchFileVersions = async fileId => {
    return new Promise(resolve => {
      const getVersion = async () => {
        const fileInfo = await fetchVersions(fileId).then(({ data }) => data);
        return fileInfo.versions.map(version => version.id);
      };
      cachified(hash(fileId), getVersion).then(versions => resolve(versions));
    });
  };

  const checkAndCreateFolder = path => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    return path;
  };

  const getFileIdFolder = fileId => {
    const fileIdFolder = Path.resolve(options.path, fileId);
    return checkAndCreateFolder(fileIdFolder);
  };

  const getVersionIdFolder = (fileIdFolder, fileVersion) => {
    const versionIdFolder = Path.resolve(fileIdFolder, fileVersion);
    return checkAndCreateFolder(versionIdFolder);
  };

  const deleteDeprecatedVersions = async (latestVersion, fileIdFolder) => {
    try {
      const folders = await fsPromises.readdir(fileIdFolder);
      folders
        .filter(dir => dir !== latestVersion)
        .forEach(dir => {
          fs.rmdir(Path.resolve(fileIdFolder, dir), { recursive: true }, error => {
            if (error) {
              reporter.error("An error occurred", error);
            }
          });
        });
    } catch (err) {
      reporter.error("An error occurred", err);
    }
  };

  const getImageHashName = (nodeId, format) => `${nodeId}.${format}`;

  const fetchFigmaImage = (fileId, nodeId) => {
    return new Promise(resolve => {
      fetchNode(fileId, nodeId).then(({ data }) => {
        const { images, err } = data;
        if (err) {
          reporter.error("An error occurred", err);
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

  const checkAndCreateImage = (fileId, nodeId, imageHash, versionDirectory) => {
    return new Promise(resolve => {
      const imagePath = Path.resolve(versionDirectory, imageHash);
      fs.access(imagePath, fs.constants.F_OK, notExists => {
        if (notExists) {
          fetchFigmaImage(fileId, nodeId).then(figmaImageUrl => {
            if (figmaImageUrl) {
              downloadAndSaveImage(figmaImageUrl, imagePath).then(() => resolve(imagePath));
            }
          });
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
  const imagesNodes = [];

  const filesIds = [];

  const visitor = node => {
    const { url } = node;
    if (url && url.startsWith("fileId:")) {
      const filePath = getAbsolutePath(markdownNode);
      const { fileId, nodeId } = parseImageDefinition(node.url, filePath);
      imagesNodes.push({ node, fileId, nodeId });
      filesIds.push(fileId);
    }
  };

  visit(markdownAST, "image", visitor);

  const uniqueFilesIds = filesIds.filter((fileId, index, self) => self.indexOf(fileId) === index);

  const filesVersions = uniqueFilesIds.map(fileId => {
    return new Promise(resolve => {
      fetchFileVersions(fileId).then(versions => {
        resolve(versions);
      });
    }).then(versions => ({ [fileId]: versions }));
  });

  return Promise.all(filesVersions).then(versions => {
    return Promise.all(
      imagesNodes.map(
        ({ node, fileId, nodeId }) =>
          new Promise(resolve => {
            const versionsObject = Object.assign({}, ...versions);
            const latestVersion = versionsObject[fileId][0];
            const fileDir = getFileIdFolder(fileId);

            const versionDir = getVersionIdFolder(fileDir, latestVersion);

            const imageHash = getImageHashName(nodeId, options.format);

            checkAndCreateImage(fileId, nodeId, imageHash, versionDir).then(imageFilePath => {
              createFileNode(imageFilePath, createNodeId, { path: options.path }).then(fileNode => {
                createNode(fileNode, { name: "gatsby-source-filesystem" });
              });
            });

            deleteDeprecatedVersions(latestVersion, fileDir).then(() => {
              const parentAbsolutePath = getAbsolutePath(markdownNode);

              const imageAbsolutePath = Path.resolve(options.path, versionDir, imageHash);

              // eslint-disable-next-line no-param-reassign
              node.url = Path.relative(parentAbsolutePath, imageAbsolutePath);

              resolve(node);
            });
          }),
      ),
    ).then(nodes => nodes.filter(node => !!node));
  });
};
