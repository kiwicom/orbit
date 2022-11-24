import * as React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import OrbitProvider from "../../OrbitProvider";

interface Props {
  readonly children: React.ReactNode;
}

class RenderInRtl extends React.PureComponent<Props> {
  html: null | HTMLHtmlElement = document.querySelector("html");

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

  render() {
    return (
      <OrbitProvider theme={{ orbit: defaultTokens, rtl: true }}>
        {this.props.children}
      </OrbitProvider>
    );
  }
}

export default RenderInRtl;
