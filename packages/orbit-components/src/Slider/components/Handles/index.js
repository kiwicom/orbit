// @flow
import * as React from "react";

import Handle from "./Handle";

import type { Props } from "./index";

const Handles = ({ value, handleIndex, onMouseDown, onFocus, onTouchStart, ...props }: Props) => {
  return Array.isArray(value) ? (
    value.map<React.Node>((_, i) => {
      const key = i && encodeURIComponent(i.toString());
      return (
        <Handle
          key={key}
          index={i}
          value={value}
          tabIndex={0}
          dataTest={`SliderHandle-${i}`}
          onMouseDown={onMouseDown}
          onFocus={() => onFocus(i)}
          onTouchStart={() => onTouchStart(i)}
          onTop={handleIndex === i}
          {...props}
        />
      );
    })
  ) : (
    <Handle
      index={0}
      value={value}
      tabIndex={0}
      dataTest={`SliderHandle-${0}`}
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onTouchStart={onTouchStart}
      {...props}
    />
  );
};

export default Handles;
