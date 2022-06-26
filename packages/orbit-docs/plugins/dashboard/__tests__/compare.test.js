import { mapDiff } from "../compare.ts";
import data from "./__mocks__/data.json";
import diff from "./__mocks__/diff.json";

describe("test tracking diff", () => {
  it("should return mapped structure for diff data", () => {
    expect(mapDiff(data, diff)).toMatchInlineSnapshot(`
      Object {
        "AirplaneDown": Object {
          "instances": Object {
            "after": 3,
            "before": 4,
          },
          "props": Object {
            "size": Object {
              "instances": Object {
                "after": 3,
                "before": 4,
              },
              "props": null,
            },
          },
        },
        "Breadcrumbs": Object {
          "instances": Object {
            "after": 8,
            "before": 7,
          },
          "props": Object {
            "backHref": Object {
              "instances": Object {
                "after": 5,
                "before": 4,
              },
              "props": null,
            },
            "onGoBack": Object {
              "instances": Object {
                "after": 4,
                "before": 3,
              },
              "props": null,
            },
          },
        },
        "BreadcrumbsItem": Object {
          "instances": Object {
            "after": 15,
            "before": 14,
          },
          "props": null,
        },
        "ChoiceGroup": Object {
          "instances": Object {
            "after": 40,
            "before": 41,
          },
          "props": Object {
            "label": Object {
              "instances": Object {
                "after": 18,
                "before": 19,
              },
              "props": null,
            },
            "onChange": Object {
              "instances": Object {
                "after": 36,
                "before": 37,
              },
              "props": null,
            },
          },
        },
        "Radio": Object {
          "instances": Object {
            "after": 107,
            "before": 109,
          },
          "props": Object {
            "checked": Object {
              "instances": Object {
                "after": 104,
                "before": 106,
              },
              "props": null,
            },
            "key": Object {
              "instances": Object {
                "after": 15,
                "before": 16,
              },
              "props": null,
            },
            "label": Object {
              "instances": Object {
                "after": 87,
                "before": 89,
              },
              "props": null,
            },
            "name": Object {
              "instances": Object {
                "after": 27,
                "before": 29,
              },
              "props": null,
            },
            "value": Object {
              "instances": Object {
                "after": 83,
                "before": 85,
              },
              "props": null,
            },
          },
        },
        "Stack": Object {
          "instances": Object {
            "after": 2442,
            "before": 2443,
          },
          "props": Object {
            "spacing": Object {
              "instances": Object {
                "after": 1232,
                "before": 1233,
              },
              "props": null,
            },
          },
        },
        "Text": Object {
          "instances": Object {
            "after": 1574,
            "before": 1577,
          },
          "props": Object {
            "size": Object {
              "instances": Object {
                "after": 428,
                "before": 429,
              },
              "props": null,
            },
            "type": Object {
              "instances": Object {
                "after": 684,
                "before": 685,
              },
              "props": null,
            },
            "weight": Object {
              "instances": Object {
                "after": 305,
                "before": 307,
              },
              "props": null,
            },
          },
        },
      }
    `);
  });
});
