import * as React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import OrbitProvider from "../../OrbitProvider";

interface Props {
  readonly children: React.ReactNode;
}

class RenderInRtl extends React.PureComponent<Props> {
  componentDidMount() {
    if (this.html) {
      this.html.setAttribute("dir", "rtl");
    }
  }

  componentWillUnmount() {
    if (this.html) {
      this.html.removeAttribute("dir");
    }
  }

  html: null | HTMLHtmlElement = document.querySelector("html");

  render() {
    return (
      <OrbitProvider theme={{ orbit: defaultTokens, rtl: true }} useId={React.useId}>
        {this.props.children}
      </OrbitProvider>
    );
  }
}

export default RenderInRtl;
