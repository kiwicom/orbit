"use client";

import * as React from "react";
import cx from "clsx";

import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import Text from "../Text";
import WizardStepIcon from "./WizardStepIcon";
import { WizardStepContext } from "./WizardContext";
import type { WizardStepProps } from "./types";

const ProgressBarPart = ({ isColumn, className }: { isColumn: boolean; className?: string }) => {
  return (
    <div
      className={cx(
        "absolute",
        isColumn
          ? "w-xxxs h-xxl top-[calc(theme(size.icon-small)+1px)] ltr:left-[calc(theme(size.icon-small)+1px)] rtl:right-[calc(theme(size.icon-small)+1px)]"
          : "h-xxxs top-[calc(theme(size.icon-small)/2-1px)] w-1/2",
        className,
      )}
    />
  );
};

const WizardStep = ({ dataTest, title, onClick, isCompleted }: WizardStepProps) => {
  const {
    index,
    status,
    isColumnOnDesktop,
    nextStepStatus,
    isCompact,
    isActive,
    onChangeStep,
    onClose,
    isLastStep,
  } = React.useContext(WizardStepContext);

  const handleClick = <T extends React.SyntheticEvent<HTMLElement>>(event: T) => {
    if (onClick) onClick(event);
    if (onChangeStep) onChangeStep(index);
    onClose();
  };

  if (isCompact) {
    return (
      <li
        className={cx(
          "relative -my-px [&_button]:rounded-none",
          status === "disabled" && "[&_button]:bg-cloud-light [&_button]:opacity-100",
        )}
        data-test={dataTest}
      >
        <ButtonLink
          disabled={status === "disabled"}
          type="secondary"
          fullWidth
          iconLeft={<WizardStepIcon />}
          ariaCurrent={isActive ? "step" : "false"}
          onClick={handleClick}
        >
          {status === "disabled" ? (
            <Text as="span" type="secondary">
              {title}
            </Text>
          ) : (
            title
          )}
        </ButtonLink>
        {isActive && (
          <div className="w-xxxs bg-product-normal rounded-e-100 absolute inset-y-px ltr:left-0 rtl:right-0" />
        )}
        {status !== "disabled" && (
          <div className="border-cloud-normal ms-xxl absolute inset-x-0 bottom-0 border-t border-solid" />
        )}
      </li>
    );
  }

  const step = (
    <Stack
      flex
      direction={isColumnOnDesktop ? "row" : "column"}
      align={isColumnOnDesktop ? "start" : "center"}
      spacing="XSmall"
      spaceAfter={isColumnOnDesktop ? "large" : "none"}
    >
      <WizardStepIcon isCompleted={isCompleted} />
      <div className="px-xs">
        {status === "disabled" ? (
          <Text as="div" type="secondary" size="small" align="center">
            {title}
          </Text>
        ) : (
          <div
            className={cx(
              "block [&_span]:block",
              !isActive &&
                "group-hover/button:[&_span]:text-primary-foreground group-focus/button:[&_span]:text-primary-foreground group-hover/button:[&_span]:underline group-focus/button:[&_span]:underline",
            )}
          >
            <Text
              as="span"
              size="small"
              align="center"
              type={isActive ? "primary" : "secondary"}
              weight={isActive ? "medium" : "normal"}
            >
              {title}
            </Text>
          </div>
        )}
      </div>
    </Stack>
  );
  return (
    <li className="group/container relative -my-px flex-1" data-test={dataTest}>
      <div className="relative">
        <ProgressBarPart
          isColumn={isColumnOnDesktop}
          className={cx(
            isColumnOnDesktop ? "hidden" : "ltr:left-0 rtl:right-0",
            status === "disabled" ? "bg-cloud-normal-hover" : "bg-product-normal",
          )}
        />
        <ProgressBarPart
          isColumn={isColumnOnDesktop}
          className={cx(
            !isColumnOnDesktop && "ltr:right-0 rtl:left-0",
            isColumnOnDesktop && isLastStep && "hidden",
            status === "disabled" || nextStepStatus === "disabled"
              ? "bg-cloud-normal-hover"
              : "bg-product-normal",
          )}
        />
      </div>
      <div className="relative">
        <Stack flex direction="column" align={isColumnOnDesktop ? "start" : "center"}>
          {status === "disabled" ? (
            <span className="px-xs">{step}</span>
          ) : (
            <div
              className="group/button px-xs cursor-pointer"
              role="button"
              tabIndex={0}
              aria-current={isActive ? "step" : "false"}
              onClick={event => {
                event.currentTarget.blur();
                handleClick(event);
              }}
              // keep focus for people who are navigating with the keyboard
              onKeyDown={event => {
                if (event.key === "Enter") {
                  handleClick(event);
                }
              }}
            >
              {step}
            </div>
          )}
        </Stack>
      </div>
    </li>
  );
};

export default WizardStep;
