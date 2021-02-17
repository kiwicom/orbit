import "styled-components";
import { defaultTheme } from "@kiwicom/orbit-components";

type Theme = typeof defaultTheme;

// https://styled-components.com/docs/api#typescript

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    boxShadowRaisedSubtle: string;
  }
}
