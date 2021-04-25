// @flow
import * as React from "react";

import defaultTheme from "../../defaultTheme";
import Layout from "../index";
import LayoutColumn from "../LayoutColumn";
import Text from "../../Text";

export default {
  Example: (): React.Node => {
    const divStyle = {
      minHeight: defaultTheme.orbit.illustrationHeightMedium,
      background: defaultTheme.orbit.backgroundBody,
    };
    return (
      <Layout type="Search">
        <LayoutColumn>
          <div style={divStyle}>
            <Text>
              This column is designed for filters. It&apos;s hidden on <code>largeMobile</code> and
              smaller screens.
            </Text>
          </div>
        </LayoutColumn>
        <LayoutColumn>
          <div style={divStyle}>
            <Text>This column is designed for the main content. It&apos;s always visible.</Text>
          </div>
        </LayoutColumn>
        <LayoutColumn>
          <div style={divStyle}>
            <Text>
              This column is designed for promotions. It&apos;s hidden on <code>desktop</code> and
              smaller screens.
            </Text>
          </div>
        </LayoutColumn>
      </Layout>
    );
  },
  info: {
    title: "Search layout",
    description:
      "The Search layout is a three-column layout with one column always visible and the others variable.",
  },
};
