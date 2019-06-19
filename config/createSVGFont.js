// @flow
import SVGIcons2SVGFontStream from "svgicons2svgfont";
import path from "path";
import fs from "fs";
import svg2ttf from "svg2ttf";
import ttf2woff2 from "ttf2woff2";

import iconList from "../src/data/icons.json";

const ORBIT_ICONS_DIR = path.join(__dirname, "../orbit-icons-font");

const createSVG = () =>
  new Promise((resolve, reject) => {
    if (!fs.existsSync(ORBIT_ICONS_DIR)) {
      fs.mkdirSync(ORBIT_ICONS_DIR);
    }

    const fontStream = new SVGIcons2SVGFontStream({
      fontName: "orbit-icons",
      fontHeight: 1000,
      normalize: true,
    });

    fontStream
      .pipe(fs.createWriteStream(path.join(ORBIT_ICONS_DIR, "orbit-icons.svg")))
      .on("finish", () => {
        resolve();
      })
      .on("error", err => {
        reject(err);
      });

    Object.keys(iconList).forEach(iconName => {
      const icon = fs.createReadStream(
        path.join(__dirname, "../src/icons/svg/", `${iconName}.svg`),
      );

      // $FlowFixMe
      icon.metadata = {
        unicode: [String.fromCharCode(Number(`0x${iconList[iconName].character}`))],
        name: iconName,
      };

      fontStream.write(icon);
    });

    fontStream.end();
  });

createSVG().then(() => {
  const TTF_PATH = path.join(ORBIT_ICONS_DIR, "orbit-icons.ttf");

  const TTF = svg2ttf(fs.readFileSync(path.join(ORBIT_ICONS_DIR, "orbit-icons.svg"), "utf8"), {});
  fs.writeFileSync(TTF_PATH, Buffer.from(TTF.buffer));

  fs.writeFileSync(
    path.join(ORBIT_ICONS_DIR, "orbit-icons.woff2"),
    ttf2woff2(fs.readFileSync(TTF_PATH)),
  );
});
