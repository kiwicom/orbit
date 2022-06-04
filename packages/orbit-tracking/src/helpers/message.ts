import chalk from "chalk";

export const errorMessage = (str: string) => console.error(chalk.red.bold.underline(str));
export const infoMessage = (str: string) => console.info(chalk.magenta.bold(str));
