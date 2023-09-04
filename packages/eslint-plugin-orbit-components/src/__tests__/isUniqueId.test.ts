import ruleTester from "../ruleTester";
import uniqueId from "../rules/uniqueId";

describe("unique id", () => {
  ruleTester.run("svg-unique-id", uniqueId, {
    valid: [
      {
        code: `
          const App = () => (
            <svg>
              <mask id={randomId}>Test</mask>
              <mask id={randomId}>Test</mask>
            </svg>
          )`,
      },
    ],
    invalid: [
      {
        code: `
        const App = () => (
          <svg>
            <mask id="1">Test</mask>
            <mask id="2">Test</mask>
          </svg>
        )`,
        errors: [
          {
            messageId: "error",
          },
          {
            messageId: "error",
          },
        ],
      },
    ],
  });
});
