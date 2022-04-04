import trackingDiff from "../compare";

export default async ({ actions }) => {
  const { createPage } = actions;
  const diff = await trackingDiff();

  createPage({
    path: `dashboard/difference`,
    matchPath: "/dashboard/difference/",
    component: `${process.cwd()}/src/templates/Difference.tsx`,
    context: { diff },
  });
};
