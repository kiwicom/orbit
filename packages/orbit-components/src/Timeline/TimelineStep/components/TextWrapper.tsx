import * as React from "react";
import cx from "clsx";

type Props = React.PropsWithChildren<{
  active?: boolean;
}>;

const TextWrapper = ({ active, children }: Props) => {
  return (
    <div
      className={cx("de:min-h-400", active ? "[&>p]:text-ink-dark" : "[&>p]:text-ink-light")}
      aria-current={active ? "step" : undefined}
    >
      {children}
    </div>
  );
};

export default TextWrapper;
