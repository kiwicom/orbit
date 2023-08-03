import React from "react";
import { TextLink } from "@kiwicom/orbit-components";

export default function TextLinkStyles() {
  return (
    <>
      <TextLink type="primary" href="http://#">
        Primary
      </TextLink>
      <TextLink type="secondary" href="http://#">
        Secondary
      </TextLink>
      <TextLink type="info" href="http://#">
        Info
      </TextLink>
      <TextLink type="success" href="http://#">
        Success
      </TextLink>
      <TextLink type="warning" href="http://#">
        Warning
      </TextLink>
      <TextLink type="critical" href="http://#">
        Critical
      </TextLink>
      <TextLink type="white" href="http://#">
        White
      </TextLink>
      <TextLink noUnderline href="http://#">
        No underline
      </TextLink>
    </>
  );
}
