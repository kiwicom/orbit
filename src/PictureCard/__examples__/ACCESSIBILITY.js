// @flow
import * as React from "react";

import Heading from "../../Heading";
import PictureCard from "../index";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: () => {
    const [actions, setActions] = React.useState("");
    const addAction = action => {
      setActions([...actions, action]);
    };
    return (
      <Stack>
        <Stack>
          <Heading>Name</Heading>
          <Stack spacing="extraTight">
            <Text>
              When the picture card has no content, make sure to include a <code>name</code> for the
              card. This way people who won&apos;t see the picture get the same message.
            </Text>
            <PictureCard
              height="155px"
              image={{
                code: "athens_gr",
                name: "Athens",
                original: "900x120",
              }}
            />
          </Stack>
          <Stack spacing="extraTight">
            <Text>
              When there is the same text in the card, set the <code>name</code> of the picture to
              blank to not repeat the same text.
            </Text>
            <PictureCard
              title="Athens"
              height="155px"
              image={{
                code: "athens_gr",
                name: "",
                original: "900x120",
              }}
            />
          </Stack>
        </Stack>{" "}
        <Stack>
          <Heading>
            <code>tabIndex</code>
          </Heading>
          <Stack spacing="extraTight">
            <Text>TODO: see if this is true. Resolve issues with focus.</Text>
            <Text>
              When the picture card has an interaction (via <code>href</code> or{" "}
              <code>onClick</code>
              ), it will automatically have a <code>tabIndex</code> of <code>0</code> so that it can
              be focused. In the rare case when the card should not be interactive, you can override
              this by setting <code>tabIndex</code> to <code>-1</code>.
            </Text>
            <PictureCard
              tabIndex={-1}
              onClick={() => addAction("You clicked the card.")}
              height="155px"
              image={{
                code: "athens_gr",
                name: "Athens",
                original: "900x120",
              }}
            />
            {actions && (
              <>
                {actions.map((action, i) => {
                  // eslint-disable-next-line react/no-array-index-key
                  return <Text key={i}>{action}</Text>;
                })}
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Accessibility",
    description: "See the best practices to make your picture cards accessibile.",
  },
};
