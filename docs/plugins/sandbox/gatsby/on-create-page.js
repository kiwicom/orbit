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
          fields {
            knobs {
              name
              defaultValue
              type
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error when querying examples.`);
    return;
  }

  result.data.allExample.nodes.forEach(({ id, example, example_id, scope, fields }) => {
    if (!example) return;

    createPage({
      path: `examples/${example_id.toLowerCase()}`,
      component: `${process.cwd()}/src/templates/Sandbox/index.tsx`,
      context: { id, example, example_id, scope, knobs: (fields && fields.knobs) || [] },
    });

    createPage({
      path: `examples/${id}`,
      component: `${process.cwd()}/src/templates/Sandbox/PureSandbox.tsx`,
      context: { id, example, example_id, scope, knobs: (fields && fields.knobs) || [] },
    });
  });
};
