import { chalk } from "zx";

export const logStep = (msg: string) => console.log(`\n${chalk.yellow.underline(msg)}`);
