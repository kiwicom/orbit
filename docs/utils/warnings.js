const warnMissingAccessToken = error => {
  if (error.missing.includes("GH_TOKEN")) {
    console.warn("Missing an access token for GitHub. Please create one.");
    console.info(
      "The token is needed to display the Contributors component, which is based on the GitHub API.",
      "Create a personal access token: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token",
      "Don't forget to include the required scopes for the token: all repo scopes and read:org.",
      "After creating a token in GitHub, add it to a .env file in the root folder with GH_TOKEN=<YOUR TOKEN>",
    );
  } else if (typeof error.missing === "undefined") {
    console.error(error);
    console.info(
      "You may have forgotten to include the repo and read:org scopes for your GitHub access token.",
    );
  }
};

module.exports = warnMissingAccessToken;
