import { groupTrails } from "..";

describe("DocNavigation", () => {
  it("should group trails into navigation items", () => {
    const navigation = groupTrails([
      [
        { name: "Getting started", url: "/getting-started/" },
        { name: "For designers", url: "/getting-started/for-designers/" },
      ],
      [
        { name: "Getting started", url: "/getting-started/" },
        { name: "For developers", url: "/getting-started/for-developers/" },
      ],
      [
        { name: "Getting started", url: "/getting-started/" },
        { name: "GitHub repos & resources", url: "/getting-started/github/" },
      ],
      [
        { name: "Components", url: "/components/" },
        { name: "Action", url: "/components/action/" },
        { name: "Button", url: "/components/action/button/" },
      ],
      [
        { name: "Components", url: "/components/" },
        { name: "Action", url: "/components/action/" },
        { name: "Button", url: "/components/action/button/" },
      ],
      [
        { name: "For Kiwi.com use", url: "/kiwi-use/" },
        { name: "Brand", url: "/kiwi-use/brand/" },
        { name: "Brand guidelines", url: "/kiwi-use/brand/brand-guidelines/" },
      ],
      [
        { name: "For Kiwi.com use", url: "/kiwi-use/" },
        { name: "Content", url: "/kiwi-use/content/" },
        { name: "Specific areas", url: "/kiwi-use/content/specific-areas/" },
        { name: "Social media", url: "/kiwi-use/content/social-media/" },
      ],
      [
        { name: "For Kiwi.com use", url: "/kiwi-use/" },
        { name: "Content", url: "/kiwi-use/content/" },
        { name: "Specific areas", url: "/kiwi-use/content/specific-areas/" },
        { name: "Technical content", url: "/kiwi-use/content/technical-content/" },
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
              \\"url\\": \\"/getting-started/for-designers/\\"
            },
            {
              \\"type\\": \\"leaf\\",
              \\"name\\": \\"For developers\\",
              \\"url\\": \\"/getting-started/for-developers/\\"
            },
            {
              \\"type\\": \\"leaf\\",
              \\"name\\": \\"GitHub repos & resources\\",
              \\"url\\": \\"/getting-started/github/\\"
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
                  \\"url\\": \\"/components/action/button/\\"
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
                  \\"url\\": \\"/kiwi-use/brand/brand-guidelines/\\"
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
                      \\"url\\": \\"/kiwi-use/content/social-media/\\"
                    },
                    {
                      \\"type\\": \\"leaf\\",
                      \\"name\\": \\"Technical content\\",
                      \\"url\\": \\"/kiwi-use/content/technical-content/\\"
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
