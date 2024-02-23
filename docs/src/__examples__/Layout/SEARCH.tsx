import React from "react";
import { Layout, LayoutColumn, Text } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle = {
      minHeight: `${defaultTheme.orbit.heightIllustrationMedium}`,
      background: `${defaultTheme.orbit.backgroundBody}`,
    };
    return (
      <Layout type="Search">
        <LayoutColumn>
          <div style={divStyle}>
            <Text>This column is designed for filters.</Text>
          </div>
        </LayoutColumn>
        <LayoutColumn>
          <div style={divStyle}>
            <Text>This column is designed for the main content.</Text>
          </div>
        </LayoutColumn>
        <LayoutColumn>
          <div style={divStyle}>
            <Text>This column is designed for promotions.</Text>
          </div>
        </LayoutColumn>
      </Layout>
    );
  },
};
