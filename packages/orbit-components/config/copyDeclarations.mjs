import { globby, fs } from "zx";

(async () => {
  for (const decl of await globby(`**/*.{js.flow,jsx.flow,d.ts}`, { cwd: "src" })) {
    for (const dist of ["lib", "es"]) {
      await fs.copy(`src/${decl}`, `${dist}/${decl.replace(/\.jsx\.flow$/, ".js.flow")}`);
    }
  }
})();
