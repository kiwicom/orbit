import { helpers, queries } from "@kiwicom/orbit-tracking";

export default async ({ actions, createNodeId, createContentDigest, reporter }) => {
  try {
    const { createNode } = actions;

    if (process.env.GATSBY_ORBIT_STORAGE_PATH) {
      const pathsRes = await helpers.apiRequest(queries.projectPathQuery, {
        path: process.env.GATSBY_ORBIT_STORAGE_PATH,
      });

      if (pathsRes) {
        const paths = pathsRes.data.project.repository.tree.blobs.nodes
          .map(b => b.path)
          .filter(n => n.includes(".json"));

        const resBlob = await helpers.apiRequest(queries.projectRawBlobQuery, {
          path: process.env.GATSBY_ORBIT_STORAGE_PATH,
          paths,
          last: 1,
        });

        if (resBlob) {
          const data = resBlob.data.project.repository.blobs.nodes.map(({ rawBlob }) => rawBlob);
          console.log(data);
          JSON.parse(data[0]).forEach(repo => {
            createNode({
              ...repo,
              id: createNodeId(`tracking-${repo.id}`),
              parent: null,
              children: [],
              internal: {
                type: `Tracking`,
                content: JSON.stringify(repo),
                contentDigest: createContentDigest(repo),
              },
            });
          });
        }
      }
    }
  } catch (err) {
    console.error(err);
    reporter.panicOnBuild(err);
  }
};
