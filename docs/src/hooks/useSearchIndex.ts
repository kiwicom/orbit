import { useStaticQuery, graphql } from "gatsby";

const useSearchIndex = () => {
  const { siteSearchIndex } = useStaticQuery(
    graphql`
      query SearchQuery {
        siteSearchIndex {
          index
        }
      }
    `,
  );

  return siteSearchIndex;
};

export default useSearchIndex;
