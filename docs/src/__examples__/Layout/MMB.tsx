import * as React from "react";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { Layout, LayoutColumn, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => {
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
