import React from "react";
import styled from "styled-components";
import { Text } from "@kiwicom/orbit-components";
import { set, sortBy } from "lodash";

import BooleanKnob from "./knobs/Boolean";
import SelectKnob from "./knobs/Select";
import TextKnob from "./knobs/Text";
import IconKnob from "./knobs/Icon";
import NumberKnob from "./knobs/Number";
import { ExampleKnob, Knob } from "../Example";

interface Props {
  exampleKnobs: ExampleKnob[];
  onChange: (val: Record<string, Knob>) => void;
}

const StyledWrapper = styled.div`
  padding: 20px;
`;

const StyledKnobsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  grid-gap: 20px;
  align-items: center;
`;

const Playground = ({ exampleKnobs, onChange }: Props) => {
  const [values, setValues] = React.useState(() => {
    const defaultVals = {};

    exampleKnobs.forEach(({ component, knobs }) => {
      knobs.forEach(({ defaultValue, name }) => {
        set(defaultVals, [component, name], defaultValue);
      });
    });

    return defaultVals;
  });

  const handleChangeKnob = ({
    component,
    name,
    value,
  }: {
    component: string;
    name: string;
    value: number | string | boolean | null;
  }) => {
    return setValues(prev => ({
      ...prev,
      [component]: {
        ...prev[component],
        [name]: value,
      },
    }));
  };

  React.useEffect(() => {
    if (onChange) onChange(values);
  }, [values, onChange]);

  return (
    <>
      {exampleKnobs.map(({ component, knobs }) => {
        return (
          <StyledWrapper key={component}>
            <Text weight="bold" spaceAfter="medium">
              {component}
            </Text>
            <StyledKnobsWrapper>
              {sortBy(knobs, ["type"]).map(({ type, name, options }) => {
                const baseKnobProps = {
                  name: `${component}-${name}`,
                  value: values[component][name],
                };

                if (type === "boolean") {
                  return (
                    <BooleanKnob
                      key={name}
                      checked={values[component][name]}
                      onChange={ev =>
                        handleChangeKnob({
                          component,
                          name,
                          value: ev.target.checked,
                        })
                      }
                      {...baseKnobProps}
                    />
                  );
                }

                if (type === "select") {
                  return (
                    <SelectKnob
                      key={name}
                      onChange={ev =>
                        handleChangeKnob({
                          component,
                          name,
                          value: ev.target.value,
                        })
                      }
                      options={options}
                      {...baseKnobProps}
                    />
                  );
                }

                if (type === "icon") {
                  return (
                    <IconKnob
                      key={name}
                      onChange={ev => {
                        const { value } = ev.target;
                        const val = value !== "null" ? `${value}-icon` : null;
                        handleChangeKnob({
                          component,
                          name,
                          value: val,
                        });
                      }}
                      {...baseKnobProps}
                    />
                  );
                }

                if (type === "number") {
                  return (
                    <NumberKnob
                      key={name}
                      onChange={ev =>
                        handleChangeKnob({
                          component,
                          name,
                          value: parseInt(ev.target.value, 10),
                        })
                      }
                      {...baseKnobProps}
                    />
                  );
                }

                return (
                  <TextKnob
                    key={name}
                    {...baseKnobProps}
                    onChange={ev => {
                      handleChangeKnob({
                        component,
                        name,
                        value: ev.target.value,
                      });
                    }}
                  />
                );
              })}
            </StyledKnobsWrapper>
          </StyledWrapper>
        );
      })}
    </>
  );
};
export default Playground;
