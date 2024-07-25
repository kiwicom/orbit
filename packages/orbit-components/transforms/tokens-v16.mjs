/* eslint-disable no-console */
import { readFile, writeFile, readdir, stat } from "fs/promises";
import { join } from "path";

const transformations = [
  { from: /rounded(-[a-z]+)?-small/, to: "rounded$1-50" },
  { from: /rounded(-[a-z]+)?-normal/, to: "rounded$1-100" },
  { from: /rounded(-[a-z]+)?-large/, to: "rounded$1-150" },
  { from: /rounded(-[a-z]+)?-circle/, to: "rounded$1-full" },
  { from: "borderRadiusSmall", to: "borderRadius50" },
  { from: "borderRadiusNormal", to: "borderRadius100" },
  { from: "borderRadiusLarge", to: "borderRadius150" },
  { from: "borderRadiusCircle", to: "borderRadiusFull" },
  // Add more transformations as needed
];

const ignoredFiles = [
  "/orbit-components/src/Box/helpers/tailwindClasses.ts",
  "/orbit-tailwind-preset/src/__fixtures__/BorderRadius.tsx",
];

async function replaceInFile(filePath) {
  try {
    let data = await readFile(filePath, "utf8");
    let modified = false;

    transformations.forEach(({ from, to }) => {
      const regex = new RegExp(from, "g");
      const newData = data.replace(regex, to);
      if (newData !== data) {
        data = newData;
        modified = true;
      }
    });

    if (modified) {
      await writeFile(filePath, data, "utf8");
      console.log(`Processed: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

async function walkDir(dir) {
  try {
    const files = await readdir(dir);

    files.forEach(async file => {
      const filePath = join(dir, file);
      const stats = await stat(filePath);

      if (stats.isDirectory()) {
        await walkDir(filePath);
      } else if (
        stats.isFile() &&
        /\.(js|jsx|ts|tsx)$/.test(file) &&
        !ignoredFiles.some(ignoredFile => filePath.includes(ignoredFile))
      ) {
        await replaceInFile(filePath);
      }
    });
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
}

// Start the process from the current directory
walkDir(process.cwd()).catch(err => {
  console.error("An error occurred:", err);
});
