// @noflow
const { spawn } = require("child_process");
const dotenv = require("dotenv-safe");

dotenv.config();

function publishPackages() {
  return spawn(
    "yarn",
    ["lerna", "publish", "--conventional-commits", "--create-release", "github"],
    { stdio: "inherit" },
  );
}

module.exports = {
  publish: publishPackages,
};
