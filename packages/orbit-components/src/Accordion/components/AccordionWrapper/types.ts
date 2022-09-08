import React from "react";

export interface Props {
  readonly children: React.ReactNode;
  readonly bottomBorder?: boolean;
  readonly roundedBottom?: boolean;
  readonly roundedTop?: boolean;
  readonly expanded?: boolean;
  readonly noPadding?: boolean;
  readonly dataTest?: string;
  readonly noBorderTop?: boolean;
  readonly expandable?: boolean;
  readonly initialExpanded?: boolean;
}

