import checkIcons from "./checkIcons";

/*
 Paths are provided as arguments as for example in lint staged,
 and formatted to blob pattern strings e.g. '({pattern1, pattern2})
*/
const paths = process.argv.slice(2);
const formatPaths = pattern => (pattern.length > 1 ? `{${pattern.join(",")}}` : pattern[0]);

const iconPaths = formatPaths(paths);

if (iconPaths) {
  checkIcons(iconPaths);
} else {
  checkIcons();
}
