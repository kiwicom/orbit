import execa from "execa";

describe("test cli", () => {
  it("should have error: not in the scope", async () => {
    try {
      await execa.command(`orbit-tracking -s kek`);
    } catch ({ exitCode, stderr }) {
      expect(exitCode).toBe(1);
      expect(stderr).toContain("ERR: This project is not in the scope");
    }
  });

  it("should have passed config", async () => {
    try {
      await execa.command(`orbit-tracking -s kek -c customConfig.config.js`);
    } catch ({ exitCode, stderr }) {
      expect(exitCode).toBe(1);
      expect(stderr).toContain("Could not find config file");
    }
  });

  it("should have error: missing token", async () => {
    try {
      process.env.GITLAB_TOKEN = "";
      await execa.command(`orbit-tracking -s frontend`);
    } catch ({ exitCode, stderr }) {
      expect(exitCode).toBe(1);
      expect(stderr).toContain("Gitlab api token is missing");
    }
  });
});
