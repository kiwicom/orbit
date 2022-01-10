const _ = require("lodash");
const path = require("path");

const { getDocumentTrail } = require("../../../utils/document");

module.exports = async ({ graphql, actions, reporter, cache }) => {
  try {
    const { createPage } = actions;

    const result = await graphql(`
      query TrackingDataQuery {
        allTracking(sort: { fields: createdAt, order: DESC }, limit: 8) {
          nodes {
            name
            createdAt
            trackedData {
              icon
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

    const data = result.data.allTracking.nodes;

    const pages = data.map(({ name }) => {
      const url = `/dashboard/tracking/${name.toLowerCase()}`;

      return {
        slug: url,
        title: _.upperFirst(name),
        hasReactTab: false,
      };
    });

    pages.push({
      slug: "/dashboard/tracking/allrepositories",
      title: "All Repositories",
      hasReactTab: false,
    });

    await cache.set(`/`, { title: "Orbit.kiwi", slug: "/" });
    await cache.set(`/dashboard/`, { title: "Dashboard", slug: "/dashboard/" });
    await cache.set(`/dashboard/tracking/`, { title: `Tracking`, slug: `/dashboard/tracking/` });
    await cache.set(`/dashboard/tracking/allrepositories`, {
      title: `All Repositories`,
      slug: `/dashboard/tracking/allrepositories`,
    });

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

    createPage({
      path: "dashboard/tracking/allrepositories",
      matchPath: "dashboard/tracking/allrepositories",
      component: path.resolve(__dirname, "../../../src/templates/Tracking/AllRepositories.tsx"),
      context: {
        slug: `dashboard/tracking/allrepositories`,
        title: "All Repositories",
        trail: await getDocumentTrail(cache, `/dashboard/tracking/allrepositories`),
      },
    });

    const allUsedComponents = result.data.allTracking.nodes.reduce((acc, cur) => {
      cur.trackedData.forEach(({ name, icon }) => {
        if (!icon) {
          if (!acc.includes(name)) {
            acc.push(name);
          }
        }
      });

      return acc;
    }, []);

    allUsedComponents.forEach(async component => {
      createPage({
        path: `dashboard/tracking/allrepositories/${component.toLowerCase()}`,
        matchPath: `dashboard/tracking/allrepositories/${component.toLowerCase()}`,
        component: path.resolve(
          __dirname,
          "../../../src/templates/Tracking/AllRepositoriesComponent.tsx",
        ),
        context: {
          slug: `dashboard/tracking/allrepositories/${component.toLowerCase()}`,
          title: component,
          trail: await getDocumentTrail(cache, `/dashboard/tracking/allrepositories`),
        },
      });
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
