const _ = require("lodash");
const path = require("path");

const { getDocumentTrail } = require("../../../utils/document");

module.exports = async ({ graphql, actions, reporter, cache }) => {
  try {
    const { createPage } = actions;

    const result = await graphql(`
      query TrackingDataQuery {
        allTrackingJson {
          nodes {
            name
            trackedData {
              name
            }
          }
        }
      }
    `);

    if (result.errors) {
      reporter.panicOnBuild(`Error when querying json file from data folder.`);
      return;
    }

    const data = result.data.allTrackingJson.nodes;

    const pages = data.map(({ name }) => {
      const url = `/dashboard/tracking/${name.toLowerCase()}`;

      return {
        slug: url,
        title: _.upperFirst(name),
        hasReactTab: false,
      };
    });

    await cache.set(`/`, { title: "Orbit.kiwi", slug: "/" });
    await cache.set(`/dashboard/`, { title: "Dashboard", slug: "/dashboard/" });
    await cache.set(`/dashboard/tracking/`, { title: `Tracking`, slug: `/dashboard/tracking/` });

    createPage({
      path: "dashboard/tracking",
      matchPath: `dashboard/tracking`,
      component: path.resolve(__dirname, "../../../src/templates/Overview.tsx"),
      context: {
        pages,
        slug: `dashboard/tracking`,
        title: "Tracking",
        trail: await getDocumentTrail(cache, `/dashboard/tracking/`),
      },
    });

    await Promise.all(
      data.map(async ({ name, trackedData }) => {
        const repoName = name.toLowerCase();
        const url = `/dashboard/tracking/${repoName}/`;
        await cache.set(url, { title: _.upperFirst(repoName), slug: url });
        const trail = await getDocumentTrail(cache, url);

        createPage({
          path: url,
          matchPath: url,
          component: path.resolve(__dirname, "../../../src/templates/Tracking/index.tsx"),
          context: { name: repoName, trail },
        });

        await Promise.all(
          trackedData.map(async ({ name: componentName }) => {
            const componentUrl = `/dashboard/tracking/${repoName}/${componentName.toLowerCase()}/`;
            await cache.set(componentUrl, { title: componentName, slug: componentUrl });
            const componentTrail = await getDocumentTrail(cache, componentUrl);

            createPage({
              path: componentUrl,
              matchPath: componentUrl,
              component: path.resolve(
                __dirname,
                "../../../src/templates/Tracking/ComponentPage.tsx",
              ),
              context: { name: componentName, repoName, trail: componentTrail },
            });
          }),
        );
      }),
    );
  } catch (err) {
    console.error(err);
  }
};
