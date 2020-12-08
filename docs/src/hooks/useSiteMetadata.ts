import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query metaQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
