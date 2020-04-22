// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common.d.ts";
import { CardHeaderType } from "./CardHeader/index.d.ts";
import { CardSectionType } from "./CardSection/index.d.ts";

declare module "@kiwicom/orbit-components/lib/Card";

interface Props extends Common.Global, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly closable: React.ReactNode;
  readonly onClose?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
}

const Card: React.FunctionComponent<Props>;
declare const CardHeader: CardSectionType;
declare const CardSection: CardHeaderType;
export { Card, Card as default, CardHeader, CardSection };
