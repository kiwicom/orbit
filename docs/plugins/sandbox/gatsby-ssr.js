const { ChunkExtractor } = require("@loadable/server");
const { readFileSync, existsSync } = require("fs");

const { stats } = require("./helpers");

const extractor = new ChunkExtractor({
  stats: existsSync(stats) ? JSON.parse(readFileSync(stats, "utf-8")) : {},
  entrypoints: [],
});

exports.wrapRootElement = ({ element }) => extractor.collectChunks(element);

exports.onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents(extractor.getLinkElements());
  setPostBodyComponents([...extractor.getScriptElements(), ...extractor.getStyleElements()]);
  extractor.chunks = [];
};
