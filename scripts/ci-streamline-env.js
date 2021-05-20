const fs = require("fs");
const path = require("path");

if (process.env.CI) {
  fs.writeFileSync(
    path.join(process.cwd(), "streamlinehq.json"),
    JSON.stringify({
      secret: process.env.STREAMLINE_SECRET,
      families: JSON.parse(process.env.STREAMLINE_FAMILIES),
    }),
  );
}
