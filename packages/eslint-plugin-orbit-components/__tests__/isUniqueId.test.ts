import ruleTester from "../ruleTester";
import uniqueId from "../src/rules/svgUniqueId";
describe("unique id", () => {
  // @ts-expect-error TODO
  ruleTester.run("svg-unique-id", uniqueId, {
    valid: [
      {
        code: `
          const App = () => (
            <svg>
              <mask id="1">Test</mask>
              <mask id="2">Test</mask>
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
            <mask id="1">Test</mask>
          </svg>
        )`,
        errors: [`id=\"1\", should have unique id`, `id=\"1\", should have unique id`],
      },
    ],
  });
});
