import { fileURLToPath } from "url";
import { path } from "zx";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const getOutputPath = (p: string, name: string) => {
  if (p) return path.resolve(p, `tracking-${name}.json`);
  return path.resolve(process.cwd(), `tracking-${name}.json`);
};
