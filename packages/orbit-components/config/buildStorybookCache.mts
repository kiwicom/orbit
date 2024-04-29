import * as fs from "fs";

const manifestFilePath = "./.out/manifest.manifest";
const cacheFiles = [
  "/index.html",
  "/iframe.html",
  "/*.json",
  "/**/*.js",
  "/**/*.css",
  "/**/*.woff2",
  // Add more files here...
];

const generateManifest = () => {
  const manifestContent = `CACHE MANIFEST
# Version: ${new Date().toISOString()}

CACHE:
${cacheFiles.join("\n")}

NETWORK:
*

FALLBACK:
`;

  fs.writeFileSync(manifestFilePath, manifestContent);
  console.log(`Manifest file generated at ${manifestFilePath}`);
};

generateManifest();
