import * as React from "react";

import { TYPES } from "../consts";
import type { SeatVariantProps } from "../types";
import TransitionPathFill from "./primitives/TransitionPathFill";
import TransitionPathStroke from "./primitives/TransitionPathStroke";
import SymbolUnavailable from "./primitives/SymbolUnavailable";
import Text from "./primitives/Text";
import Edge from "./primitives/Edge";

const SeatNormal = ({ selected, status, type, label }: SeatVariantProps) => {
  const effectiveStatus = status ?? (selected ? "selected" : "default");
  if (effectiveStatus === "selected" && type === TYPES.UNAVAILABLE) return null;

  return (
    <>
      <TransitionPathFill
        type={type}
        selected={selected}
        status={effectiveStatus}
        d="M1 10C1 5.02944 5.02944 1 10 1H36C40.9706 1 45 5.02944 45 10V42C45 43.6569 43.6569 45 42 45H4C2.34315 45 1 43.6569 1 42V10Z"
      />
      {type === TYPES.UNAVAILABLE ? (
        <SymbolUnavailable d="M28.6555 17.3331C29.0072 17.6844 29.0077 18.2542 28.6564 18.6059L24.5533 22.7144C24.3973 22.8705 24.3973 23.1235 24.5533 23.2797L28.6564 27.3885C28.9784 27.7109 29.0049 28.2166 28.7361 28.5692L28.6555 28.6613C28.3038 29.0125 27.7339 29.0121 27.3827 28.6603L23.2821 24.5535C23.1258 24.397 22.8722 24.3971 22.7159 24.5536L18.6169 28.6603C18.2657 29.0121 17.6958 29.0125 17.3441 28.6613C16.9923 28.3101 16.9919 27.7402 17.3431 27.3885L21.4458 23.2796C21.6017 23.1235 21.6017 22.8705 21.4458 22.7144L17.3431 18.6059C17.0212 18.2835 16.9947 17.7778 17.2635 17.4252L17.3441 17.3331C17.6958 16.9819 18.2657 16.9823 18.6169 17.3341L22.716 21.4396C22.8722 21.596 23.1258 21.5961 23.2821 21.4396L27.3827 17.3341C27.7339 16.9823 28.3038 16.9819 28.6555 17.3331Z" />
      ) : (
        <Text selected={selected} status={effectiveStatus} type={type} label={label} fontSize={16} />
      )}
      {effectiveStatus === "default" && (
        <Edge
          type={type}
          d="M0 40H46V42C46 44.2091 44.2091 46 42 46H4C1.79086 46 0 44.2091 0 42V40Z"
        />
      )}
      <TransitionPathStroke
        type={type}
        selected={selected}
        status={effectiveStatus}
        d="M1 10C1 5.02944 5.02944 1 10 1H36C40.9706 1 45 5.02944 45 10V42C45 43.6569 43.6569 45 42 45H4C2.34315 45 1 43.6569 1 42V10Z"
      />
    </>
  );
};

export default SeatNormal;
