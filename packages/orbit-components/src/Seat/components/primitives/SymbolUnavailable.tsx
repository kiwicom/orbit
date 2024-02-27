import * as React from "react";

interface Props {
  d: string;
}

const SymbolUnavailable = ({ d }: Props) => {
  return <path className="fill-ink-light-hover" d={d} />;
};

export default SymbolUnavailable;
