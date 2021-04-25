const fsx = require("fs-extra");
const path = require("path");
const dedent = require("dedent");

const { doesPageHaveTabs, getDocumentUrlPath } = require("../document");

const ROOT = path.resolve(__dirname, "../../src/documentation");

jest.mock("fs", () => require("memfs").fs);

const getDevelopPath = () => path.parse("/01-getting-started/01-for-developers.mdx");
const getKiwiPath = () => path.parse("/01-getting-started/02-for-designers/01-kiwi.mdx");
const getOpenPath = () => path.parse("/01-getting-started/02-for-designers/02-open-source.mdx");

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
  describe(getDocumentUrlPath.name, () => {
    it("should return URL path based on document's file path", async () => {
      const developPath = getDevelopPath();
      expect(getDocumentUrlPath(developPath.dir, developPath.base, developPath.name)).toBe(
        "/getting-started/for-developers/",
      );

      const kiwiPath = getKiwiPath();
      expect(getDocumentUrlPath(kiwiPath.dir, kiwiPath.base, kiwiPath.name)).toBe(
        "/getting-started/for-designers/",
      );

      const openPath = getOpenPath();
      expect(getDocumentUrlPath(openPath.dir, openPath.base, openPath.name)).toBe(
        "/getting-started/for-designers/open-source/",
      );
    });
  });
  describe(doesPageHaveTabs.name, () => {
    it("should return proper boolean based on whether pages have tabs", async () => {
      const developPath = getDevelopPath();
      expect(doesPageHaveTabs(developPath.dir)).toBe(false);

      const kiwiPath = getKiwiPath();
      expect(doesPageHaveTabs(kiwiPath.dir)).toBe(true);
    });
  });
});
