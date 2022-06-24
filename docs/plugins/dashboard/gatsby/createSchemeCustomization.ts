export default function scheme({ actions, schema }) {
  try {
    const { createTypes } = actions;
    const typeDefs = [
      schema.buildObjectType({
        name: "LastCommit",
        fields: {
          sha: "String",
          title: "String",
          webUrl: "String",
        },
        extensions: { infer: false },
      }),

      schema.buildObjectType({
        name: "MemberStatus",
        fields: {
          availability: "String",
          message: "String",
        },
      }),

      schema.buildObjectType({
        name: "Person",
        fields: {
          name: "String",
          avatarUrl: "String",
          bot: {
            type: "Boolean",
            resolve: type => type.bot || false,
          },
          state: "String",
          webUrl: "String",
          publicEmail: "String",
          webPath: "String",
          status: "MemberStatus",
          id: "String",
        },
        extensions: { infer: false },
      }),

      schema.buildObjectType({
        name: "Members",
        fields: {
          owners: "[Person]",
          maintainers: "[Person]",
        },
      }),

      schema.buildObjectType({
        name: "TrackedDataPropsValue",
        extensions: { infer: false },
        fields: {
          name: "String",
          used: "Int",
        },
      }),

      schema.buildObjectType({
        name: "TrackedDataProps",
        fields: {
          name: "String",
          used: "Int",
          values: {
            type: "[TrackedDataPropsValue]",
          },
        },
        extensions: { infer: false },
      }),

      schema.buildObjectType({
        name: "TrackedDataSourceProp",
        fields: {
          name: "String",
          value: "String",
        },
        extensions: { infer: false },
      }),

      schema.buildObjectType({
        name: "CurrentComponents",
        fields: {
          currentComponents: ["String"],
        },
        extensions: { infer: false },
      }),

      schema.buildObjectType({
        name: "TrackedDataSource",
        fields: {
          url: "String",
          props: {
            type: "[TrackedDataSourceProp]",
          },
        },
        extensions: { infer: false },
      }),

      schema.buildObjectType({
        name: "TrackedData",
        fields: {
          category: "String",
          icon: {
            type: "Boolean",
            resolve: source => source.icon || false,
          },
          instances: "Int",
          isDeprecated: {
            type: "Boolean",
            resolve: source => source.isDeprecated || false,
          },
          name: "String",
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
          name: "String",
          url: "String",
          orbitVersion: "String",
          fields: {
            type: "CurrentComponents",
          },
          createdAt: "String",
          id: "String",
          description: "String",
          members: {
            type: "Members",
          },
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
}
