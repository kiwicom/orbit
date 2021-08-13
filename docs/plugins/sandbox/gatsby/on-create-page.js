module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query ExamplesQuery {
      allExample {
        nodes {
          id
          example
          example_id
          scope {
            name
            path
            default
          }
          knobs {
            defaultValue
            name
            type
            options
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error when querying examples.`);
    return;
  }

  result.data.allExample.nodes.forEach(ctx => {
    if (!ctx.example) return;
    const { example_id, id } = ctx;

    createPage({
      path: `examples/${example_id.toLowerCase()}`,
      component: `${process.cwd()}/src/templates/Sandbox/index.tsx`,
      context: { ...ctx },
    });

    createPage({
      path: `examples/${id}`,
      component: `${process.cwd()}/src/templates/Sandbox/PureSandbox.tsx`,
      context: { ...ctx },
    });
  });
};
