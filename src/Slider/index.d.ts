// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Slider";

export { Slider, Slider as default };

declare namespace Slider {
  type Label = string | string[];
  type Value = number | number[];
  type Callback = (value: Value) => void | Promise<void>;
  type Data = any; // TODO

  interface Props {
    readonly min?: number;
    readonly max?: number;
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
}
declare class Slider extends React.Component<Slider.Props> {}
