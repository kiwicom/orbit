import { CSSProp } from "styled-components";
import {} from "styled-components/cssprop";

import { defaultTheme } from "..";

type Theme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

// FYI: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-780019806

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
