import * as React from "react";
import { Button, Alert } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showAlert, setShowAlert] = React.useState(true);
    return showAlert ? (
      <Alert closable onClose={() => setShowAlert(false)} title="You've got mail" />
    ) : (
      <Button onClick={() => setShowAlert(true)}>Show alert</Button>
    );
  },
  info: {
    title: "Closable Alert",
    description:
      "Alerts can be closable. Including a closeable prop displays a close button and lets the alert handle onClose. Be careful not to overuse closable alerts. They still interrupte the user flow and lead to the opposite of progressive disclosure: a lot of information at first sight that progressively goes away.",
  },
};
