// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { POSITIONS, SIZE_OPTIONS, ALIGNS } from "./consts";
import Stack from "../Stack";
import Alert from "../Alert";
import Text from "../Text";
import TextLink from "../TextLink";
import List from "../List";
import ListItem from "../List/ListItem";
import Heading from "../Heading";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Tooltip from "./index";

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

const data = [
  {
    day: "1 June",
    price: 1,
  },
  {
    day: "2 June",
    price: 2,
  },
  {
    day: "3 June",
    price: 3,
  },
  {
    day: "4 June",
    price: 4,
  },
  {
    day: "5 June",
    price: 5,
  },
  {
    day: "6 June",
    price: 6,
  },
  {
    day: "7 June",
    price: 7,
  },
  {
    day: "8 June",
    price: 8,
  },
  {
    day: "9 June",
    price: 9,
  },
  {
    day: "10 June",
    price: 10,
  },
];

const App = () => {
  const [isActive, setActive] = React.useState(null);
  const [orderedData, setOrderedData] = React.useState(data);
  const onClickColumn = React.useCallback(
    key => () => {
      setActive(key);

      setOrderedData(state => {
        const dataCopy = state.slice();
        const selectedColumn = dataCopy.splice(key - 1, 1);
        console.dir(selectedColumn);
        console.dir(dataCopy);
        return [...selectedColumn, ...dataCopy];
      });
    },
    [],
  );
  return (
    <div>
      {orderedData.map(({ day, price }) => (
        <Tooltip content={`Price is ${price}`} preferredPosition="top" key={price}>
          <div
            style={{
              width: "80px",
              height: "100px",
              background: isActive === price ? "red" : "blue",
              color: "white",
              cursor: "pointer",
              margin: "4px",
              textAlign: "center",
            }}
            onClick={onClickColumn(price)}
            role="button"
          >
            <p>{day}</p>
            <p>{price}</p>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};
storiesOf("Tooltip", module).add(
  "Playground",
  () => {
    return <App />;
  },
  {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
);
