import DefaultValue from "./resolvers";

export default ({ actions, schema }) => {
  try {
    const { createTypes } = actions;
    const { buildScalarType } = schema;

    const typeDefs = [
      `
      type Example implements Node {
        example: String!
        example_id: String!
        absolutePath: String!
        scope: [ExampleScope]
        exampleKnobs: [ExampleKnobs]
        exampleVariants: [Variant]
      }

      type Variant {
        name: String
        code: String
      }

      type Knob {
        name: String!
        type: String!
        defaultValue: DefaultValue
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
      buildScalarType(DefaultValue),
    ];

    createTypes(typeDefs);
  } catch (err) {
    console.error(err);
  }
};
