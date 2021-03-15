import ruleTester from "../ruleTester";
import uniqueId from "../src/rules/uniqueId";

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
          `id="1", do not use literal value as ID, you should use randomID utility function`,
          `id="2", do not use literal value as ID, you should use randomID utility function`,
        ],
      },
    ],
  });
});
