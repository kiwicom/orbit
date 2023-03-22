import React from "react";
import Translate from "@kiwicom/nitro/lib/components/Translate";
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
      <Popover content="kek" labelClose={<Translate tKey="orbit.button_close" />}>
        <button>kek</button>
      </Popover>
      <Breadcrumbs goBackTitle={<Translate tKey="orbit.breadcrumbs_back" />}><BreadcrumbsItem>kek</BreadcrumbsItem></Breadcrumbs>
      <Modal labelClose={<Translate tKey="orbit.button_close" />}>
        <ModalSection>Section</ModalSection>
      </Modal>
      <Card labelClose={<Translate tKey="orbit.button_close" />}>
        <CardSection>Section</CardSection>
      </Card>
      <Alert labelClose={<Translate tKey="orbit.button_close" />}>kek</Alert>
      <NavigationBar openTitle={<Translate tKey="orbit.navigationbar_open_menu" />}>bar</NavigationBar>
      <Drawer shown labelHide={<Translate tKey="orbit.drawer_hide" />}>drawer shown</Drawer>
      <Tooltip content="bur" labelClose={<Translate tKey="orbit.button_close" />}>
        <button>kek</button>
      </Tooltip>
      <MobileDialogPrimitive
        content={<div>kek</div>}
        labelClose={<Translate tKey="orbit.button_close" />}>dialog</MobileDialogPrimitive>
      <Wizard
        id="kek"
        completedSteps={1}
        activeStep={1}
        labelClose={<Translate tKey="orbit.button_close" />}
        labelProgress={<Translate
          tKey="orbit.wizard_progress"
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
