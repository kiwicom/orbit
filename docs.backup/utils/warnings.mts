const throwInCI = varName => {
  if (process.env.CI)
    throw new Error(
      `${varName} is missing from the environment, make sure to add it to the GitHub Actions workflow.`,
    );
};

export const warnMissingAccessToken = error => {
  if (typeof error.missing === "undefined") {
    console.error(error);
    const msg =
      "You may have forgotten to include the repo and read:org scopes for your GitHub access token.";
    console.info(msg);
    return msg;
  }

  if (error.missing.includes("GH_TOKEN")) {
    throwInCI("GH_TOKEN");
    const warn = "Missing an access token for GitHub. Please create one.";
    const info = `The token is needed to display the Contributors component, which is based on the GitHub API.",
    "Create a personal access token: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token",
    "Don't forget to include the required scopes for the token: all repo scopes and read:org.",
    "After creating a token in GitHub, add it to a .env file in the root folder with GH_TOKEN=<YOUR TOKEN>`;
    console.warn(warn);
    console.info(info);
    // @ts-expect-error TODO
    return warn.concat(info).join("\n");
  }

  return "";
};

export const warnMissingFigmaToken = error => {
  if (error.missing.includes("FIGMA_TOKEN")) {
    throwInCI("FIGMA_TOKEN");
    console.warn("Missing an access token for Figma files API. Please create one.");
    console.info(
      "The token is needed to be able to fetch and store images from Figma API.",
      "Create a personal access token: https://www.figma.com/developers/api#access-tokens",
      "After creating a token in Figma, add it to a .env file in the root folder wit FIGMA_TOKEN=<YOUR TOKEN>",
    );
  }
};
