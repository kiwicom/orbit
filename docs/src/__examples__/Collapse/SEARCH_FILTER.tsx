import React from "react";
import { ChoiceGroup, Checkbox, Collapse } from "@kiwicom/orbit-components";

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
      <Collapse label="Transport">
        <ChoiceGroup onChange={handleChange}>
          <Checkbox value="Plane" checked={planeChecked} label="Plane" />
          <Checkbox value="Train" checked={trainChecked} label="Train" />
          <Checkbox value="Bus" checked={busChecked} label="Bus" />
        </ChoiceGroup>
      </Collapse>
    );
  },
  info: {
    title: "Collapse with a search filter",
    description: "A collapse hiding a search filter on initial load.",
  },
};
