import "styled-components";
import { ThemeProvider } from "@kiwicom/orbit-components";

type ThemeShape = React.ComponentProps<typeof ThemeProvider>["theme"];

// https://styled-components.com/docs/api#typescript

declare module "styled-components" {
  export interface DefaultTheme extends ThemeShape {
    orbit: ThemeShape["orbit"] & {
      boxShadowRaisedSubtle: string;
    };
  }
}
