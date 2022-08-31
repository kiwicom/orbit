import { formatters, create, Delta } from "jsondiffpatch";
// import _, { Dictionary } from "lodash";

import { TrackingProp } from "./interfaces";

interface ComponentData {
  name: string;
  props: TrackingProp[];
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

export const mapDiff = (
  data: Record<string, ComponentData>,
  delta: Delta,
): Record<string, DiffOutputItem> | void => {
  if (!data || !delta) return undefined;

  const keys = Object.keys(delta);
  const result = {};

  keys.forEach(key => {
    if (data[key]) {
      const { name } = data[key];
      const quantity = delta[key].instances || delta[key].used;

      if (delta[key] && quantity) {
        const [before, after] = quantity;

        result[name] = {
          instances: { before, after },
          // TODO: add support for counting props
          // props: mapDiff(_.mapValues(_.keyBy(data[key].props, "name"), "used"), delta[key].props),
        };
      }
    }
  });

  return result;
};

const getDataDiff = (
  first: Record<string, ComponentData>,
  last: Record<string, ComponentData>,
): { diff: Record<string, DiffOutputItem>; annotated: string } => {
  const diffPatch = create({
    objectHash: (obj: { name: string }) => obj.name,
    arrays: {
      detectMove: false,
    },
  });

  const delta = diffPatch.diff(first, last);
  const diff = delta && mapDiff(first, delta);

  if (delta && diff)
    return {
      diff,
      annotated: formatters.annotated.format(delta, {}),
    };

  return {
    diff: {},
    annotated: "",
  };
};

export default getDataDiff;
