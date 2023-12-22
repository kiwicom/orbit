// to avoid an ESLint issue with --report-unused-disable-directives
const path = "../dist";

try {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  require(path);
} catch (err) {
  const match = err.message.match(/Cannot find module '([^']*\/(\w+))'/);
  if (match) {
    console.error(
      `\n@kiwicom/babel-plugin-orbit-components did not correctly transform the import path for the module "${match[2]}", "${match[1]}" doesn't exist. Make sure to configure it properly.\n`,
    );
  } else {
    console.error(err);
  }
  process.exit(1);
}
