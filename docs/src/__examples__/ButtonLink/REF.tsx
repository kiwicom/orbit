import * as React from "react";
import { ButtonLink } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const ref = React.useRef(null);
    return (
      <ButtonLink ref={ref} href="https://reactjs.org/docs/refs-and-the-dom.html" external>
        Read more
      </ButtonLink>
    );
  },
  info: {
    title: "Button link refs",
    description:
      "See how to implement refs with  button links. Click the button link to read more about when and how to use refs.",
  },
};
