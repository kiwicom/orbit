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
      <Layout type="Booking">
        <LayoutColumn>
          <ColoredDiv>
            <Text>This column is designed for the main content.</Text>
          </ColoredDiv>
        </LayoutColumn>
        <LayoutColumn>
          <ColoredDiv>
            <Text>
              This column is designed for summaries. It appears on the right on <code>tablet</code>{" "}
              and wider screens. On <code>largeMobile</code> and smaller screens, it appears below
              the first column.
            </Text>
          </ColoredDiv>
        </LayoutColumn>
      </Layout>
    );
  },
  info: {
    title: "Booking layout",
    description:
      "The Booking layout is a two-column layout on larger screens. On smaller screens, the second column is placed underneath the first.",
  },
};
