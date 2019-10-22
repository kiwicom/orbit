// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import Popover from "../index";
import ContentWrapper from "../components/ContentWrapper";
import Button from "../../Button";
import Stack from "../../Stack";

describe("Popover", () => {
  const content = "Message for a user";
  const position = "bottom";
  const opened = true;
  const actions = (
    <Stack direction="row" justify="between">
      <Button type="secondary" size="small">
        Cancel
      </Button>
      <Button size="small">Done</Button>
    </Stack>
  );
  const overlapped = true;
  const component = mount(
    <Popover
      actions={actions}
      content={content}
      preferredPosition={position}
      opened={opened}
      overlapped={overlapped}
    >
      <Button>Open</Button>
    </Popover>,
  );

  it("Should pass props", () => {
    expect(
      component
        .find("PopoverContentWrapper")
        .children()
        .exists(),
    ).toBe(true);
    expect(component.find("PopoverContentWrapper").prop("preferredPosition")).toBe(position);
    expect(component.find("PopoverContentWrapper").prop("overlapped")).toBe(true);
  });

  it("it should create portal", () => {
    component.find("Portal");
    expect(component.find("Portal").exists()).toBe(true);
  });

  it("should be hidden", () => {
    expect(component.find("ContentWrapper__StyledPopoverClose").exists()).toBe(false);
  });

  it("should have actions", () => {
    expect(component.find("Popover__StyledActions").exists()).toBe(true);
  });
});

describe("ContentWrapper", () => {
  const content = <Button>Content</Button>;
  const handleClose = jest.fn();
  const ref = React.createRef();
  const actions = (
    <Stack direction="row" justify="between">
      <Button type="secondary" size="small">
        Cancel
      </Button>
      <Button size="small">Done</Button>
    </Stack>
  );
  const position = "bottom";
  const align = "start";
  const component = shallow(
    <ContentWrapper
      containerRef={ref}
      preferredPosition={position}
      preferredAlign={align}
      actions={actions}
      onClose={handleClose}
      shown
    >
      {content}
    </ContentWrapper>,
  );

  it("Should have a child", () => {
    expect(component.find("Button").exists()).toBe(true);
  });

  it("should be hidden", () => {
    expect(component.find("ContentWrapper__StyledPopoverClose").exists()).toBe(false);
  });
});
