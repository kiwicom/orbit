"use client";

import * as React from "react";
import cx from "clsx";

import WizardStep from "./WizardStep";
import { WizardStepContextProvider } from "./WizardContext";
import Button from "../Button";
import Stack from "../Stack";
import ChevronDown from "../icons/ChevronDown";
import Portal from "../Portal";
import Modal from "../Modal";
import { CardSection } from "../Card";
import useMediaQuery from "../hooks/useMediaQuery";
import type { Props, WizardStepProps } from "./types";

const Wizard = ({
  dataTest,
  lockScrolling = true,
  direction,
  id,
  labelClose = "Close",
  labelProgress,
  completedSteps,
  activeStep,
  children,
  onChangeStep,
}: Props) => {
  const { isLargeMobile } = useMediaQuery();
  const [open, setOpen] = React.useState(false);
  const toggle = React.useRef(null);
  const isCompact = !isLargeMobile;
  const childrenArray = React.Children.toArray(children) as React.ReactElement<WizardStepProps>[];
  const stepStatuses = childrenArray.map((step, index) => {
    if (index < completedSteps) return "completed";
    if (index === completedSteps) return "available";
    return "disabled";
  });

  const activeStepTitle = childrenArray.find((_, index) => index === activeStep)?.props.title;
  const stepsCount = React.Children.count(children);

  const steps = React.Children.map(children, (step, index) => (
    <WizardStepContextProvider
      index={index}
      status={stepStatuses[index]}
      isLastStep={index === stepsCount - 1}
      isColumnOnDesktop={direction === "column"}
      nextStepStatus={stepStatuses[index + 1]}
      isCompact={isCompact}
      isActive={activeStep === index}
      onChangeStep={onChangeStep}
      onClose={() => setOpen(false)}
    >
      {step}
    </WizardStepContextProvider>
  ));

  if (isCompact) {
    return (
      <>
        <Button
          ref={toggle}
          dataTest={dataTest}
          ariaControls={id}
          ariaExpanded={open}
          type="secondary"
          fullWidth
          iconRight={<ChevronDown />}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Stack as="span" inline align="center">
            {typeof labelProgress !== "undefined" && <b className="text-nowrap">{labelProgress}</b>}
            <span className="font-normal">{activeStepTitle}</span>
          </Stack>
        </Button>
        <Portal>
          <div id={id}>
            {open && (
              <Modal
                hasCloseButton={false}
                lockScrolling={lockScrolling}
                onClose={() => {
                  setOpen(false);
                }}
              >
                {/* matching padding-top to ModalBody's border-radius */}
                <nav className="orbit-wizard pt-[9px]">
                  <ul>
                    {steps}
                    <li>
                      <CardSection>
                        <Button
                          type="secondary"
                          fullWidth
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          {labelClose}
                        </Button>
                      </CardSection>
                    </li>
                  </ul>
                </nav>
              </Modal>
            )}
          </div>
        </Portal>
      </>
    );
  }

  return (
    <nav className="orbit-wizard">
      <ul
        className={cx("flex", direction === "column" ? "flex-col" : "flex-row")}
        data-test={dataTest}
      >
        {steps}
      </ul>
    </nav>
  );
};

export default Wizard;
export { WizardStep };
