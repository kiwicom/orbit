// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Slider";

type Label = string | string[];
type Value = number | number[];
type Callback = (value: Value) => void | Promise<void>;
type Data = number[];

export interface Props extends Common.Global {
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly step?: number;
  readonly defaultValue?: Value;
  readonly onChange?: Callback;
  readonly onChangeBefore?: Callback;
  readonly onChangeAfter?: Callback;
  readonly label?: Common.Translation;
  readonly valueDescription?: Common.Translation;
  readonly ariaLabel?: Label;
  readonly ariaValueText?: string;
  readonly histogramData?: Data;
  readonly histogramDescription?: Common.Translation;
  readonly histogramLoading?: boolean;
  readonly histogramLoadingText?: Common.Translation;
}

declare const Slider: React.FunctionComponent<Props>;
export { Slider, Slider as default };
