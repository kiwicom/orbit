import React from "react";
import { useIntl } from "react-intl";
import Popover from "@kiwicom/orbit-components/lib/Popover";
import Modal, { ModalSection } from "@kiwicom/orbit-components/lib/Modal";
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import Drawer from "@kiwicom/orbit-components/lib/Drawer";
import Wizard, { WizardStep } from "@kiwicom/orbit-components/lib/Wizard";
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";
import MobileDialogPrimitive from "@kiwicom/orbit-components/lib/primitives/MobileDialogPrimitive";
import Breadcrumbs, { BreadcrumbsItem } from "@kiwicom/orbit-components/lib/Breadcrumbs";

/* prettier-ignore */

const Component = () => {
  const intl = useIntl();

  return (
    <div>
      <Popover
        content="kek"
        labelClose={intl.formatMessage({
          id: "orbit.button_close",
          defaultMessage: "Close"
        })}>
        <button>kek</button>
      </Popover>
      <Breadcrumbs
        goBackTitle={intl.formatMessage({
          id: "orbit.breadcrumbs_back",
          defaultMessage: "Back"
        })}><BreadcrumbsItem>kek</BreadcrumbsItem></Breadcrumbs>
      <Modal
        labelClose={intl.formatMessage({
          id: "orbit.button_close",
          defaultMessage: "Close"
        })}>
        <ModalSection>Section</ModalSection>
      </Modal>
      <Card
        labelClose={intl.formatMessage({
          id: "orbit.button_close",
          defaultMessage: "Close"
        })}>
        <CardSection>Section</CardSection>
      </Card>
      <Alert
        labelClose={intl.formatMessage({
          id: "orbit.button_close",
          defaultMessage: "Close"
        })}>kek</Alert>
      <NavigationBar
        openTitle={intl.formatMessage({
          id: "orbit.navigationbar_open_menu",
          defaultMessage: "Open menu"
        })}>bar</NavigationBar>
      <Drawer
        shown
        labelHide={intl.formatMessage({
          id: "orbit.drawer_hide",
          defaultMessage: "Hide"
        })}>drawer shown</Drawer>
      <Tooltip
        content="bur"
        labelClose={intl.formatMessage({
          id: "orbit.button_close",
          defaultMessage: "Close"
        })}>
        <button>kek</button>
      </Tooltip>
      <MobileDialogPrimitive
        content={<div>kek</div>}
        labelClose={intl.formatMessage({
          id: "orbit.button_close",
          defaultMessage: "Close"
        })}>dialog</MobileDialogPrimitive>
      <Wizard
        id="kek"
        completedSteps={1}
        activeStep={1}
        labelClose={intl.formatMessage({
          id: "orbit.button_close",
          defaultMessage: "Close"
        })}
        labelProgress={intl.formatMessage({
          id: "orbit.wizard_progress",

          values: {
            number: 1,
            total: 1
          }
        })}>
        <WizardStep title="Step 1" />
      </Wizard>
    </div>
  );
};

export default Component;
