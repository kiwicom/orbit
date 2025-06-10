import React from "react";

import Button from "../Button";
import Airplane from "../icons/Airplane";
import Boat from "../icons/Boat";
import Bus from "../icons/Bus";
import Train from "../icons/Train";
import Plus from "../icons/Plus";

import ListChoice from ".";

export default function ListChoiceVisualStory() {
  return (
    <>
      <ListChoice title="Selectable no icon" description="Further description" selectable />
      <ListChoice title="Title only and disabled, no icon" disabled />
      <ListChoice
        title="Selectable"
        description="Further description"
        selectable
        icon={<Bus ariaHidden />}
      />
      <ListChoice
        title="Selected"
        description="Further description"
        selectable
        selected
        icon={<Airplane ariaHidden />}
      />
      <ListChoice
        title="Selected and disabled"
        description="Further description"
        selectable
        selected
        disabled
        icon={<Train ariaHidden />}
      />
      <ListChoice
        title="Non-selected and disabled"
        description="Further description"
        selectable
        disabled
        icon={<Train ariaHidden />}
      />
      <ListChoice
        title="Action"
        description="Further description"
        icon={<Boat ariaHidden />}
        action={<Button iconLeft={<Plus ariaHidden />} size="small" type="primarySubtle" />}
      />
    </>
  );
}
