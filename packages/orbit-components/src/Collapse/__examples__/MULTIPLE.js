// @flow
import * as React from "react";

import ChoiceGroup from "../../ChoiceGroup";
import Checkbox from "../../Checkbox";
import Collapse from "../index";
import Stack from "../../Stack";
import Slider from "../../Slider";
import Stepper from "../../Stepper";
import Text from "../../Text";

export default {
  Example: (): React.Node => {
    const [planeChecked, setPlaneChecked] = React.useState(true);
    const [trainChecked, setTrainChecked] = React.useState(true);
    const [busChecked, setBusChecked] = React.useState(true);
    const [adults, setAdults] = React.useState(1);
    const [children, setChildren] = React.useState(0);

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
      <Stack spacing="none">
        <Collapse label="Transport">
          <ChoiceGroup onChange={handleChange}>
            <Checkbox value="Plane" checked={planeChecked} label="Plane" />
            <Checkbox value="Train" checked={trainChecked} label="Train" />
            <Checkbox value="Bus" checked={busChecked} label="Bus" />
          </ChoiceGroup>
        </Collapse>
        <Collapse label="Duration">
          <Slider label="Travel time" defaultValue={[0, 5]} maxValue={24} minValue={0} />
        </Collapse>
        <Collapse label="Passengers">
          <Stack>
            <Stack align="center">
              <Stack spacing="none">
                <Text>Adult</Text>
                <Text type="secondary">12+</Text>
              </Stack>
              <Stepper
                minValue={1}
                defaultValue={adults}
                onChange={newAdults => setAdults(newAdults)}
              />
            </Stack>
            <Stack align="center">
              <Stack spacing="none">
                <Text>Child</Text>
                <Text type="secondary">0-11</Text>
              </Stack>
              <Stepper
                minValue={0}
                defaultValue={children}
                onChange={newChildren => setChildren(newChildren)}
              />
            </Stack>
          </Stack>
        </Collapse>
      </Stack>
    );
  },
  info: {
    title: "Multiple collapses",
    description:
      "You can have multiple collapses at once, each of which can open and close separately.",
  },
};
