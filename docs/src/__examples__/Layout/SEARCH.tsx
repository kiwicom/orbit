import * as React from "react";
import { Layout, LayoutColumn, Text } from "@kiwicom/orbit-components";
import { css } from "styled-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle = css`
      minHeight: ${defaultTheme.orbit.heightIllustrationMedium},
      background: ${defaultTheme.orbit.backgroundBody},
    `;

    return (
      <Layout type="Search">
        <LayoutColumn>
          <div css={divStyle}>
            <Text>
              This column is designed for filters. It&apos;s hidden on <code>largeMobile</code> and
              smaller screens.
            </Text>
          </div>
        </LayoutColumn>
        <LayoutColumn>
          <div css={divStyle}>
            <Text>This column is designed for the main content. It&apos;s always visible.</Text>
          </div>
        </LayoutColumn>
        <LayoutColumn>
          <div css={divStyle}>
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
