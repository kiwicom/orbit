// import React from "react";
// import { PageRendererProps, graphql, useStaticQuery } from "gatsby";

// import ComponentsList from "./components/ComponentList";
// import DocLayout from "../DocLayout";
// import { SchemeTrackingNode } from "./interfaces";

// const AllRepositories = ({ location }: PageRendererProps) => {
//   const { allTracking }: SchemeTrackingNode = useStaticQuery(graphql`
//     query AllRepositoriesTracking {
//       # get only the latest
//       allTracking(sort: { fields: createdAt, order: DESC }, limit: 8) {
//         nodes {
//           createdAt
//           trackedData {
//             instances
//             category
//             icon
//             isDeprecated
//             name
//           }
//         }
//       }
//     }
//   `);

//   const components = allTracking.nodes.reduce((acc, cur) => {
//     cur.trackedData
//       .filter(source => !source.icon)
//       .forEach(({ name, instances, category, isDeprecated }) => {
//         if (!acc[name]) {
//           acc[name] = {
//             name,
//             instances,
//             category,
//             isDeprecated,
//             slug: `/dashboard/tracking/allrepositories/${name.toLowerCase()}`,
//           };
//         } else {
//           const prev = acc[name];

//           acc[name] = {
//             ...acc[name],
//             instances: prev.instances + instances,
//           };
//         }
//       });

//     return acc;
//   }, []);

//   return (
//     <DocLayout
//       location={location}
//       path="/dashboard/tracking/allrepositories/"
//       title="All Repositories"
//       noElevation
//     >
//       <ComponentsList components={Object.values(components)} />
//     </DocLayout>
//   );
// };

// export default AllRepositories;
