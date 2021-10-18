// @flow
import * as React from "react";

import ButtonLink from "../../ButtonLink";
import LinkList from "../../LinkList";
import List from "../../List";
import ListItem from "../../List/ListItem";
import NavigationBar from "../index";
import Text from "../../Text";
import TextLink from "../../TextLink";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => {
    const [actions, setActions] = React.useState([]);
    const addAction = action => {
      setActions([...actions, action]);
    };
    return (
      <Stack>
        <NavigationBar
          onHide={() => addAction("Hiding the menu")}
          onShow={() => addAction("Showing the menu")}
        >
          <Stack direction="row" align="center" justify="center">
            <ButtonLink href="https://orbit.kiwi">
              <img
                src="https://orbit.kiwi/files/2019/08/cropped-OrbitLogo-1.png"
                alt="Orbit by Kiwi.com"
                height="40px"
              />
            </ButtonLink>
            <LinkList direction="row">
              <TextLink type="secondary">Travel</TextLink>
              <TextLink type="secondary">Rooms</TextLink>
              <TextLink type="secondary">Careers</TextLink>
            </LinkList>
            <Stack inline>
              <LinkList direction="row">
                <TextLink type="secondary">English</TextLink>
                <TextLink type="secondary">Help</TextLink>
                <TextLink type="secondary">My account</TextLink>
              </LinkList>
            </Stack>
          </Stack>
        </NavigationBar>
        <Text>
          What has happened?{" "}
          <TextLink type="secondary" onClick={() => setActions([])}>
            Clear list
          </TextLink>
        </Text>
        {actions && (
          <List>
            {actions.map((action, i) => {
              // eslint-disable-next-line react/no-array-index-key
              return <ListItem key={i}>{action}</ListItem>;
            })}
          </List>
        )}
      </Stack>
    );
  },
  info: {
    title: "Callbacks",
    description:
      "In addition to <code>onMenuOpen</code> for handling menus, you can use <code>onHide</code> and <code>onShow</code> for when the menu scrolls out and in of the screen.",
  },
};
