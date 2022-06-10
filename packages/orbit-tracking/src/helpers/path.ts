import { path } from "zx";
import filedirname from "filedirname";

export const [__filename, __dirname] = filedirname();

export const getOutputPath = (p: string, name: string) => {
  if (p) return path.resolve(p, `tracking-${name}.json`);
  return path.resolve(process.cwd(), `tracking-${name}.json`);
};
