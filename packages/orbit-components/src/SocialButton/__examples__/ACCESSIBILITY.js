// @flow
import * as React from "react";

import Heading from "../../Heading";
import SocialButton from "../index";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: (): React.Node => {
    const [color, setColor] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    return (
      <Stack direction="column">
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">
            <code>ariaControls</code>
          </Heading>
          <Text>
            The <code>ariaControls</code> prop creates a relationship between a button and an
            element it controls using an unique <code>id</code>.
          </Text>
          <Stack direction="row">
            <SocialButton
              ariaControls="colorMe"
              onClick={() => {
                setColor(!color);
              }}
            >
              Sign in with Apple
            </SocialButton>
            <div
              style={{
                border: "1px solid #252A31",
                backgroundColor: color ? "#252A31" : "#ffffff",
                height: "44px",
                width: "240px",
              }}
              id="colorMe"
            />
          </Stack>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">
            <code>ariaExpanded</code>
          </Heading>
          <Text>
            The <code>ariaExpanded</code> prop indicates whether elements controlled by the button
            are expanded or not.
          </Text>
          <Stack direction="row">
            <SocialButton
              ariaControls="expandMe"
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              Sign in with Apple
            </SocialButton>
            <div
              aria-hidden={expanded}
              style={{
                backgroundColor: "#252A31",
                display: expanded ? "block" : "none",
                height: "44px",
                width: "240px",
              }}
              id="expandMe"
            />
          </Stack>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">
            <code>disabled</code>
          </Heading>
          <Text>
            Setting a button as <code>disabled</code> indicates to users that they can&apos;t
            interact with the button even if they can&apos;t see the state.
          </Text>
          <SocialButton disabled>Sign in with Apple</SocialButton>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">
            Non-<code>{`<button>`}</code> elements
          </Heading>
          <Text>
            If it&apos;s absolutely necessary for your button to be a nonactionable element, such as
            a <code>{`<div>`}</code>, use <code>role</code> and <code>tabIndex</code> to ensure
            everyone can interact with the button. But try to avoid this unless there is no other
            option.
          </Text>
          <SocialButton asComponent="div" role="button" tabIndex="0">
            Sign in with Apple
          </SocialButton>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Title</Heading>
          <Text>
            If there&apos;s any necessary information that&apos;s accessible only visually (like a
            button opening in a new window), include it for everyong by using a <code>title</code>{" "}
            prop to add an <code>aria-label</code>.
          </Text>
          <SocialButton title="Opens in new window">Sign in with Apple</SocialButton>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Accessibility",
    description:
      "See your options for making sure all of your buttons are accessible to everyone. Read more at https://orbit.kiwi/accessibility/accessibility/",
  },
};
