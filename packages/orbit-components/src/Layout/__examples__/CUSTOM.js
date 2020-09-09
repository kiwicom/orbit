// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import Layout from "../index";
import LayoutColumn from "../LayoutColumn";
import Text from "../../Text";

const ColoredDiv = styled.div`
  min-height: ${defaultTheme.orbit.heightIllustrationMedium};
  background: ${defaultTheme.orbit.backgroundBody};
`;

export default {
  Example: () => (
    <Layout type="Search">
      <LayoutColumn hideOn={["smallMobile", "mediumMobile"]}>
        <ColoredDiv>
          <Text>
            This column is hidden on <code>mediumMobile</code> and smaller screens.
          </Text>
        </ColoredDiv>
      </LayoutColumn>
      <LayoutColumn as="span">
        <ColoredDiv>
          <Text>
            This column is designed for the main content. It&apos;s always visible. It&apos;s a{" "}
            <code>span</code> element instead of the default <code>div</code>.
          </Text>
        </ColoredDiv>
      </LayoutColumn>
      <LayoutColumn hideOn={["smallMobile", "largeDesktop"]}>
        <ColoredDiv>
          <Text>
            This column is hidden on very small (<code>smallMobile</code>) and very large (
            <code>largeDesktop</code>) screens.
          </Text>
        </ColoredDiv>
      </LayoutColumn>
    </Layout>
  ),
  info: {
    title: "Custom layouts",
    description:
      "Customize your layouts by defining when the columns are hidden. You can also create the columns as any HTML element using the <code>as</code> prop.",
  },
};
