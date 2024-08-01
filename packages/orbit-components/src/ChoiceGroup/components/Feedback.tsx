import * as React from "react";
import cx from "clsx";

import defaultTheme from "../../defaultTheme";

interface Props {
  dataTest?: string;
  children: React.ReactNode;
}

const FormFeedback = (props: Props) => {
  const { children, dataTest } = props;
  return (
    <div
      className={cx(
        "orbit-choice-group-feedback",
        "text-critical-foreground font-base leading-small text-small font-medium",
        "mt-50 relative top-full max-h-[--max-height] w-full truncate",
        "[&_a]:cursor-pointer [&_a]:underline",
        "[&_strong]:text-ink-dark [&_b]:text-ink-dark [&_b]:font-medium [&_strong]:font-medium",
      )}
      style={
        {
          "--max-height": Math.floor(
            parseFloat(defaultTheme.orbit.lineHeightText) *
              parseInt(defaultTheme.orbit.fontSizeFormFeedback, 10),
          ),
        } as React.CSSProperties
      }
      data-test={dataTest}
    >
      {children}
    </div>
  );
};

export default FormFeedback;
