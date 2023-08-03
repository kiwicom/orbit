import React from "react";
import { Text } from "@kiwicom/orbit-components";

export default function TextStyles() {
  return (
    <>
      <Text withBackground type="primary">
        Primary <a href="http://#">link</a>
      </Text>
      <Text withBackground type="secondary">
        Secondary <a href="http://#">link</a>
      </Text>
      <Text withBackground type="info">
        Info <a href="http://#">link</a>
      </Text>
      <Text withBackground type="success">
        Success <a href="http://#">link</a>
      </Text>
      <Text withBackground type="warning">
        Warning <a href="http://#">link</a>
      </Text>
      <Text withBackground type="critical">
        Critical <a href="http://#">link</a>
      </Text>
      <Text withBackground type="white">
        White <a href="http://#">link</a>
      </Text>
      <Text margin={{ top: 2, left: -1, right: "4px" }}>Object margin</Text>
      <Text margin="0 1px -2px 0">String margin</Text>
    </>
  );
}
