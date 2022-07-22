import { globby, fs } from "zx";

export default async function renameTypeDeclarations() {
  const files = await globby("{es,lib}/**/*.jsx.flow");

  for (const file of files) {
    await fs.rename(file, file.replace(/\.jsx\.flow/, ".js.flow"));
  }
}
