import { CSSProp } from "styled-components";
import {} from "styled-components/cssprop";

import { Theme } from "..";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    orbit: Theme["orbit"];
  }
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-780019806

declare module "react" {
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
