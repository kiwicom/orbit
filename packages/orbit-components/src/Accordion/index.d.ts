// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import AccordionSection from "./AccordionSection";
import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Accordion";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly children?: React.ReactNode;
  readonly expandedSection?: string | number;
  readonly onExpand?: (sectionId: string | number) => void | Promise<any>;
  readonly loading?: boolean;
}

declare const Accordion: React.FunctionComponent<Props>;
declare const StyledAccordion: React.ComponentType<Props>;
export { Accordion, Accordion as default, AccordionSection, StyledAccordion };
