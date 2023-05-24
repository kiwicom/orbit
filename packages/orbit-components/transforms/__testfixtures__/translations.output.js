import React from "react";
import { useIntl } from "@kiwicom/nitro/lib/services/intl/context";
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
  const { translate } = useIntl();

  return (
    <div>
      <Popover content="kek" labelClose={translate("orbit.button_close")}>
        <button>kek</button>
      </Popover>
      <Breadcrumbs goBackTitle={translate("orbit.breadcrumbs_back")}><BreadcrumbsItem>kek</BreadcrumbsItem></Breadcrumbs>
      <Modal labelClose={translate("orbit.button_close")}>
        <ModalSection>Section</ModalSection>
      </Modal>
      <Card labelClose={translate("orbit.button_close")}>
        <CardSection>Section</CardSection>
      </Card>
      <Alert labelClose={translate("orbit.button_close")}>kek</Alert>
      <NavigationBar openTitle={translate("orbit.navigationbar_open_menu")}>bar</NavigationBar>
      <Drawer shown labelHide={translate("orbit.drawer_hide")}>drawer shown</Drawer>
      <Tooltip content="bur" labelClose={translate("orbit.button_close")}>
        <button>kek</button>
      </Tooltip>
      <MobileDialogPrimitive content={<div>kek</div>} labelClose={translate("orbit.button_close")}>dialog</MobileDialogPrimitive>
      <Wizard
        id="kek"
        completedSteps={1}
        activeStep={1}
        labelClose={translate("orbit.button_close")}
        labelProgress={translate("orbit.wizard_progress", {
          number: 1,
          total: 1
        })}>
        <WizardStep title="Step 1" />
      </Wizard>
    </div>
  );
};

export default Component;
