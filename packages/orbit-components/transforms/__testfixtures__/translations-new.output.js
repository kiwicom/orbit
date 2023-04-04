import React from "react";
import { FormattedMessage } from "react-intl";
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
  return (
    <div>
      <Popover
        content="kek"
        labelClose={<FormattedMessage id="orbit.button_close" defaultMessage="Close" />}>
        <button>kek</button>
      </Popover>
      <Breadcrumbs
        goBackTitle={<FormattedMessage id="orbit.breadcrumbs_back" defaultMessage="Back" />}><BreadcrumbsItem>kek</BreadcrumbsItem></Breadcrumbs>
      <Modal
        labelClose={<FormattedMessage id="orbit.button_close" defaultMessage="Close" />}>
        <ModalSection>Section</ModalSection>
      </Modal>
      <Card
        labelClose={<FormattedMessage id="orbit.button_close" defaultMessage="Close" />}>
        <CardSection>Section</CardSection>
      </Card>
      <Alert
        labelClose={<FormattedMessage id="orbit.button_close" defaultMessage="Close" />}>kek</Alert>
      <NavigationBar
        openTitle={<FormattedMessage id="orbit.navigationbar_open_menu" defaultMessage="Open menu" />}>bar</NavigationBar>
      <Drawer
        shown
        labelHide={<FormattedMessage id="orbit.drawer_hide" defaultMessage="Hide" />}>drawer shown</Drawer>
      <Tooltip
        content="bur"
        labelClose={<FormattedMessage id="orbit.button_close" defaultMessage="Close" />}>
        <button>kek</button>
      </Tooltip>
      <MobileDialogPrimitive
        content={<div>kek</div>}
        labelClose={<FormattedMessage id="orbit.button_close" defaultMessage="Close" />}>dialog</MobileDialogPrimitive>
      <Wizard
        id="kek"
        completedSteps={1}
        activeStep={1}
        labelClose={<FormattedMessage id="orbit.button_close" defaultMessage="Close" />}
        labelProgress={<FormattedMessage
          id="orbit.wizard_progress"
          values={{
            number: 1,
            total: 1
          }} />}>
        <WizardStep title="Step 1" />
      </Wizard>
    </div>
  );
};

export default Component;
