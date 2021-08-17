module.exports = ({ actions, schema, reporter }) => {
  try {
    const { createTypes } = actions;

    const exampleType = schema.buildObjectType({
      name: "Example",
      interfaces: [`Node`],
      fields: {
        example: `String!`,
        example_id: `String!`,
        absolutePath: `String!`,
        scope: `[ExampleScope]`,
        exampleKnobs: `[ExampleKnobs]`,
      },
    });

    createTypes([
      `
    type Knob {
      name: String
      type: String
      defaultValue: String
      options: [String]
    }

    type ExampleKnobs {
      component: String!
      knobs: [Knob]
    }

    type ExampleScope {
      name: String!
      default: String!
      path: String!
    }
  `,
      exampleType,
    ]);
  } catch (err) {
    reporter.panicOnBuild(err);
  }
};
