module.exports = ({ actions, schema }) => {
  const { createTypes } = actions;

  const exampleType = schema.buildObjectType({
    name: "Example",
    interfaces: [`Node`],
    fields: {
      example: `String!`,
      example_id: `String!`,
      absolutePath: `String!`,
      scope: `[ExampleScope]`,
      knobs: `[Knob]`,
    },
  });

  createTypes([
    `
    type Knob {
      name: String
      type: String
      defaultValue: String
      options: String
    }

    type ExampleScope {
      name: String!
      default: String!
      path: String!
    }
  `,
    exampleType,
  ]);
};
