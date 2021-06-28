const path = require("path");
const { vol } = require("memfs");
const dedent = require("dedent");

const { createOverviewPages } = require("../services/overview-pages");
const { createPages } = require("../gatsby-node");

jest.mock("fs", () => require("memfs").fs);

const ROOT = path.resolve(__dirname, "../src/documentation");

const json = {
  "./03-components/meta.yml": dedent`
      title: Components
      type: folder
  `,
  "./03-components/action/meta.yml": dedent`
      title: Action
      type: folder
      description: Action folder
  `,
  "./03-components/action/button/meta.yml": dedent`
      title: Button
      description: Displays a single important action a user can take.
      type: tabs
  `,
};

describe("overview-pages", () => {
  it("it should render overview-pages", async () => {
    const graphql = jest.fn(() =>
      Promise.resolve({
        data: {
          allMdx: {
            nodes: [],
          },
        },
      }),
    );

    vol.fromJSON(json, ROOT);

    const createPage = jest.fn();
    await createPages({ graphql, actions: { createPage } });

    await createOverviewPages(page =>
      createPage({
        path: page.slug,
        component: path.join(__dirname, "../src/templates/Overview.tsx"),
        context: { ...page },
      }),
    );

    expect(createPage).toHaveBeenNthCalledWith(1, {
      component: path.join(__dirname, "../src/templates/Overview.tsx"),
      context: {
        pages: [
          {
            description: "Action folder",
            pages: [
              {
                description: "Displays a single important action a user can take.",
                slug: "/components/action/button",
                title: "Button",
              },
            ],
            slug: "/components/action",
            title: "Action",
          },
        ],
        description: undefined,
        slug: "/components",
        title: "Components",
      },
      path: "/components",
    });

    expect(createPage).toHaveBeenNthCalledWith(2, {
      component: path.join(__dirname, "../src/templates/Overview.tsx"),
      context: {
        pages: [
          {
            description: "Displays a single important action a user can take.",
            slug: "/components/action/button",
            title: "Button",
          },
        ],
        description: "Action folder",
        slug: "/components/action",
        title: "Action",
      },
      path: "/components/action",
    });
  });
});
