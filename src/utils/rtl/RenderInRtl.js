// @flow
import * as React from "react";
import ThemeProvider from "../../ThemeProvider";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

type Props = {|
  +children: React.Node,
|};

class RenderInRtl extends React.PureComponent<Props> {
  html = document.querySelector("html");

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
