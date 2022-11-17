// @flow
import * as React from "react";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import InfoCircle from "@kiwicom/orbit-components/lib/icons/InformationCircle";
import AlertCircle from "@kiwicom/orbit-components/lib/icons/AlertCircle";
import Check from "@kiwicom/orbit-components/lib/icons/Check";
import AlertIcon from "@kiwicom/orbit-components/lib/icons/Alert";

const Alerts = (): React.Node => {
  const message = "Lorem ipsum dolor sit amet…";
  const title = "Lorem ipsum";

  return (
    <>
      <Stack direction="row" spaceAfter="medium" wrap>
        <Alert type="info" title={title} icon={<InfoCircle />}>
          {message}
        </Alert>
        <Alert type="success" title={title} icon={<Check />}>
          {message}
        </Alert>
      </Stack>
      <Stack direction="row" wrap>
        <Alert type="warning" title={title} icon={<AlertIcon />}>
          {message}
        </Alert>
        <Alert type="critical" title={title} icon={<AlertCircle />}>
          {message}
        </Alert>
      </Stack>
    </>
  );
};

export default Alerts;
