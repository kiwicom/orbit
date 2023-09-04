import ruleTester from "../ruleTester";
import unnecessaryText from "../rules/unnecessaryText";

describe("Unnecessary text", () => {
  ruleTester.run("unnecessary-text", unnecessaryText, {
    valid: [
      {
        code: `import Button from "@kiwicom/orbit-components/lib/Button";\
      const App = () => <Button>Test</Button>`,
      },
      {
        code: `import Button2 from "@kiwicom/orbit-components/lib/Button";\
      const App = () => <Button2>Test</Button2>`,
      },
    ],
    invalid: [
      {
        code: `import { Text } from "@kiwicom/orbit-components";\
        import Button from "@kiwicom/orbit-components/lib/Button";\
        const App = () => (\
        <Button>\
        <Text>\
        Test\
        </Text>\
        </Button>\
        )`,
        errors: [
          {
            messageId: "error",
          },
        ],
      },
      {
        code: `import { Text as Text2 } from "@kiwicom/orbit-components";\
        import Button from "@kiwicom/orbit-components/lib/Button";\
        const App = () => <Button>\
        <Text2>Test</Text2>\
        </Button>`,
        errors: [
          {
            messageId: "error",
          },
        ],
      },
      {
        code: `import OwnText from "@kiwicom/orbit-components/lib/Text";\
        import OwnButton from "@kiwicom/orbit-components/lib/Button";\
        const App = () => (<OwnButton><OwnText>Test</OwnText></OwnButton>)`,
        errors: [
          {
            messageId: "error",
          },
        ],
      },
    ],
  });
});
