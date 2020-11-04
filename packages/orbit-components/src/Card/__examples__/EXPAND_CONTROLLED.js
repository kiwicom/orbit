// @flow
import * as React from "react";

import ButtonLink from "../../ButtonLink";
import Card from "../index";
import CardSection from "../CardSection/index";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: () => {
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const action = expanded1 || expanded2;
    return (
      <Card
        title="Passenger info"
        actions={
          <ButtonLink
            size="small"
            onClick={() => {
              setExpanded1(!action);
              setExpanded2(!action);
            }}
          >
            {action ? "Close all" : "Expand all"}
          </ButtonLink>
        }
      >
        <CardSection
          expandable
          expanded={expanded1}
          onClose={() => {
            setExpanded1(false);
          }}
          onExpand={() => {
            setExpanded1(true);
          }}
          title={`Yasmin Karenth – ${expanded1 ? "expanded" : "closed"}`}
          icon={<Icons.GenderWoman ariaLabel="female" />}
        >
          <Stack direction="column" spacing="XSmall">
            <Text type="secondary">January 20, 1978</Text>
            <Text type="secondary">yas.karenth@example.com</Text>
          </Stack>
        </CardSection>
        <CardSection
          expandable
          expanded={expanded2}
          onClose={() => {
            setExpanded2(false);
          }}
          onExpand={() => {
            setExpanded2(true);
          }}
          title={`Robin Kask – ${expanded2 ? "expanded" : "closed"}`}
          icon={<Icons.GenderMan ariaLabel="male" />}
        >
          <Stack direction="column" spacing="XSmall">
            <Text type="secondary">June 11, 1985</Text>
            <Text type="secondary">robin2fly@example.com</Text>
          </Stack>
        </CardSection>
      </Card>
    );
  },
  info: {
    title: "Expandable sections – controlled",
    description:
      "You can control the expanding and closing of card sections yourself via the state. As soon as you pass the expanded prop (either true or false), you will have to control the sections yourself using onExpand and onClose and/or other actions.",
  },
};
