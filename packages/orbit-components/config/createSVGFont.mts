import SVGIcons2SVGFontStream from "svgicons2svgfont";
import { path, fs } from "zx";
import svg2ttf from "svg2ttf";
import ttf2woff2 from "ttf2woff2";
import filedirname from "filedirname";

const [, __dirname] = filedirname();
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
        resolve(undefined);
      })
      .on("error", (err: Error) => {
        reject(err);
      });

    const iconList = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/../src/data/icons.json"), "utf8"),
    );

    Object.keys(iconList).forEach(iconName => {
      const iconPath =
        iconList[iconName].iconFont === "false" ? "../src/icons/svg/mobile/" : "../src/icons/svg/";
      const icon = fs.createReadStream(path.join(__dirname, iconPath, `${iconName}.svg`));

      // @ts-expect-error TODO
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
