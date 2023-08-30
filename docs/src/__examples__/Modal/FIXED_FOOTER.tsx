import React from "react";
import { FlightDirect } from "@kiwicom/orbit-components/icons";
import {
  Box,
  Button,
  ButtonLink,
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
  OrbitProvider,
  defaultTheme,
} from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
      <OrbitProvider theme={defaultTheme} useId={React.useId}>
        <Modal fixedFooter>
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
                  title={
                    <Stack direction="row" spacing="XSmall" align="center">
                      <Box>
                        <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                      </Box>
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Cairo CAI</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Dubai SHJ</Text>
                      </Stack>
                    </Stack>
                  }
                  actions={
                    <ButtonLink compact type="secondary" size="small">
                      See meals
                    </ButtonLink>
                  }
                />
                <CardSection
                  title={
                    <Stack direction="row" spacing="XSmall" align="center">
                      <Box>
                        <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                      </Box>
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Dubai SHJ</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Mumbai BOM</Text>
                      </Stack>
                    </Stack>
                  }
                  actions={
                    <ButtonLink compact type="secondary" size="small">
                      See meals
                    </ButtonLink>
                  }
                />
                <CardSection
                  title={
                    <Stack direction="row" spacing="XSmall" align="center">
                      <Box>
                        <CarrierLogo carriers={[{ code: "G8", name: "Go Air" }]} size="large" />
                      </Box>
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Mumbai BOM</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Malé MLE</Text>
                      </Stack>
                    </Stack>
                  }
                  actions={
                    <ButtonLink compact type="secondary" size="small">
                      See meals
                    </ButtonLink>
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
                  title={
                    <Stack direction="row" spacing="XSmall" align="center">
                      <Box>
                        <CarrierLogo carriers={[{ code: "G8", name: "Go Air" }]} size="large" />
                      </Box>
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Malé MLE</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Mumbai BOM</Text>
                      </Stack>
                    </Stack>
                  }
                  actions={
                    <ButtonLink compact type="secondary" size="small">
                      See meals
                    </ButtonLink>
                  }
                />
                <CardSection
                  title={
                    <Stack direction="row" spacing="XSmall" align="center">
                      <Box>
                        <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                      </Box>
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Mumbai BOM</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Dubai SHJ</Text>
                      </Stack>
                    </Stack>
                  }
                  actions={
                    <ButtonLink compact type="secondary" size="small">
                      See meals
                    </ButtonLink>
                  }
                />
                <CardSection
                  title={
                    <Stack direction="row" spacing="XSmall" align="center">
                      <Box>
                        <CarrierLogo carriers={[{ code: "G9", name: "Air Arabia" }]} size="large" />
                      </Box>
                      <Stack direction="row" spacing="XXSmall" align="center">
                        <Text weight="bold">Dubai SHJ</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Cairo CAI</Text>
                      </Stack>
                    </Stack>
                  }
                  actions={
                    <ButtonLink compact type="secondary" size="small">
                      See meals
                    </ButtonLink>
                  }
                />
              </Card>
            </Stack>
          </ModalSection>
          <ModalFooter>
            <Box display="flex" justify="end">
              <Button>Save meals</Button>
            </Box>
          </ModalFooter>
        </Modal>
      </OrbitProvider>
    );
  },
  exampleKnobs: [
    {
      component: "Modal",
      knobs: [
        { name: "isMobileFullPage", type: "boolean", defaultValue: false },
        { name: "fixedFooter", type: "boolean", defaultValue: true },
        { name: "hasCloseButton", type: "boolean", defaultValue: true },
        { name: "mobileHeader", type: "boolean", defaultValue: true },
        { name: "disableAnimation", type: "boolean", defaultValue: false },
        { name: "autoFocus", type: "boolean", defaultValue: true },
        { name: "preventOverlayClose", type: "boolean", defaultValue: false },
        {
          name: "size",
          type: "select",
          options: ["extraSmall", "small", "normal", "large", "extraLarge"],
        },
      ],
    },
    {
      component: "ModalSection",
      knobs: [{ name: "suppressed", type: "boolean", defaultValue: false }],
    },
    {
      component: "ModalHeader",
      knobs: [
        { name: "suppressed", type: "boolean", defaultValue: false },
        { name: "title", type: "text", defaultValue: "Enjoy a meal while you travel" },
        {
          name: "description",
          type: "text",
          defaultValue: "See what’s available for each segment of your trip.",
        },
      ],
    },
    {
      component: "ModalFooter",
      knobs: [
        {
          name: "flex",
          type: "text",
          defaultValue: "",
        },
      ],
    },
  ],
};
