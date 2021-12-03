import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { Stack, Heading, Text } from "@kiwicom/orbit-components";
import { uniq, sortBy } from "lodash";
import styled from "styled-components";
import { Circle as CircleIcon } from "@kiwicom/orbit-components/icons";

const COLORS = [
  "#4cd137",
  "#44bd32",
  "#fbc531",
  "#e1b12c",
  "#9c88ff",
  "#8c7ae6",
  "#00a8ff",
  "#0097e6",
  "#e84118",
  "#c23616",
  "#273c75",
  "#192a56",
];

const StyledWrapper = styled.div`
  height: 500px;
  width: 100%;
`;

const UsageByCategory = ({ components }) => {
  const categories = uniq(components.map(({ category }) => category)).map(cat => ({
    name: cat,
    instances: 0,
  }));

  const splitted = sortBy(
    components.reduce((acc, cur) => {
      const categoryIdx = categories.findIndex(({ name }) => name === cur.category);
      if (acc[categoryIdx]) acc[categoryIdx].instances += 1;
      return acc;
    }, categories),
    ["instances"],
  ).map((el, idx) => ({ ...el, categoryId: idx }));

  const renderLegend = props => {
    const { payload } = props;
    return (
      <ul>
        {payload.reverse().map(({ value, color, payload: payloadItem }) => (
          <Stack as="li" key={payloadItem.name} spacing="XXSmall">
            <CircleIcon customColor={color} />
            <Text type="secondary">{value}</Text>
          </Stack>
        ))}
      </ul>
    );
  };

  const renderTooltip = props => {
    const { payload } = props;
    if (!payload[0]) return null;
    return (
      <Text weight="bold">
        {payload[0].name}:{payload[0].payload.instances}
      </Text>
    );
  };

  return (
    <Stack>
      <Heading type="title3">Usage by category</Heading>
      <StyledWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart height={500}>
            <Pie
              dataKey="categoryId"
              data={splitted}
              startAngle={0}
              cx="20%"
              cy="50%"
              endAngle={360}
              paddingAngle={5}
              innerRadius={60}
              outerRadius={80}
            >
              {splitted.map(({ name }, idx) => (
                <Cell key={`cell-${name}`} fill={COLORS[idx]} />
              ))}
            </Pie>
            <Tooltip content={renderTooltip} />
            <Legend
              layout="vertical"
              content={renderLegend}
              wrapperStyle={{ bottom: 0, left: 0 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </StyledWrapper>
    </Stack>
  );
};

export default UsageByCategory;
