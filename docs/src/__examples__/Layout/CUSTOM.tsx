import React from "react";
import { Layout, LayoutColumn, Text } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle = {
      minHeight: defaultTheme.orbit.heightIllustrationMedium,
      background: defaultTheme.orbit.backgroundBody,
    };

    return (
      <Layout type="MMB">
        <LayoutColumn as="span">
          <div style={divStyle}>
            <Text>
              This column is rendered as a<code>span</code> element instead of the default{" "}
              <code>div</code>.
            </Text>
          </div>
        </LayoutColumn>
      </Layout>
    );
  },
};
