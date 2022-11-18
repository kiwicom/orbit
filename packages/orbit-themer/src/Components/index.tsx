import * as React from "react";
import styled, { css } from "styled-components";
import { defaultTheme, Stack, Card, CardSection } from "@kiwicom/orbit-components";

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
  ${({ theme }) => css`
    background: ${theme.orbit.paletteCloudLight};
    padding: ${theme.orbit.spaceLarge} ${theme.orbit.spaceXXLarge};
    max-height: 100vh;
    flex: 1 auto;
    gap: ${theme.orbit.spaceXXXLarge};
    display: flex;
    flex-direction: column;
    overflow: auto;
  `}
`;

StyledComponentsOuter.defaultProps = {
  theme: defaultTheme,
};

const Components = () => (
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
      </Stack>
      <Stack direction="row">
        <Card title="Buttons">
          <CardSection>
            <Button />
          </CardSection>
        </Card>
        <Card title="ButtonLink">
          <CardSection>
            <ButtonLinks />
          </CardSection>
        </Card>
      </Stack>
    </ComponentSection>

    <ComponentSection name="Form components">
      <Stack direction="column">
        <Stack direction="row">
          <Card title="InputField">
            <CardSection>
              <InputField />
            </CardSection>
          </Card>
          <Card title="ListChoice">
            <CardSection>
              <ListChoices />
            </CardSection>
          </Card>
        </Stack>
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
      </Stack>
    </ComponentSection>
  </StyledComponentsOuter>
);

export default Components;
