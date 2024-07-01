import { readFile, writeFile, readdir, stat } from "fs/promises";
import { join } from "path";

// Define your transformations here
const transformations = [
  { from: "rounded-small", to: "rounded-50" },
  { from: "rounded-t-small", to: "rounded-t-50" },
  { from: "rounded-b-small", to: "rounded-b-50" },
  { from: "rounded-l-small", to: "rounded-l-50" },
  { from: "rounded-r-small", to: "rounded-r-50" },
  { from: "rounded-x-small", to: "rounded-x-50" },
  { from: "rounded-y-small", to: "rounded-y-50" },
  { from: "rounded-normal", to: "rounded-100" },
  { from: "rounded-t-normal", to: "rounded-t-100" },
  { from: "rounded-b-normal", to: "rounded-b-100" },
  { from: "rounded-l-normal", to: "rounded-l-100" },
  { from: "rounded-r-normal", to: "rounded-r-100" },
  { from: "rounded-x-normal", to: "rounded-x-100" },
  { from: "rounded-y-normal", to: "rounded-y-100" },
  { from: "rounded-large", to: "rounded-150" },
  { from: "rounded-t-large", to: "rounded-t-150" },
  { from: "rounded-b-large", to: "rounded-b-150" },
  { from: "rounded-l-large", to: "rounded-l-150" },
  { from: "rounded-r-large", to: "rounded-r-150" },
  { from: "rounded-x-large", to: "rounded-x-150" },
  { from: "rounded-y-large", to: "rounded-y-150" },
  // Add more transformations as needed
];

async function replaceInFile(filePath) {
  try {
    let data = await readFile(filePath, "utf8");
    let modified = false;

    for (const { from, to } of transformations) {
      const regex = new RegExp(from, "g");
      const newData = data.replace(regex, to);
      if (newData !== data) {
        data = newData;
        modified = true;
      }
    }

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

    for (const file of files) {
      const filePath = join(dir, file);
      const stats = await stat(filePath);

      if (stats.isDirectory()) {
        await walkDir(filePath);
      } else if (stats.isFile() && /\.(js|jsx|ts|tsx)$/.test(file)) {
        await replaceInFile(filePath);
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
}

// Start the process from the current directory
walkDir(process.cwd()).catch(err => {
  console.error("An error occurred:", err);
});
