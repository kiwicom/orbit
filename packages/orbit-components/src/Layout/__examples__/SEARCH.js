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
      <Layout type="Search">
        <LayoutColumn>
          <ColoredDiv>
            <Text>
              This column is designed for filters. It&apos;s hidden on <code>largeMobile</code> and
              smaller screens.
            </Text>
          </ColoredDiv>
        </LayoutColumn>
        <LayoutColumn>
          <ColoredDiv>
            <Text>This column is designed for the main content. It&apos;s always visible.</Text>
          </ColoredDiv>
        </LayoutColumn>
        <LayoutColumn>
          <ColoredDiv>
            <Text>
              This column is designed for promotions. It&apos;s hidden on <code>desktop</code> and
              smaller screens.
            </Text>
          </ColoredDiv>
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
