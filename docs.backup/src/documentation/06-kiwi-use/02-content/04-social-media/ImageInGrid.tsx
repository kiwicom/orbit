import React from "react";

interface Props {
  children: React.ReactNode;
  column: string;
  row: string;
}

export default ({ children, column, row }: Props) => (
  <div style={{ gridColumn: column, gridRow: row }}>{children}</div>
);
