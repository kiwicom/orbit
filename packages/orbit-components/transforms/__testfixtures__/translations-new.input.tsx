import React from "react";
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
      <Popover content="kek">
        <button>kek</button>
      </Popover>
      <Breadcrumbs><BreadcrumbsItem>kek</BreadcrumbsItem></Breadcrumbs>
      <Modal>
        <ModalSection>Section</ModalSection>
      </Modal>
      <Card>
        <CardSection>Section</CardSection>
      </Card>
      <Alert>kek</Alert>
      <NavigationBar>bar</NavigationBar>
      <Drawer shown>drawer shown</Drawer>
      <Tooltip content="bur">
        <button>kek</button>
      </Tooltip>
      <MobileDialogPrimitive content={<div>kek</div>}>dialog</MobileDialogPrimitive>
      <Wizard id="kek" completedSteps={1} activeStep={1}>
        <WizardStep title="Step 1" />
      </Wizard>
    </div>
  );
};

export default Component;
