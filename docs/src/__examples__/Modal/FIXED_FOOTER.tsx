import React from "react";
import { FlightDirect } from "@kiwicom/orbit-components/icons";
import {
  Button,
  Stack,
  Text,
  Illustration,
  Modal,
  Card,
  CardSection,
  CarrierLogo,
  ModalHeader,
  ModalFooter,
  ModalSection,
} from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showModal, setShowModal] = React.useState(false);
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
                        <FlightDirect size="small" />
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
                        <FlightDirect size="small" />
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
                        <FlightDirect size="small" />
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
                        <FlightDirect size="small" />
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
                        <FlightDirect size="small" />
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
                        <FlightDirect size="small" />
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
    title: "Modal with fixed footer",
    description:
      "When you have longer structure within the modal and an action that applies to it all, use a fixed footer to keep the action available even during scrolling.",
  },
};
