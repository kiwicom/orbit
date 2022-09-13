const html = require("./kiwi-html.cjs");

module.exports = theo => {
  theo.registerValueTransform(
    "addpx",
    prop => prop.get("type") === "size",
    prop => `${prop.get("value")}px`,
  );
  theo.registerTransform("web", ["addpx"]);
  theo.registerFormat("kiwi.html", html);
};
