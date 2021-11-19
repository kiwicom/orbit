const fs = require("fs");
const path = require("path");

/**
 * necessary for using Streamline icons via the @streamlinehq/* packages
 *
 * currently not in use because Streamline's script that was fetching the icons
 * was sometimes failing, causing the CI to fail, so we temporarily downloaded their icons
 */

if (process.env.CI) {
  fs.writeFileSync(
    path.join(process.cwd(), "streamlinehq.json"),
    JSON.stringify({
      secret: process.env.STREAMLINE_SECRET,
      families: JSON.parse(process.env.STREAMLINE_FAMILIES),
    }),
  );
}
