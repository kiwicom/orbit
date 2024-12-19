import React from "react";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { Layout, LayoutColumn, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const style = {
      minHeight: defaultTheme.orbit.illustrationMediumHeight,
      background: defaultTheme.orbit.elevationSuppressedBackground,
    };
    return (
      <Layout type="MMB">
        <LayoutColumn>
          <div style={style}>
            <Text>This column is designed for the main content.</Text>
          </div>
        </LayoutColumn>
      </Layout>
    );
  },
};
