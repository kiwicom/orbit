// @flow
import * as React from "react";

import Button from "../../Button";
import Card, { CardSection } from "../../Card";
import CarrierLogo from "../../CarrierLogo";
import Illustration from "../../Illustration";
import Modal from "../../Modal";
import ModalFooter from "../../Modal/ModalFooter";
import ModalHeader from "../../Modal/ModalHeader";
import ModalSection from "../../Modal/ModalSection";
import SkipLink from "../index";
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
            <SkipLink
              links={[
                {
                  href: "#outbound",
                  name: "Go to the outbound sector of your trip",
                },
                {
                  href: "#inbound",
                  name: "Go to the inbound sector of your trip",
                },
              ]}
            />
            <ModalHeader
              title="Enjoy a meal while you travel"
              illustration={<Illustration name="Meal" size="small" />}
              description="See what’s available for each segment of your trip."
            />
            <ModalSection suppressed>
              <Stack>
                <Text uppercase weight="bold" id="outbound">
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
                <Text uppercase weight="bold" id="inbound">
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
    title: "Skip links in modals",
    description:
      "Skip links work well for any component with repeated structure, such as a modal. Use skip links to off quick navigation directly inside the modal.",
  },
};
