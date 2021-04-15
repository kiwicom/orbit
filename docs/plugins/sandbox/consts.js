const path = require("path");

const STATS = "loadable-stats.json";
const statsFile = path.resolve(process.cwd(), "public", STATS);

module.exports = {
  statsFile,
};
