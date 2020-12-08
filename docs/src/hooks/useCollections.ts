import { useStaticQuery, graphql } from "gatsby";

type Collections =
  | "guides"
  | "getting-started"
  | "design-tokens"
  | "foundation"
  | "accessibility"
  | "components"
  | "utilities";

const DEFAULT: Collections[] = [
  "guides",
  "getting-started",
  "design-tokens",
  "foundation",
  "accessibility",
  "components",
  "utilities",
];

const useCollections = (collections: Collections[] = DEFAULT) => {
  const { allDirectory } = useStaticQuery(
    graphql`
      query collectionsQuery {
        allDirectory(filter: { sourceInstanceName: { eq: "documentation" } }) {
          nodes {
            id
            name
          }
        }
      }
    `,
  );

  return allDirectory.nodes
    .map(({ id, name }) => ({ id, name: name.replace(/^\d+-\s*/g, "") }))
    .filter(d => collections.includes(d.name));
};

export default useCollections;
