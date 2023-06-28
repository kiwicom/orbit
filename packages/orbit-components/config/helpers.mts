import env from "dotenv-safe";
import dedent from "dedent";
// @ts-expect-error MTS doesn't support generics yet for that
export const api = <T>(url: string) =>
  fetch(url, {
    headers: { "Content-Type": "application/", "X-FIGMA-TOKEN": process.env.FIGMA_TOKEN || "" },
  }).then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json() as Promise<T>;
  });

export const dotenv = () => {
  try {
    env.config({
      example: `${process.cwd()}/../../.env.example`,
      path: `${process.cwd()}/../../.env`,
    });
  } catch (err) {
    if (err.missing.includes("FIGMA_TOKEN")) {
      throw new Error(
        dedent`
        Figma token is missing in the .env file:
        ${err.missing.join("\n")}
        You can generate one in your Figma account settings
      `,
      );
    }
  }
};
