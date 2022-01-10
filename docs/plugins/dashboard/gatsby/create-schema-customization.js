module.exports = ({ actions, schema }) => {
  try {
    const { createTypes } = actions;
    const typeDefs = [
      schema.buildObjectType({
        name: "LastCommit",
        fields: {
          sha: `String`,
          title: `String`,
          webUrl: `String`,
        },
      }),

      schema.buildObjectType({
        name: "TrackedDataPropsValue",
        fields: {
          name: `String`,
          used: `Int`,
        },
      }),

      schema.buildObjectType({
        name: "TrackedDataProps",
        fields: {
          name: `String`,
          used: `Int`,
          values: {
            type: "[TrackedDataPropsValue]",
          },
        },
      }),

      schema.buildObjectType({
        name: "TrackedDataSourceProp",
        fields: {
          name: `String`,
          value: `String`,
        },
      }),

      schema.buildObjectType({
        name: "TrackedDataSource",
        fields: {
          url: `String`,
          props: {
            type: "[TrackedDataSourceProp]",
          },
        },
      }),

      schema.buildObjectType({
        name: "TrackedData",
        fields: {
          category: `String`,
          icon: {
            type: "Boolean",
            resolve: source => source.icon || false,
          },
          instances: `Int`,
          isDeprecated: {
            type: "Boolean",
            resolve: source => source.isDeprecated || false,
          },
          name: `String`,
          props: {
            type: "[TrackedDataProps]",
          },
          sources: {
            type: "[TrackedDataSource]",
          },
        },
      }),

      schema.buildObjectType({
        name: `Tracking`,
        interfaces: ["Node"],
        fields: {
          name: `String`,
          orbitVersion: `String`,
          createdAt: `String`,
          id: `String`,
          description: `String`,
          lastCommit: {
            type: "LastCommit",
          },
          trackedData: {
            type: "[TrackedData]",
          },
        },
      }),
    ];
    createTypes(typeDefs);
  } catch (err) {
    console.error(err);
  }
};
