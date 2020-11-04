// @flow
import * as React from "react";

import Badge from "../../Badge";
import Card from "../../Card";
import Checkbox from "../../Checkbox";
import ChoiceGroup from "../../ChoiceGroup";
import Popover from "../../Popover";
import Radio from "../../Radio";
import Separator from "../../Separator";
import Stack from "../../Stack";
import Stepper from "../../Stepper";
import StopoverArrow from "../../StopoverArrow";
import Tag from "../index";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: () => {
    const [cabinBags, setCabinBags] = React.useState(0);
    const [checkedBags, setCheckedBags] = React.useState(0);
    const [stops, setStops] = React.useState("any");
    const [checked, setChecked] = React.useState({ plane: true, train: true, bus: true });

    const isBagsFiltered = cabinBags > 0 || checkedBags > 0;
    const isStopsFiltered = stops !== "any";
    const isTransportFiltered =
      checked.plane === false || checked.train === false || checked.bus === false;
    return (
      <Stack>
        <Stack direction="row" spacing="small">
          <Text>Amsterdam</Text>
          <Icons.FlightDirect ariaLabel="to" />
          <Text>Barcelona</Text>
        </Stack>
        <Stack direction="row" spacing="small">
          <Badge>Fri May 17</Badge>
          <Text>to</Text>
          <Badge>No return</Badge>
        </Stack>
        <Stack direction="row" spacing="small">
          <Popover
            content={
              <Stack>
                <Stack justify="center" grow>
                  <Stack>
                    <Text>Cabin baggage</Text>
                  </Stack>
                  <Stepper
                    defaultValue={cabinBags}
                    maxValue={1}
                    minValue={0}
                    onChange={value => setCabinBags(value)}
                  />
                </Stack>
                <Stack align="center">
                  <Stack>
                    <Text>Checked baggage</Text>
                  </Stack>
                  <Stepper
                    defaultValue={checkedBags}
                    maxValue={2}
                    minValue={0}
                    onChange={value => setCheckedBags(value)}
                  />
                </Stack>
              </Stack>
            }
          >
            <Tag
              selected={isBagsFiltered}
              onRemove={
                isBagsFiltered
                  ? () => {
                      setCabinBags(0);
                      setCheckedBags(0);
                    }
                  : undefined
              }
            >
              Bags
            </Tag>
          </Popover>
          <Popover
            content={
              <ChoiceGroup label="Stops" onChange={event => setStops(event.target.name)}>
                <Radio name="non" label="Any" checked={stops === "any" || false} />
                <Radio name="non" label="Nonstop" checked={stops === "non" || false} />
                <Radio name="1stop" label="Up to 1 stop" checked={stops === "1stop" || false} />
                <Radio name="2stop" label="Up to 2 stops" checked={stops === "2stop" || false} />
              </ChoiceGroup>
            }
          >
            <Tag
              selected={isStopsFiltered}
              onRemove={
                isStopsFiltered
                  ? () => {
                      setStops("any");
                    }
                  : undefined
              }
            >
              Stops
            </Tag>
          </Popover>
          <Popover
            content={
              <ChoiceGroup
                label="Transport"
                onChange={event => {
                  const { name } = event.target;
                  setChecked(prevState => ({ ...prevState, [name]: !checked[name] }));
                }}
              >
                <Checkbox name="plane" label="Planes" checked={checked.plane} />
                <Checkbox name="train" label="Trains" checked={checked.train} />
                <Checkbox name="bus" label="Buses" checked={checked.bus} />
              </ChoiceGroup>
            }
          >
            <Tag
              selected={isTransportFiltered}
              onRemove={
                isTransportFiltered
                  ? () => {
                      setChecked({ plane: true, train: true, bus: true });
                    }
                  : undefined
              }
            >
              Transport
            </Tag>
          </Popover>
        </Stack>
        <Separator />
        {checked.plane && (
          <Card
            title={
              <Stack flex align="center">
                <Text>Excellent flight</Text>
                <StopoverArrow stops="0" />
                <Icons.Airplane ariaLabel="Plane" />
                <Stack inline>
                  <Text>Up to 1</Text>
                  <Icons.BaggageCabin ariaLabel="cabin bag" />
                </Stack>
                <Stack inline>
                  <Text>Up to 2</Text>
                  <Icons.BaggageChecked ariaLabel="checked bags" />
                </Stack>
              </Stack>
            }
          />
        )}
        {checked.train && stops !== "direct" && checkedBags <= 1 && (
          <Card
            title={
              <Stack flex align="center">
                <Text>Awesome train ride</Text>
                <StopoverArrow stops="1" />
                <Icons.Train ariaLabel="Train" />
                <Stack inline>
                  <Text>Up to 1</Text>
                  <Icons.BaggageCabin ariaLabel="cabin bag" />
                </Stack>
                <Stack inline>
                  <Text>Up to 1</Text>
                  <Icons.BaggageChecked ariaLabel="checked bag" />
                </Stack>
              </Stack>
            }
          />
        )}
        {checked.bus && stops !== "direct" && stops !== "1stop" && checkedBags <= 1 && (
          <Card
            title={
              <Stack flex align="center">
                <Text>Smooth bus ride</Text>
                <StopoverArrow stops="2" />
                <Icons.Bus ariaLabel="Bus" />
                <Stack inline>
                  <Text>Up to 1</Text>
                  <Icons.BaggageCabin ariaLabel="cabin bag" />
                </Stack>
                <Stack inline>
                  <Text>Up to 1</Text>
                  <Icons.BaggageChecked ariaLabel="checked bag" />
                </Stack>
              </Stack>
            }
          />
        )}
      </Stack>
    );
  },
  info: {
    title: "Filters",
    description: "Use tags to show categories of filters that can and/or have been applied.",
  },
};
