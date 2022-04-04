import { formatters, create, Delta } from "jsondiffpatch";
import fs from "fs-extra";
import path from "path";
import _ from "lodash";
import fp from "lodash/fp";

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

const DATA_DIR = path.resolve(path.join(__dirname, "../../data/tracking"));
const readFile = (file: string) => fs.readFileSync(path.join(DATA_DIR, file), "utf-8");

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
      acc[name] = { name, instances, props: props.map(obj => _.omit(obj, ["values"])) };
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

const mapData = (file: string) =>
  fp.compose(
    fp.sortBy("name"),
    fp.values,
    collectComponents,
    fp.map(({ name, props, instances }) => ({ name, props, instances })),
    fp.flatten,
    fp.map(fp.get(["trackedData"])),
    JSON.parse,
  )(readFile(file));

export const mapDiff = (
  data: ComponentData[],
  diff: Delta,
): Record<string, DiffOutputItem> | null => {
  if (!data || !diff) return null;

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

const getDataDiff = async () => {
  const data = await fs.readdir(DATA_DIR);

  if (data.length > 0) {
    const first = _.head(data);
    const last = _.last(data);

    if (first && last) {
      const dataFirst = mapData(first);
      const dataLast = mapData(last);

      const diffPatch = create({
        objectHash: obj => obj.name,
      });

      const delta = diffPatch.diff(dataFirst, dataLast);

      if (delta)
        return {
          diff: mapDiff(dataLast, delta),
          annotated: formatters.annotated.format(delta, {}),
        };

      return null;
    }
  }

  return null;
};

export default getDataDiff;
