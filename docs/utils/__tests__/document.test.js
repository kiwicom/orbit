const fsx = require("fs-extra");
const path = require("path");
const dedent = require("dedent");

const { getDocumentUrlPath } = require("../document");

const ROOT = path.resolve(__dirname, "../../src/documentation");

jest.mock("fs", () => require("memfs").fs);

describe("document utils", () => {
  describe(getDocumentUrlPath.name, () => {
    it("should return URL path based on document's file path", async () => {
      await fsx.mkdirp(`${ROOT}/01-getting-started`);
      await fsx.writeFile(
        `${ROOT}/01-getting-started/meta.yml`,
        dedent`
        title: Getting started
        type: folder
      `,
      );
      expect(getDocumentUrlPath("/01-getting-started/01-for-developers.mdx")).toBe(
        "/getting-started/for-developers/",
      );
      await fsx.mkdirp(`${ROOT}/01-getting-started/02-for-designers`);
      await fsx.writeFile(
        `${ROOT}/01-getting-started/02-for-designers/meta.yml`,
        dedent`
        title: For designers
        description: Everything you need to start designing with Orbit UI kit.
        type: tabs
      `,
      );
      expect(getDocumentUrlPath("/01-getting-started/02-for-designers/01-kiwi.mdx")).toBe(
        "/getting-started/for-designers/",
      );
      expect(getDocumentUrlPath("/01-getting-started/02-for-designers/02-open-source.mdx")).toBe(
        "/getting-started/for-designers/open-source/",
      );
    });
  });
});
