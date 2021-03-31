// @flow
import * as React from "react";

import defaultTheme from "../../defaultTheme";
import Layout from "../index";
import LayoutColumn from "../LayoutColumn";
import Text from "../../Text";

export default {
  Example: (): React.Node => {
    const divStyle = {
      minHeight: defaultTheme.orbit.heightIllustrationMedium,
      background: defaultTheme.orbit.backgroundBody,
    };
    return (
      <Layout type="Search">
        <LayoutColumn hideOn={["smallMobile", "mediumMobile"]}>
          <div style={divStyle}>
            <Text>
              This column is hidden on <code>mediumMobile</code> and smaller screens.
            </Text>
          </div>
        </LayoutColumn>
        <LayoutColumn as="span">
          <div style={divStyle}>
            <Text>
              This column is designed for the main content. It&apos;s always visible. It&apos;s a{" "}
              <code>span</code> element instead of the default <code>div</code>.
            </Text>
          </div>
        </LayoutColumn>
        <LayoutColumn hideOn={["smallMobile", "largeDesktop"]}>
          <div style={divStyle}>
            <Text>
              This column is hidden on very small (<code>smallMobile</code>) and very large (
              <code>largeDesktop</code>) screens.
            </Text>
          </div>
        </LayoutColumn>
      </Layout>
    );
  },
  info: {
    title: "Custom layouts",
    description:
      "Customize your layouts by defining when the columns are hidden. You can also create the columns as any HTML element using the <code>as</code> prop.",
  },
};
