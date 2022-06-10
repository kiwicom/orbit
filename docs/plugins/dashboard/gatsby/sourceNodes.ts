import axios from "axios";

import { projectPathQuery, projectRawBlobQuery } from "./queries";

const BASE_URL = `https://gitlab.skypicker.com/api/graphql/`;

async function request(query: string, vars?: Record<string, string | number | string[]>) {
  const { data } = await axios.post(
    BASE_URL,
    {
      query,
      variables: vars,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITLAB_TOKEN}`,
      },
    },
  );

  return data;
}

export default async ({ actions, createNodeId, createContentDigest, reporter }) => {
  try {
    const { createNode } = actions;

    if (process.env.GATSBY_ORBIT_STORAGE_PATH) {
      const pathsRes = await request(projectPathQuery, {
        path: process.env.GATSBY_ORBIT_STORAGE_PATH,
      });

      if (pathsRes) {
        const paths = pathsRes.data.project.repository.tree.blobs.nodes
          .map(b => b.path)
          .filter(n => n.includes(".json"));

        const resBlob = await request(projectRawBlobQuery, {
          path: process.env.GATSBY_ORBIT_STORAGE_PATH,
          paths,
          last: 1,
        });

        if (resBlob) {
          const data = resBlob.data.project.repository.blobs.nodes.map(({ rawBlob }) => rawBlob);
          JSON.parse(data).forEach(repo => {
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
