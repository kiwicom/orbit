// @flow
import * as React from "react";
import { css } from "styled-components";

import WizardStep from "./WizardStep";
import { WizardStepContext } from "./WizardContext";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import ChevronDown from "../icons/ChevronDown";
import Portal from "../Portal";
import Modal from "../Modal";
import { CardSection } from "../Card";
import useMediaQuery from "../hooks/useMediaQuery";
import useTheme from "../hooks/useTheme";
import useTranslate from "../hooks/useTranslate";

import type { Props } from ".";

const unstyledList = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Wizard = ({
  dataTest,
  lockScrolling = true,
  id,
  completedSteps,
  activeStep,
  children,
  onChangeStep,
}: Props): React.Node | React.Element<"nav"> => {
  const { isLargeMobile } = useMediaQuery();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const toggle = React.useRef<React.ElementRef<typeof ButtonLink> | null>(null);
  const translate = useTranslate();

  const isCompact = !isLargeMobile;
  const childrenArray = React.Children.toArray(children);
  const stepStatuses = childrenArray.map((step, index) => {
    if (index < completedSteps) return "completed";
    if (index === completedSteps) return "available";
    return "disabled";
  });
  // $FlowFixMe: not sure why "props" evaluates to "mixed"
  const activeStepTitle = childrenArray.find((step, index) => index === activeStep)?.props.title;
  const stepsCount = React.Children.count(children);

  const steps = React.Children.map(children, (step, index) => (
    <WizardStepContext.Provider
      value={{
        index,
        status: stepStatuses[index],
        nextStepStatus: stepStatuses[index + 1],
        isCompact,
        isActive: activeStep === index,
        onChangeStep,
        onClose: () => setOpen(false),
      }}
    >
      {step}
    </WizardStepContext.Provider>
  ));

  if (isCompact) {
    return (
      <>
        <div
          css={css`
            button {
              /* it's intended to go from edge to edge */
              border-radius: 0;
            }
          `}
        >
          <ButtonLink
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
            <Stack as="span" inline>
              <b>
                {translate("wizard_progress", {
                  number: activeStep + 1,
                  total: stepsCount,
                })}
              </b>{" "}
              <span
                css={css`
                  font-weight: normal;
                `}
              >
                {activeStepTitle}
              </span>
            </Stack>
          </ButtonLink>
        </div>
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
                <nav
                  css={css`
                    /* matching this to ModalBody's border-radius */
                    padding-top: 9px;
                  `}
                >
                  <ul
                    css={css`
                      ${unstyledList};
                      > * + * {
                        border-top: 1px solid ${theme.orbit.paletteCloudDark};
                      }
                    `}
                  >
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
                          {translate("button_close")}
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
    <nav>
      <ul
        css={css`
          ${unstyledList};
          display: flex;
          li {
            flex: 1 1 0%;
          }
        `}
      >
        {steps}
      </ul>
    </nav>
  );
};

export default Wizard;
export { WizardStep };
