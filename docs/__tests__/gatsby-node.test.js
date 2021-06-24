const path = require("path");
const { vol } = require("memfs");
const dedent = require("dedent");
const matter = require("gray-matter");
const globby = require("globby");
const fsx = require("fs-extra");

const { onCreateNode } = require("../gatsby-node");

jest.mock("fs", () => require("memfs").fs);
jest.mock("gatsby-source-filesystem", () => {
  const { basename } = require("path");
  return {
    createFilePath: ({ node }) =>
      `/${node.parent.relativeDirectory}/${basename(node.fileAbsolutePath)}/`,
  };
});

const ROOT = path.resolve(__dirname, "../src/documentation");

function getDirectoryNode(relativePath) {
  return {
    internal: { type: "Directory" },
    sourceInstanceName: "documentation",
    relativePath,
    absolutePath: `${ROOT}/${relativePath}`,
  };
}

function getMetaFileNode(relativePath) {
  return {
    internal: { type: "File" },
    sourceInstanceName: "documentation",
    relativePath,
    relativeDirectory: path.dirname(relativePath),
    absolutePath: `${ROOT}/${relativePath}`,
    base: path.basename("meta.yml"),
  };
}

function getMdxNode(relativePath, frontmatter) {
  return {
    internal: { type: "Mdx" },
    fileAbsolutePath: path.join(ROOT, relativePath),
    frontmatter,
    fields: {},
    parent: {
      internal: { type: "File" },
      sourceInstanceName: "documentation",
      relativeDirectory: path.dirname(relativePath),
    },
  };
}

const cacheMap = new Map();
const cache = {
  get: async key => cacheMap.get(key),
  set: async (key, value) => cacheMap.set(key, value),
};

afterEach(() => {
  cacheMap.clear();
});

describe("gatsby-node", () => {
  describe("registering documents", () => {
    it("should report missing meta.yml files", async () => {
      const node = getDirectoryNode("01-getting-started");
      const reporter = { panicOnBuild: jest.fn() };
      await onCreateNode({ cache, node, reporter });
      expect(reporter.panicOnBuild.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "Expected meta.yml file to exist in \\"docs/src/documentation/01-getting-started\\", every directory in \\"src/documentation\\" should have one",
          ],
        ]
      `);
    });

    it("should report missing fields in meta.yml", async () => {
      vol.fromJSON(
        {
          "./01-getting-started/meta.yml": dedent`
            foo: bar
          `,
        },
        ROOT,
      );
      const node = getMetaFileNode("01-getting-started/meta.yml");
      const reporter = { panicOnBuild: jest.fn() };
      await onCreateNode({ cache, node, reporter });
      // first time for "title", second for "type"
      expect(reporter.panicOnBuild.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "Expected \\"docs/src/documentation/01-getting-started/meta.yml\\" to contain fields: title, type",
          ],
        ]
      `);
    });

    it("should report incorrect type value in meta.yml", async () => {
      vol.fromJSON(
        {
          "./01-getting-started/meta.yml": dedent`
            title: Getting started
            type: unknown
          `,
        },
        ROOT,
      );
      const node = getMetaFileNode("01-getting-started/meta.yml");
      const reporter = { panicOnBuild: jest.fn() };
      await onCreateNode({ cache, node, reporter });
      // first time for "title", second for "type"
      expect(reporter.panicOnBuild.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "Expected the value of \\"type\\" in \\"docs/src/documentation/01-getting-started/meta.yml\\" to be one of: folder, tabs",
          ],
        ]
      `);
    });

    it("should create trail nodes", async () => {
      vol.fromJSON(
        {
          "./01-getting-started/meta.yml": dedent`
            title: Getting started
            type: folder
          `,
          "./01-getting-started/01-for-designers/meta.yml": dedent`
            title: For designers
            type: tabs
          `,
          "./01-getting-started/01-for-designers/01-kiwi.mdx": dedent`
            ---
            title: For Kiwi.com employees
            ---
          `,
          "./01-getting-started/01-for-designers/02-open-source.mdx": dedent`
            ---
            title: For open-source
            ---
          `,
          "./01-getting-started/02-for-developers.mdx": dedent`
            ---
            title: For developers
            description: Our components are served as an npm package.
            ---
          `,
          "./01-getting-started/03-github.mdx": dedent`
            ---
            title: GitHub repos & resources
            description: List of repositories related to Orbit design system.
            ---
          `,
          "./01-getting-started/04-support/meta.yml": dedent`
            title: Support
            description: A list of all channels where to report any bug or request new features.
            type: tabs
          `,
          "./01-getting-started/04-support/01-kiwi.mdx": dedent`
            ---
            title: For Kiwi.com
            ---
          `,
          "./01-getting-started/04-support/02-open-source.mdx": dedent`
            ---
            title: For open source
            ---
          `,
          "./01-getting-started/04-support/03-team.mdx": dedent`
            ---
            title: Team & contributors
            ---
          `,
        },
        ROOT,
      );
      const getNode = n => n; // not really, but good enough

      const files = globby.sync(ROOT);

      await Promise.all(
        files
          .filter(file => file.endsWith("meta.yml"))
          .map(async metaFile => {
            const node = getMetaFileNode(path.relative(ROOT, metaFile));
            await onCreateNode({ cache, node, getNode });
          }),
      );

      const trails = await Promise.all(
        files
          .filter(file => !file.endsWith("meta.yml"))
          .sort()
          .map(async file => {
            const relativePath = path.relative(ROOT, file);
            const content = fsx.readFileSync(file);
            const node = getMdxNode(relativePath, matter(content).data);
            const actions = {
              createNodeField: ({ node: n, name, value }) => {
                // eslint-disable-next-line no-param-reassign
                n.fields[name] = value;
              },
            };
            await onCreateNode({ cache, node, getNode, actions });
            return { file: relativePath, trail: node.fields.trail };
          }),
      );

      expect(trails).toMatchSnapshot();
    });
  });
});
