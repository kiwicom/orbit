// @flow
import * as React from "react";

import ButtonLink from "../../ButtonLink";
import ChoiceGroup from "../../ChoiceGroup";
import Checkbox from "../../Checkbox";
import Collapse from "../index";
import Stack from "../../Stack";

export default {
  Example: () => {
    const [planeChecked, setPlaneChecked] = React.useState(true);
    const [trainChecked, setTrainChecked] = React.useState(true);
    const [busChecked, setBusChecked] = React.useState(true);

    const handleChange = event => {
      switch (event.target.value) {
        case "Plane":
          setPlaneChecked(!planeChecked);
          break;
        case "Train":
          setTrainChecked(!trainChecked);
          break;
        default:
          setBusChecked(!busChecked);
          break;
      }
    };
    return (
      <Collapse
        label="Transport"
        actions={
          <Stack direction="row">
            <ButtonLink
              onClick={() => {
                setPlaneChecked(true);
                setTrainChecked(true);
                setBusChecked(true);
              }}
              compact
              type="inline"
            >
              Select all
            </ButtonLink>
            <ButtonLink
              onClick={() => {
                setPlaneChecked(false);
                setTrainChecked(false);
                setBusChecked(false);
              }}
              compact
              type="inline"
            >
              Clear all
            </ButtonLink>
          </Stack>
        }
      >
        <ChoiceGroup onChange={handleChange}>
          <Checkbox value="Plane" checked={planeChecked} label="Plane" />
          <Checkbox value="Train" checked={trainChecked} label="Train" />
          <Checkbox value="Bus" checked={busChecked} label="Bus" />
        </ChoiceGroup>
      </Collapse>
    );
  },
  info: {
    title: "Actions",
    description:
      "The actions prop gives you space for actions that apply to all of the collapse's contents.",
  },
};
