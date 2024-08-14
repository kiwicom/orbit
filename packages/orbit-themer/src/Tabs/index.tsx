import React from "react";
import styled, { css } from "styled-components";
import { defaultTheme, Heading, Button, Stack } from "@kiwicom/orbit-components";

import Color from "./Color";
import ColorTab from "./ColorTab";
import ColorContext from "../ColorContext";
import ModalExport from "./ModalExport";

const StyledTabs = styled.div`
  ${({ theme }) => css`
    padding: ${theme.orbit.space800} 0;
    padding-right: ${theme.orbit.space400};
    box-sizing: border-box;
    flex: 0 280px;
    min-width: 280px;
    border-right: 1px solid ${theme.orbit.paletteCloudDark};
    position: relative;
  `}
`;

StyledTabs.defaultProps = {
  theme: defaultTheme,
};

const ColorsPanel = styled.div``;

const StyledColors = styled.div`
  margin-top: 8px;
`;

const StyledPanelButtons = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
`;

const Tabs = () => {
  const [modalExportVisibility, setModalExportVisibility] = React.useState(false);

  return (
    <StyledTabs>
      <ColorsPanel>
        <Heading type="title3" as="h2">
          Colors
        </Heading>
        <StyledColors>
          <ColorTab title="Product" colorPath="product">
            <Color name="Product Light" objectKey="product.light" />
            <Color name="Product Light" objectKey="product.lightHover" extra="hover" />
            <Color name="Product Light" objectKey="product.lightActive" extra="active" />
            <Color name="Product Normal" objectKey="product.normal" />
            <Color name="Product Normal" objectKey="product.normalHover" extra="hover" />
            <Color name="Product Normal" objectKey="product.normalActive" extra="active" />
            <Color name="Product Dark" objectKey="product.dark" />
          </ColorTab>
          <ColorTab title="White" colorPath="white">
            <Color name="White Normal" objectKey="white.normal" />
          </ColorTab>
          <ColorTab title="Cloud" colorPath="cloud">
            <Color name="Cloud Light" objectKey="cloud.light" />
            <Color name="Cloud Light" objectKey="cloud.lightHover" extra="hover" />
            <Color name="Cloud Light" objectKey="cloud.lightActive" extra="active" />
            <Color name="Cloud Normal" objectKey="cloud.normal" />
            <Color name="Cloud Normal" objectKey="cloud.normalHover" extra="hover" />
            <Color name="Cloud Normal" objectKey="cloud.normalActive" extra="active" />
          </ColorTab>
          <ColorTab title="Ink" colorPath="ink">
            <Color name="Ink Light" objectKey="ink.light" />
            <Color name="Ink Light" objectKey="ink.lightHover" extra="hover" />
            <Color name="Ink Light" objectKey="ink.lightActive" extra="active" />
            <Color name="Ink Normal" objectKey="ink.normal" />
            <Color name="Ink Normal" objectKey="ink.normalHover" extra="hover" />
            <Color name="Ink Normal" objectKey="ink.normalActive" extra="active" />
            <Color name="Ink Dark" objectKey="ink.dark" />
            <Color name="Ink Dark" objectKey="ink.darkHover" extra="hover" />
            <Color name="Ink Dark" objectKey="ink.darkActive" extra="active" />
          </ColorTab>
          <ColorTab title="Orange" colorPath="orange">
            <Color name="Orange Light" objectKey="orange.light" />
            <Color name="Orange Light" objectKey="orange.lightHover" extra="hover" />
            <Color name="Orange Light" objectKey="orange.lightActive" extra="active" />
            <Color name="Orange Normal" objectKey="orange.normal" />
            <Color name="Orange Normal" objectKey="orange.normalHover" extra="hover" />
            <Color name="Orange Normal" objectKey="orange.normalActive" extra="active" />
            <Color name="Orange Dark" objectKey="orange.dark" />
          </ColorTab>
          <ColorTab title="Red" colorPath="red">
            <Color name="Red Light" objectKey="red.light" />
            <Color name="Red Light" objectKey="red.lightHover" extra="hover" />
            <Color name="Red Light" objectKey="red.lightActive" extra="active" />
            <Color name="Red Normal" objectKey="red.normal" />
            <Color name="Red Normal" objectKey="red.normaHover" extra="hover" />
            <Color name="Red Normal" objectKey="red.normalActive" extra="active" />
            <Color name="Red Dark" objectKey="red.dark" />
          </ColorTab>
          <ColorTab title="Green" colorPath="green">
            <Color name="Green Light" objectKey="green.light" />
            <Color name="Green Light" objectKey="green.lightHover" extra="hover" />
            <Color name="Green Light" objectKey="green.lightActive" extra="active" />
            <Color name="Green Normal" objectKey="green.normal" />
            <Color name="Green Normal" objectKey="green.normalHover" extra="hover" />
            <Color name="Green Normal" objectKey="green.normalActive" extra="active" />
            <Color name="Green Dark" objectKey="green.dark" />
          </ColorTab>
          <ColorTab title="Blue" colorPath="blue">
            <Color name="Blue Light" objectKey="blue.light" />
            <Color name="Blue Light" objectKey="blue.lightHover" extra="hover" />
            <Color name="Blue Light" objectKey="blue.lightActive" extra="active" />
            <Color name="Blue Normal" objectKey="blue.normal" />
            <Color name="Blue Normal" objectKey="blue.normalHover" extra="hover" />
            <Color name="Blue Normal" objectKey="blue.normalActive" extra="active" />
            <Color name="Blue Dark" objectKey="blue.dark" />
          </ColorTab>
          <ColorTab title="Social" colorPath="social">
            <Color name="Social Facebook" objectKey="social.facebook" />
            <Color name="Social Facebook" objectKey="social.facebookHover" extra="hover" />
            <Color name="Social Facebook" objectKey="social.facebookActive" extra="active" />
          </ColorTab>
        </StyledColors>
      </ColorsPanel>
      {modalExportVisibility && <ModalExport onClose={() => setModalExportVisibility(false)} />}
      <ColorContext.Consumer>
        {({ resetColors }) => (
          <StyledPanelButtons>
            <Stack direction="row">
              <Button type="secondary" fullWidth onClick={resetColors}>
                Reset
              </Button>
              <Button type="primary" fullWidth onClick={() => setModalExportVisibility(true)}>
                Export
              </Button>
            </Stack>
          </StyledPanelButtons>
        )}
      </ColorContext.Consumer>
    </StyledTabs>
  );
};

export default Tabs;
