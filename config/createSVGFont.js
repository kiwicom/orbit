// @flow
const SVGIcons2SVGFontStream = require("svgicons2svgfont");
const fs = require("fs");

const iconList = require("../src/icons/svg/icons.json");

const fontStream = new SVGIcons2SVGFontStream({
  fontName: "orbit-icons",
  fontHeight: 1000,
  normalize: true,
});

// https://github.com/fontello/ttf2eot
// https://github.com/fontello/ttf2woff
// https://github.com/nfroidure/ttf2woff2

// Setting the font destination
fontStream
  .pipe(fs.createWriteStream("fonts/orbit-icons.svg"))
  .on("finish", function() {
    console.log("Font successfully created!");
  })
  .on("error", function(err) {
    console.log(err);
  });

Object.keys(iconList).forEach(iconName => {
  const icon = fs.createReadStream(
    iconList[iconName].url.replace(
      "https://raw.githubusercontent.com/kiwicom/orbit-components/master/",
      "",
    ),
  );
  icon.metadata = {
    unicode: [String.fromCharCode(`0x${iconList[iconName].character}`)],
    name: iconName,
  };
  fontStream.write(icon);
});

fontStream.end();
