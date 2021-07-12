import React from "react";
import { Table, TableBody } from "@kiwicom/orbit-components";

import StatusTableHead from "./StatusTableHead";
import StatusTableRow from "./StatusTableRow";
import { h2 as H2 } from "../../mdx-components";
import ComponentStatusData from "../../data/component-status.yaml";

export enum Statuses {
  Deprecated = "Deprecated",
  Designing = "Designing",
  Developing = "Developing",
  Na = "n/a",
  NotDoing = "Not doing",
  OnHold = "On hold",
  Planned = "Planned",
  Released = "Released",
  Waiting = "Waiting",
  Writing = "Writing",
}

export enum Groups {
  Accessibility = "Accessibility",
  Action = "Action",
  Information = "Information",
  Input = "Input",
  Interaction = "Interaction",
  Layout = "Layout",
  Navigation = "Navigation",
  Overlay = "Overlay",
  Primitives = "Primitives",
  Progress = "Progress indicators",
  Responsive = "Responsive",
  Structure = "Structure",
  Text = "Text",
  Utility = "Utility",
  Visuals = "Visuals",
}

export interface ComponentStatusProps {
  component: string;
}

const ComponentStatus = ({ component }: ComponentStatusProps) => {
  const componentToDisplay = ComponentStatusData.find(item => item.component === component);
  if (!componentToDisplay) {
    return "This component has not yet been started.";
  }

  return (
    <Table>
      <StatusTableHead />
      <TableBody>
        <StatusTableRow component={componentToDisplay} />
      </TableBody>
    </Table>
  );
};

export default ComponentStatus;

export const ComponentStatusList = () => (
  <>
    {Object.values(Groups).map(group => (
      <React.Fragment key={group}>
        <H2>{group}</H2>
        <Table>
          <StatusTableHead group={group} />
          <TableBody>
            {ComponentStatusData.map(component => {
              if (component.group === group) {
                return (
                  <StatusTableRow component={component} key={component.component} group={group} />
                );
              }
              return undefined;
            })}
          </TableBody>
        </Table>
      </React.Fragment>
    ))}
  </>
);
