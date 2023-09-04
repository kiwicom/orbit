import ruleTester from "../ruleTester";
import buttonHasTitle from "../rules/buttonHasTitle";

describe("Button has title", () => {
  ruleTester.run("button-has-title", buttonHasTitle, {
    valid: [
      {
        code: `import Button from "@kiwicom/orbit-components/lib/Button";
               const App = () => <Button>Test</Button>`,
      },
      {
        code: `import { Button as OrbitButton } from "@kiwicom/orbit-components/";
               const App = () => <OrbitButton title="Something" />`,
      },
      {
        code: `import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
               const App = () => <ButtonLink>Test</ButtonLink>`,
      },
      {
        code: `import { ButtonLink as OrbitButtonLink } from "@kiwicom/orbit-components/";
               const App = () => <OrbitButtonLink title="Something" />`,
      },
      {
        code: `import { ButtonLink as OrbitButtonLink } from "@kiwicom/orbit-components/";
               const App = (props) => <OrbitButtonLink {...props} />`,
      },
      {
        code: `import Button from "@kiwicom/orbit-components/lib/Button";
               const rest = {
                  title: "Something",
               }
               const App = () => {\
                  return <Button {...rest} />
               }`,
      },
      {
        code: `import Button from "@kiwicom/orbit-components/lib/Button";
               const App = () => {
                  const rest = {
                    title: "Something",
                  }
                  return <Button {...rest} />
               }`,
      },
    ],
    invalid: [
      {
        code: `import Button from "@kiwicom/orbit-components/lib/Button";\
               const App = () => <Button iconLeft="something" />`,
        errors: [{ messageId: "error" }],
      },
      {
        code: `import { Button as OrbitButton } from "@kiwicom/orbit-components/";\
               const App = () => <OrbitButton fullWidth />`,
        errors: [{ messageId: "error" }],
      },
      {
        code: `import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";\
               const App = () => <ButtonLink iconLeft="something" />`,
        errors: [{ messageId: "error" }],
      },
      {
        code: `import { ButtonLink as OrbitButtonLink } from "@kiwicom/orbit-components/";\
               const App = () => <OrbitButtonLink fullWidth />`,
        errors: [{ messageId: "error" }],
      },
      {
        code: `import Button from "@kiwicom/orbit-components/lib/Button";
               const rest = {
                  property: "Something",
               }
               const App = () => {\
                  return <Button {...rest} />
               }`,
        errors: [{ messageId: "error" }],
      },
      {
        code: `import Button from "@kiwicom/orbit-components/lib/Button";
               const App = () => {
                  const rest = {
                    property: "Nested",
                  }
                  return <Button {...rest} />
               }`,
        errors: [{ messageId: "error" }],
      },
    ],
  });
});
