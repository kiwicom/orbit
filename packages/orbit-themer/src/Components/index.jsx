// @flow
import * as React from "react";
import styled from "styled-components";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Card from "@kiwicom/orbit-components/lib/Card";
import CardSection from "@kiwicom/orbit-components/lib/Card/CardSection";

import Alert from "./Alert";
import Badge from "./Badge";
import Button from "./Button";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import ComponentSection from "./ComponentSection";
import Radios from "./Radio";
import ListChoices from "./ListChoice";
import ButtonLinks from "./ButtonLink";

const StyledComponentsOuter = styled.div`
  background: #f5f7f9;
  padding: 0 52px;
  max-height: 100vh;
  flex: 1 auto;
  overflow-y: scroll;
`;

const Components = (): React.Node => (
  <StyledComponentsOuter>
    <ComponentSection name="Status components">
      <Card title="Alerts">
        <CardSection>
          <Alert />
        </CardSection>
      </Card>
      <Stack direction="row">
        <Card title="Badges">
          <CardSection>
            <Badge />
          </CardSection>
        </Card>
        <Card title="Buttons">
          <CardSection>
            <Button />
          </CardSection>
        </Card>
      </Stack>
    </ComponentSection>

    <ComponentSection name="Form components">
      <Stack direction="row">
        <Card title="InputField">
          <CardSection>
            <InputField />
          </CardSection>
        </Card>
        <Stack>
          <Stack>
            <Stack direction="row">
              <Card title="Checkboxes">
                <CardSection>
                  <Checkbox />
                </CardSection>
              </Card>
              <Card title="Radio">
                <CardSection>
                  <Radios />
                </CardSection>
              </Card>
            </Stack>

            <Stack direction="row">
              <Card title="ListChoice">
                d{" "}
                <CardSection>
                  <ListChoices />
                </CardSection>
              </Card>
              <Card title="ButtonLink">
                <CardSection>
                  <ButtonLinks />
                </CardSection>
              </Card>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ComponentSection>
  </StyledComponentsOuter>
);

export default Components;
