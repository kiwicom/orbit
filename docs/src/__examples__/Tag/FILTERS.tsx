import React from "react";
import {
  Airplane,
  BaggageCabin,
  BaggageChecked30,
  Bus,
  FlightDirect,
  Train,
} from "@kiwicom/orbit-components/icons";
import {
  Tag,
  Badge,
  Card,
  Checkbox,
  ChoiceGroup,
  Popover,
  Radio,
  Separator,
  Stepper,
  StopoverArrow,
  Stack,
  Text,
} from "@kiwicom/orbit-components";

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
        <Stack direction="row" spacing="300">
          <Text>Amsterdam</Text>
          <FlightDirect ariaLabel="to" />
          <Text>Barcelona</Text>
        </Stack>
        <Stack direction="row" spacing="300">
          <Badge>Fri May 17</Badge>
          <Text>to</Text>
          <Badge>No return</Badge>
        </Stack>
        <Stack direction="row" spacing="300">
          <Popover
            renderInPortal={false}
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
            renderInPortal={false}
            content={
              <ChoiceGroup label="Stops" onChange={event => setStops(event.currentTarget.name)}>
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
            renderInPortal={false}
            content={
              <ChoiceGroup
                label="Transport"
                onChange={event => {
                  const { name } = event.currentTarget;
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
                <Airplane ariaLabel="Plane" />
                <Stack inline>
                  <Text>Up to 1</Text>
                  <BaggageCabin ariaLabel="cabin bag" />
                </Stack>
                <Stack inline>
                  <Text>Up to 2</Text>
                  <BaggageChecked30 ariaLabel="checked bags" />
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
                <Train ariaLabel="Train" />
                <Stack inline>
                  <Text>Up to 1</Text>
                  <BaggageCabin ariaLabel="cabin bag" />
                </Stack>
                <Stack inline>
                  <Text>Up to 1</Text>
                  <BaggageChecked30 ariaLabel="checked bag" />
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
                <Bus ariaLabel="Bus" />
                <Stack inline>
                  <Text>Up to 1</Text>
                  <BaggageCabin ariaLabel="cabin bag" />
                </Stack>
                <Stack inline>
                  <Text>Up to 1</Text>
                  <BaggageChecked30 ariaLabel="checked bag" />
                </Stack>
              </Stack>
            }
          />
        )}
      </Stack>
    );
  },
};
