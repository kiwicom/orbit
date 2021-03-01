import * as React from "react";
import { Heading, Stack, Text, ButtonLink } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

export default {
  Example: () => {
    const [color, setColor] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    return (
      <Stack direction="column">
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">
            <code>ariaControls</code>
          </Heading>
          <Text>
            The <code>ariaControls</code> prop creates a relationship between a ButtonLink and an
            element it controls using an unique <code>id</code>.
          </Text>
          <Stack direction="row">
            <ButtonLink
              ariaControls="colorMe"
              onClick={() => {
                setColor(!color);
              }}
            >
              Change color
            </ButtonLink>
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
            The <code>ariaExpanded</code> prop indicates whether elements controlled by the
            ButtonLink are expanded or not.
          </Text>
          <Stack direction="row">
            <ButtonLink
              ariaControls="expandMe"
              onClick={() => {
                setExpanded(!expanded);
              }}
              width="80px"
            >
              {expanded ? "Hide" : "Show"}
            </ButtonLink>
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
            Setting a ButtonLink as <code>disabled</code> indicates to users that they can&apos;t
            interact with the ButtonLink even if they can&apos;t see the state.
          </Text>
          <ButtonLink disabled>Do nothing</ButtonLink>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">
            Non-<code>{`<ButtonLink>`}</code> elements
          </Heading>
          <Text>
            If it&apos;s absolutely necessary for your ButtonLink to be a nonactionable element,
            such as a <code>{`<div>`}</code>, use <code>role</code> and <code>tabIndex</code> to
            ensure everyone can interact with the ButtonLink. But try to avoid this unless there is
            no other option.
          </Text>
          <ButtonLink asComponent="div" role="button" tabIndex="0">
            Read more
          </ButtonLink>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Title</Heading>
          <Text>
            If there&apos;s any necessary information that&apos;s accessible only visually (like a
            ButtonLink with only an icon), include it for everyong by using a <code>title</code>{" "}
            prop to add an <code>aria-label</code>.
          </Text>
          <ButtonLink iconLeft={<Icons.Edit />} title="Edit name" />
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "ButtonLink accessibility",
    description:
      "See your options for making sure all of your button links are accessible to everyone. Read more at https://orbit.kiwi/accessibility/accessibility/",
  },
};
