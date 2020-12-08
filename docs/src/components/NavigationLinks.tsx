import React from "react";
import { graphql } from "gatsby";

interface Props {
  data: any;
}

export default function NavigationLinks({ data }: Props) {
  return <div></div>;
}

// export const query = graphql`
//   query LinksQuery() {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//       }
//       body
//     }
//   }
// `;
