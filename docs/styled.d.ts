import "styled-components";
import { ThemeProvider } from "@kiwicom/orbit-components";

type ThemeShape = React.ComponentProps<typeof ThemeProvider>["theme"];

// https://styled-components.com/docs/api#typescript

declare module "styled-components" {
  // this has to be an interface, "type" doesn't work
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeShape {}
}
