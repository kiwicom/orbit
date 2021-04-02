import { useStaticQuery, graphql } from "gatsby";

const useMdxPageTableofContents = (pagename: string) => {
  const { mdxPages } = useStaticQuery(
    graphql`
      query MdxPagesQuery {
        mdxPages: allMdx(filter: { fields: { collection: { eq: "pages" } } }) {
          nodes {
            tableOfContents(maxDepth: 4)
            fields {
              slug
            }
          }
        }
      }
    `,
  );

  const tableOfContents = mdxPages.nodes.find(node => node.fields.slug === `/${pagename}/`)
    .tableOfContents.items;

  return tableOfContents;
};

export default useMdxPageTableofContents;
