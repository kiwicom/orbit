import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { Text } from "@kiwicom/orbit-components";
import { set } from "lodash";

import BooleanKnob from "./knobs/Boolean";
import SelectKnob from "./knobs/Select";
import TextKnob from "./knobs/Text";
import IconKnob from "./knobs/Icon";
import { ExampleKnob } from "../Example";

interface Props {
  exampleKnobs: ExampleKnob[];
  onChange: (val) => void;
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
  const defaultVals = {};

  exampleKnobs.forEach(({ component, knobs }) => {
    knobs.forEach(({ defaultValue, name }) => {
      set(defaultVals, [component, name], defaultValue);
    });
  });

  const [values, setValues] = React.useState(() => defaultVals);

  const changeKnob = ({
    component,
    name,
    value,
  }: {
    component: string;
    name: string;
    value: string | boolean;
  }) =>
    setValues(prev => ({
      ...prev,
      [component]: {
        ...prev[component],
        [name]: value,
      },
    }));

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
              {knobs.map(({ type, name, options }) => {
                const fieldName = `${component}-${name}`;
                if (type === "boolean") {
                  return (
                    <BooleanKnob
                      key={name}
                      checked={values[component][name]}
                      onChange={ev =>
                        changeKnob({
                          component,
                          name,
                          value: ev.target.checked,
                        })
                      }
                      name={fieldName}
                    />
                  );
                }

                if (type === "select") {
                  return (
                    <SelectKnob
                      key={name}
                      value={values[component][name]}
                      onChange={ev =>
                        changeKnob({
                          component,
                          name,
                          value: ev.target.value,
                        })
                      }
                      name={fieldName}
                      options={options}
                    />
                  );
                }

                if (type === "icon") {
                  return (
                    <IconKnob
                      key={name}
                      value={values[component][name]}
                      name={fieldName}
                      onChange={ev =>
                        changeKnob({
                          component,
                          name,
                          value: `${ev.target.value}-icon`,
                        })
                      }
                    />
                  );
                }

                return (
                  <TextKnob
                    key={name}
                    value={values[component][name]}
                    onChange={ev =>
                      changeKnob({
                        component,
                        name,
                        value: ev.target.value,
                      })
                    }
                    name={fieldName}
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
