import ruleTester from "../ruleTester";
import defaultTheme from "../rules/defaultTheme";

describe("defaultTheme", () => {
  ruleTester.run("defaultTheme", defaultTheme, {
    valid: [
      {
        code: `
          import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";\

          const Wrapper = styled.div\`
            display: \${({ theme }) => theme.orbit.paletteWhite};
          \`;

          Wrapper.defaultProps = {
            theme: defaultTheme,
          }
        `,
      },
      {
        code: `
          import { defaultTheme } from "@kiwicom/orbit-components";\

          const Wrapper = styled.div\`
            display: \${({ theme }) => theme.orbit.paletteWhite};
          \`;

          Wrapper.defaultProps = {
            theme: defaultTheme,
          }
        `,
      },
      {
        code: `
          import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";\

          <OrbitProvider theme={defaultTheme}>
            <BrandProvider value={brand}>
              <FetchedProvider value={fetched}>
                <LogProvider value={{ log: (e, p) => cuckoo.nitro(e, p) }}>
                  <InitRelayEnvironment clientID="frontend">{children}</InitRelayEnvironment>
                </LogProvider>
              </FetchedProvider>
          </BrandProvider>
        </OrbitProvider>
        `,
      },
    ],
    invalid: [
      {
        code: `
        import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";\

          const failedStatus = {
            isActive: true,
            activeColor: defaultTheme.orbit.paletteOrangeNormal /* #f9971e */,
            node: <CloseCircle color="warning" />,
            content: getContentPerStatus(activeStatus, true),
          }
        `,
        errors: [
          {
            messageId: "variableDeclaration",
          },
        ],
      },
      {
        code: `
          import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";\

          const Wrapper = styled.div\`
            color: $\{defaultTheme.orbit.paletteProductNormal};
          \`
        `,
        errors: [
          {
            messageId: "styled",
          },
        ],
      },
      {
        code: `import theme from "@kiwicom/orbit-components/lib/defaultTheme";`,
        errors: [
          {
            messageId: "import",
          },
        ],
      },
      {
        code: `
          import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

          const {
            borderWidthCard,
            borderStyleCard,
            borderColorCard,
            borderRadiusNormal,
            spaceMedium,
          } = defaultTheme.orbit;
        `,
        errors: [
          {
            messageId: "destructured",
          },
        ],
      },
    ],
  });
});
