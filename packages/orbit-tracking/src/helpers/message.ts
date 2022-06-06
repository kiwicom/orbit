import { chalk } from "zx";

export const errorMessage = (str: string) => console.error(chalk.red(str));
export const infoMessage = (str: string) => console.info(chalk.magenta.bold(str));
