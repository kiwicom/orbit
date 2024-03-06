import * as React from "react";
import cx from "clsx";

import type * as Common from "../../common/types";
import Button from "../../Button";
import type { Props as ButtonPrimitiveProps } from "../../primitives/ButtonPrimitive/types";

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: Common.InputSize;
}

const Component =
  ({ className: customClassName }: { className: Props["className"] }) =>
  ({ children, className }: ButtonPrimitiveProps) => {
    return <div className={cx("pointer-events-none", customClassName, className)}>{children}</div>;
  };

const ActiveButton = ({ children, className, size }: Props) => {
  return (
    <Button type="secondary" size={size} asComponent={Component({ className })}>
      {children}
    </Button>
  );
};

export default ActiveButton;
