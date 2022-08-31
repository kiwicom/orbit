import { formatters, create, Delta } from "jsondiffpatch";
import _ from "lodash";
import fp from "lodash/fp";

import { TrackingNode } from "./interfaces";

interface Value {
  name: string;
  used: number;
}

interface Prop extends Value {
  name: string;
  used: number;
  values?: Value[];
}
interface ComponentData {
  name: string;
  props: Prop[];
  instances: number;
}

interface DiffInstance {
  instances: {
    before: number;
    after: number;
  };
}

export interface DiffOutputItem extends DiffInstance {
  props: Record<string, DiffInstance>;
}

const collectProps = (props: Prop[]) =>
  props.reduce((acc, cur) => {
    const { name, used } = cur;
    if (!acc[name]) acc[name] = { ...cur };
    else
      acc[name] = {
        name,
        used: acc[name].used + used,
      };

    return acc;
  }, {});

const collectComponents = (components: ComponentData[]) =>
  components.reduce((acc, { name, props, instances }) => {
    if (!acc[name]) {
      acc[name] = {
        name,
        instances,
        props: props ? props.map(obj => _.omit(obj, ["values"])) : [],
      };
    } else {
      acc[name] = {
        name,
        instances: acc[name].instances + instances,
        props: Object.values(
          collectProps([...acc[name].props, ...props].map((obj: Prop) => _.omit(obj, ["values"]))),
        ),
      };
    }

    return acc;
  }, {});

const mapData = (data: TrackingNode[]): ComponentData[] =>
  fp.compose(
    fp.sortBy("name"),
    fp.values,
    collectComponents,
    fp.map(({ name, props, instances }) => ({ name, props, instances })),
    fp.flatten,
    fp.map(fp.get(["trackedData"])),
  )(data);

export const mapDiff = (
  data: ComponentData[],
  diff: Delta,
): Record<string, DiffOutputItem> | void => {
  if (!data || !diff) return undefined;

  const keys = Object.keys(diff);
  const result = {};

  keys.forEach(key => {
    if (data[key]) {
      const { name } = data[key];
      const quantity = diff[key].instances || diff[key].used;

      if (diff[key] && quantity) {
        const [before, after] = quantity;

        result[name] = {
          instances: { before, after },
          props: mapDiff(data[key].props, diff[key].props),
        };
      }
    }
  });

  return result;
};

const getDataDiff = (
  first: TrackingNode[],
  last: TrackingNode[],
): { diff: Record<string, DiffOutputItem>; annotated: string } | void => {
  if (first && last) {
    const dataFirst = mapData(first);
    const dataLast = mapData(last);

    const diffPatch = create({
      objectHash: (obj: { name: string }) => obj.name,
    });

    const delta = diffPatch.diff(dataFirst, dataLast);
    const diff = delta && mapDiff(dataFirst, delta);

    if (delta && diff)
      return {
        diff,
        annotated: formatters.annotated.format(delta, {}),
      };

    return undefined;
  }

  return undefined;
};

export default getDataDiff;
