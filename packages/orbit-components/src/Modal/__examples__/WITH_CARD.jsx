// @flow
import * as React from "react";

import Button from "../../Button";
import Card, { CardSection } from "../../Card";
import CarrierLogo from "../../CarrierLogo";
import Illustration from "../../Illustration";
import Modal, { ModalHeader, ModalSection, ModalFooter } from "..";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => {
    const [showModal, setShowModal] = React.useState(true);
    return (
      <>
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
            fixedFooter
          >
            <ModalHeader
              title="Enjoy a meal while you travel"
              illustration={<Illustration name="Meal" size="small" />}
              description="See what’s available for each segment of your trip."
            />
            <ModalSection suppressed>
              <Stack>
                <Text uppercase weight="bold">
                  Outbound
                </Text>
                <Card>
                  <CardSection
                    icon={
                      <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                    }
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Cairo CAI</Text>
                        <Icons.FlightDirect size="small" />
                        <Text weight="bold">Dubai SHJ</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                  <CardSection
                    icon={
                      <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                    }
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Dubai SHJ</Text>
                        <Icons.FlightDirect size="small" />
                        <Text weight="bold">Mumbai BOM</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                  <CardSection
                    icon={<CarrierLogo carriers={[{ code: "G8", name: "Go Air" }]} size="large" />}
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Mumbai BOM</Text>
                        <Icons.FlightDirect size="small" />
                        <Text weight="bold">Malé MLE</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                </Card>
              </Stack>
            </ModalSection>
            <ModalSection>
              <Stack>
                <Text uppercase weight="bold">
                  Inbound
                </Text>
                <Card>
                  <CardSection
                    icon={<CarrierLogo carriers={[{ code: "G8", name: "Go Air" }]} size="large" />}
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Malé MLE</Text>
                        <Icons.FlightDirect size="small" />
                        <Text weight="bold">Mumbai BOM</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                  <CardSection
                    icon={
                      <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                    }
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Mumbai BOM</Text>
                        <Icons.FlightDirect size="small" />
                        <Text weight="bold">Dubai SHJ</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                  <CardSection
                    icon={
                      <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                    }
                    title={
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Dubai SHJ</Text>
                        <Icons.FlightDirect size="small" />
                        <Text weight="bold">Cairo CAI</Text>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        See meals
                      </Button>
                    }
                  />
                </Card>
              </Stack>
            </ModalSection>
            <ModalFooter>
              <Stack justify="end">
                <Button>Save meals</Button>
              </Stack>
            </ModalFooter>
          </Modal>
        )}
        {!showModal && (
          <Button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Show modal
          </Button>
        )}
      </>
    );
  },
  info: {
    title: "Modal with cards",
    description: "Modals can have structured content using cards.",
  },
};
