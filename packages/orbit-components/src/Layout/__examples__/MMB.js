// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import Layout from "../index";
import LayoutColumn from "../LayoutColumn";
import Text from "../../Text";

export default {
  Example: () => {
    const ColoredDiv = styled.div`
      min-height: ${defaultTheme.orbit.heightIllustrationMedium};
      background: ${defaultTheme.orbit.backgroundBody};
    `;
    return (
      <Layout type="MMB">
        <LayoutColumn>
          <ColoredDiv>
            <Text>This column is designed for the main content. It&apos;s always visible.</Text>
          </ColoredDiv>
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
