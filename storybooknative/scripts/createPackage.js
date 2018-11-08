// @flow

import path from "path";
import fs from "fs";
import rimraf from "rimraf"; // eslint-disable-line import/no-extraneous-dependencies

const srcPath = path.join(__dirname, "..", "src");
const libPath = path.join(__dirname, "..", "lib");

const copyFiles = (rootPath: string) => {
  const filesAndFolders = fs.readdirSync(rootPath);

  filesAndFolders.forEach(item => {
    if (item === "__tests__" || item.includes(".stories.js")) {
      return; // Skip test folders and storybook files
    }
    const currentPath = path.join(rootPath, item);
    const stat = fs.statSync(currentPath);
    const isDirectory = stat.isDirectory();

    if (isDirectory) {
      copyFiles(currentPath);
    } else {
      const destinationPath = currentPath.replace("src", "lib");
      const destinationFolder = rootPath.replace("src", "lib");

      if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder);
      }

      fs.copyFileSync(currentPath, destinationPath);
    }
  });
};

const deleteLibFolder = () =>
  new Promise((resolve: Function, reject: Function) => {
    if (fs.existsSync(libPath)) {
      rimraf(libPath, error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    } else {
      resolve();
    }
  });

(async () => {
  await deleteLibFolder();
  fs.mkdirSync(libPath);
  copyFiles(srcPath);
})();
