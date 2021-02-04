import ruleTester from "../ruleTester";
import uniqueId from "../src/rules/unique-id";

describe("unique id", () => {
  // @ts-expect-error TODO
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
