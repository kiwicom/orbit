import * as React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import ThemeProvider from "../../ThemeProvider";

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
      <ThemeProvider theme={{ orbit: defaultTokens, rtl: true }}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export default RenderInRtl;
