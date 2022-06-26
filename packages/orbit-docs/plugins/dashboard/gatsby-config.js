const { useGatsbyConfig } = require("gatsby-plugin-ts-config");

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = useGatsbyConfig(() => require("./gatsby-config.ts"));
