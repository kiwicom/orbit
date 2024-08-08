import * as React from "react";
import cx from "clsx";

import Text from "../Text";
import Check from "../icons/Check";
import useTheme from "../hooks/useTheme";
import { WizardStepContext } from "./WizardContext";

const WizardStepIcon = ({ isCompleted }: { isCompleted?: boolean }) => {
  const { index, status, isCompact, isActive } = React.useContext(WizardStepContext);
  const theme = useTheme();

  return (
    <div
      className={cx(
        "-top-50 duration-fast size-500 relative flex items-center justify-center rounded-full transition-shadow ease-in",
        status === "disabled"
          ? "bg-cloud-normal-hover"
          : "bg-product-normal group-hover/container:shadow-wizard-step-icon-hover",
        isActive && !isCompact && "shadow-wizard-step-icon-active",
      )}
    >
      {isCompleted || status === "completed" ? (
        <Check
          size="small"
          customColor={
            isCompleted && status !== "completed" && status !== "available"
              ? theme.orbit.paletteInkDark
              : theme.orbit.paletteWhiteNormal
          }
        />
      ) : (
        <Text
          as="div"
          type={status === "disabled" ? "primary" : "white"}
          size="small"
          align="center"
        >
          {typeof index === "number" ? index + 1 : null}
        </Text>
      )}
    </div>
  );
};

export default WizardStepIcon;
