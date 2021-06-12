const path = require("path");
const globby = require("globby");

const { createOverviewPages, renderOverviewPages } = require("../services/overview-pages");
const { createPages } = require("../gatsby-node");

jest.mock("globby");

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

    const files = [
      path.join(__dirname, "../src/documentation/01-getting-started/meta.yml"),
      path.join(__dirname, "../src/documentation/01-getting-started/01-for-designers/meta.yml"),
      path.join(__dirname, "../src/documentation/01-getting-started/04-support/meta.yml"),
      path.join(__dirname, "../src/documentation/01-getting-started/03-github.mdx"),
    ];

    globby.mockResolvedValue(files);

    const createPage = jest.fn();
    createPages({ graphql, actions: { createPage } });

    const pages = await createOverviewPages();

    renderOverviewPages(pages, createPage);

    expect(pages).toMatchSnapshot();
    expect(createPage).toHaveBeenCalledWith({
      component: path.join(__dirname, "../../src/templates/Overview.tsx"),
      context: {
        pages: [
          {
            description: "Everything you need to start designing with the Orbit UI kit.",
            slug: "/getting-started/for-designers",
            title: "For designers",
          },
          {
            description: "A list of all channels for reporting bugs and requesting new features.",
            slug: "/getting-started/support",
            title: "Support",
          },
          {
            description: "A list of repositories related to the Orbit design system.",
            redirect_from: ["/getting-started/github-repos-resources/"],
            slug: "/getting-started/github",
            title: "GitHub repos & resources",
          },
        ],
        slug: "/getting-started",
        title: "Getting started",
      },
      path: "/getting-started",
    });
  });
});
