import { groupTrails } from "..";

describe("DocNavigation", () => {
  it("should group trails into navigation items", () => {
    const navigation = groupTrails({
      content: [
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
          { name: "For Kiwi.com use", url: "/kiwi-use/", hasReactTab: false },
          { name: "Brand", url: "/kiwi-use/brand/", hasReactTab: false },
          {
            name: "Brand guidelines",
            url: "/kiwi-use/brand/brand-guidelines/",
            hasReactTab: false,
          },
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
      ],
      components: [
        { name: "Action", url: "/components/action/", hasReactTab: false },
        { name: "Button", url: "/components/action/button/", hasReactTab: true },
        { name: "Information", url: "/components/information/", hasReactTab: false },
        { name: "Toast", url: "/components/information/toast/", hasReactTab: true },
      ],
    });

    expect(JSON.stringify(navigation, null, 2)).toMatchInlineSnapshot(`
      "[
        {
          \\"type\\": \\"branch\\",
          \\"name\\": \\"Getting started\\",
          \\"url\\": \\"/getting-started/\\",
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
          \\"name\\": \\"For Kiwi.com use\\",
          \\"url\\": \\"/kiwi-use/\\",
          \\"items\\": [
            {
              \\"type\\": \\"branch\\",
              \\"name\\": \\"Brand\\",
              \\"url\\": \\"/kiwi-use/brand/\\",
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
              \\"url\\": \\"/kiwi-use/content/\\",
              \\"items\\": [
                {
                  \\"type\\": \\"branch\\",
                  \\"name\\": \\"Specific areas\\",
                  \\"url\\": \\"/kiwi-use/content/specific-areas/\\",
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
        },
        {
          \\"type\\": \\"branch\\",
          \\"name\\": \\"Components\\",
          \\"url\\": \\"/components/\\",
          \\"items\\": [
            {
              \\"type\\": \\"leaf\\",
              \\"name\\": \\"Action\\",
              \\"url\\": \\"/components/action/\\",
              \\"hasReactTab\\": false
            },
            {
              \\"type\\": \\"leaf\\",
              \\"name\\": \\"Button\\",
              \\"url\\": \\"/components/action/button/\\",
              \\"hasReactTab\\": true
            },
            {
              \\"type\\": \\"leaf\\",
              \\"name\\": \\"Information\\",
              \\"url\\": \\"/components/information/\\",
              \\"hasReactTab\\": false
            },
            {
              \\"type\\": \\"leaf\\",
              \\"name\\": \\"Toast\\",
              \\"url\\": \\"/components/information/toast/\\",
              \\"hasReactTab\\": true
            }
          ]
        }
      ]"
    `);
  });
});
