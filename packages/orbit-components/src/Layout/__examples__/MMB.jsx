// @flow
import * as React from "react";

import defaultTheme from "../../defaultTheme";
import Layout from "../index";
import LayoutColumn from "../LayoutColumn";
import Text from "../../Text";

export default {
  Example: (): React.Node => {
    const style = {
      minHeight: defaultTheme.orbit.heightIllustrationMedium,
      background: defaultTheme.orbit.backgroundBody,
    };
    return (
      <Layout type="MMB">
        <LayoutColumn>
          <div style={style}>
            <Text>This column is designed for the main content. It&apos;s always visible.</Text>
          </div>
        </LayoutColumn>
      </Layout>
    );
  },
  info: {
    title: "MMB layout",
    description:
      "The MMB layout is a one-column layout with the same visibility no matter the screen size.",
  },
};
