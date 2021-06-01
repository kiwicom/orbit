const fsx = require("fs-extra");
const path = require("path");
const dedent = require("dedent");

const { getDocumentUrl } = require("../document");

const ROOT = path.resolve(__dirname, "../../src/documentation");

jest.mock("fs", () => require("memfs").fs);

describe("document utils", () => {
  beforeAll(async () => {
    await fsx.mkdirp(`${ROOT}/01-getting-started`);
    await fsx.writeFile(
      `${ROOT}/01-getting-started/meta.yml`,
      dedent`
      title: Getting started
      type: folder
    `,
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
  });
  describe(getDocumentUrl.name, () => {
    it("should return URL path based on document's file path", async () => {
      expect(getDocumentUrl("/01-getting-started/01-for-developers.mdx")).toBe(
        "/getting-started/for-developers/",
      );
      expect(getDocumentUrl("/01-getting-started/02-for-designers/01-kiwi.mdx", true)).toBe(
        "/getting-started/for-designers/",
      );
      expect(getDocumentUrl("/01-getting-started/02-for-designers/02-open-source.mdx", true)).toBe(
        "/getting-started/for-designers/open-source/",
      );
    });
  });
});
