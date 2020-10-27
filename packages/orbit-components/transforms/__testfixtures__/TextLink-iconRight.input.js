// @noflow
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { TextLink } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";

const MyApp = () => {
  return (
    <TextLink icon={<NewWindow />} type="secondary">
      Click here
    </TextLink>
  );
};

export default MyApp;
