// @noflow
const jsonDiff = require("jsondiffpatch");
const fs = require("fs-extra");
const path = require("path");
const _ = require("lodash");
const fp = require("lodash/fp");

const DATA_DIR = path.resolve(path.join(__dirname, "../../data/tracking"));
const readFile = file => fs.readFileSync(path.join(DATA_DIR, file), "utf-8");

const collectProps = props =>
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

const collectComponents = components =>
  components.reduce((acc, { name, props, instances }) => {
    if (!acc[name]) {
      acc[name] = { name, instances, props: props.map(obj => _.omit(obj, ["values"])) };
    } else {
      acc[name] = {
        name,
        instances: acc[name].instances + instances,
        props: Object.values(
          collectProps([...acc[name].props, ...props].map(obj => _.omit(obj, ["values"]))),
        ),
      };
    }

    return acc;
  }, {});

const mapData = file =>
  fp.compose(
    fp.sortBy("name"),
    fp.values,
    collectComponents,
    fp.map(({ name, props, instances }) => ({ name, props, instances })),
    fp.flatten,
    fp.map(fp.get(["trackedData"])),
    JSON.parse,
  )(readFile(file));

const getDataDiff = async () => {
  const data = await fs.readdir(DATA_DIR);

  if (data.length > 0) {
    const first = _.head(data);
    const last = _.last(data);

    const dataFirst = mapData(first);
    const dataLast = mapData(last);

    const diffPatch = jsonDiff.create({
      objectHash: obj => obj.name,
    });

    const delta = diffPatch.diff(dataFirst, dataLast);

    return jsonDiff.formatters.annotated.format(delta);
  }

  return null;
};

module.exports = {
  getDataDiff,
};
