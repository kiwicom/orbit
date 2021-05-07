import { groupTrails } from "..";

describe("DocNavigation", () => {
  it("should group trails into navigation items", () => {
    const navigation = groupTrails([
      [
        { name: "Getting started", url: "/getting-started/", hasReactTab: false },
        { name: "For designers", url: "/getting-started/for-designers/", hasReactTab: false },
      ],
      [
        { name: "Getting started", url: "/getting-started/", hasReactTab: false },
        { name: "For developers", url: "/getting-started/for-developers/", hasReactTab: false },
      ],
      [
        { name: "Getting started", url: "/getting-started/", hasReactTab: false },
        { name: "GitHub repos & resources", url: "/getting-started/github/", hasReactTab: false },
      ],
      [
        { name: "Components", url: "/components/", hasReactTab: false },
        { name: "Action", url: "/components/action/", hasReactTab: false },
        { name: "Button", url: "/components/action/button/", hasReactTab: true },
      ],
      [
        { name: "For Kiwi.com use", url: "/kiwi-use/", hasReactTab: false },
        { name: "Brand", url: "/kiwi-use/brand/", hasReactTab: false },
        { name: "Brand guidelines", url: "/kiwi-use/brand/brand-guidelines/", hasReactTab: false },
      ],
      [
        { name: "For Kiwi.com use", url: "/kiwi-use/", hasReactTab: false },
        { name: "Content", url: "/kiwi-use/content/", hasReactTab: false },
        { name: "Specific areas", url: "/kiwi-use/content/specific-areas/", hasReactTab: false },
        { name: "Social media", url: "/kiwi-use/content/social-media/", hasReactTab: false },
      ],
      [
        { name: "For Kiwi.com use", url: "/kiwi-use/", hasReactTab: false },
        { name: "Content", url: "/kiwi-use/content/", hasReactTab: false },
        { name: "Specific areas", url: "/kiwi-use/content/specific-areas/", hasReactTab: false },
        {
          name: "Technical content",
          url: "/kiwi-use/content/technical-content/",
          hasReactTab: false,
        },
      ],
    ]);

    expect(JSON.stringify(navigation, null, 2)).toMatchInlineSnapshot(`
      "[
        {
          \\"type\\": \\"branch\\",
          \\"name\\": \\"Getting started\\",
          \\"items\\": [
            {
              \\"type\\": \\"leaf\\",
              \\"name\\": \\"For designers\\",
              \\"url\\": \\"/getting-started/for-designers/\\",
              \\"hasReactTab\\": false
            },
            {
              \\"type\\": \\"leaf\\",
              \\"name\\": \\"For developers\\",
              \\"url\\": \\"/getting-started/for-developers/\\",
              \\"hasReactTab\\": false
            },
            {
              \\"type\\": \\"leaf\\",
              \\"name\\": \\"GitHub repos & resources\\",
              \\"url\\": \\"/getting-started/github/\\",
              \\"hasReactTab\\": false
            }
          ]
        },
        {
          \\"type\\": \\"branch\\",
          \\"name\\": \\"Components\\",
          \\"items\\": [
            {
              \\"type\\": \\"branch\\",
              \\"name\\": \\"Action\\",
              \\"items\\": [
                {
                  \\"type\\": \\"leaf\\",
                  \\"name\\": \\"Button\\",
                  \\"url\\": \\"/components/action/button/\\",
                  \\"hasReactTab\\": true
                }
              ]
            }
          ]
        },
        {
          \\"type\\": \\"branch\\",
          \\"name\\": \\"For Kiwi.com use\\",
          \\"items\\": [
            {
              \\"type\\": \\"branch\\",
              \\"name\\": \\"Brand\\",
              \\"items\\": [
                {
                  \\"type\\": \\"leaf\\",
                  \\"name\\": \\"Brand guidelines\\",
                  \\"url\\": \\"/kiwi-use/brand/brand-guidelines/\\",
                  \\"hasReactTab\\": false
                }
              ]
            },
            {
              \\"type\\": \\"branch\\",
              \\"name\\": \\"Content\\",
              \\"items\\": [
                {
                  \\"type\\": \\"branch\\",
                  \\"name\\": \\"Specific areas\\",
                  \\"items\\": [
                    {
                      \\"type\\": \\"leaf\\",
                      \\"name\\": \\"Social media\\",
                      \\"url\\": \\"/kiwi-use/content/social-media/\\",
                      \\"hasReactTab\\": false
                    },
                    {
                      \\"type\\": \\"leaf\\",
                      \\"name\\": \\"Technical content\\",
                      \\"url\\": \\"/kiwi-use/content/technical-content/\\",
                      \\"hasReactTab\\": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]"
    `);
  });
});
