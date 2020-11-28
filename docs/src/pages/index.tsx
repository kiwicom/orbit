import React from "react";
import { Heading } from "@kiwicom/orbit-components";
import Layout from "../components/Layout";
import RocketImage from "../components/RocketImage";
import { css } from "styled-components";

export default function Home() {
  return (
    <Layout>
      <RocketImage />
      <div
        css={css`
          /* so that the rest of the content has a higher z-order than the image */
          position: relative;
        `}
      >
        <Heading type="display">
          <div
            css={css`
              max-width: 20ch;
            `}
          >
            Open source design system for your next travel project.
          </div>
        </Heading>
      </div>
    </Layout>
  );
}
