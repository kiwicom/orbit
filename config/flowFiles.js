// @flow
import path from "path";
import fs from "fs";

import { NAMES } from "../src/Illustration/consts";

const ILLUSTRATION_PATH = path.join(__dirname, "..", "src", "Illustration");

const FLOW_TEMPLATE = `// @flow
/*
  DOCUMENTATION: https://orbit.kiwi/components/illustration/
*/
import type { Globals } from "../common/common.js.flow";
import type { spaceAfter } from "../common/getSpacingToken/index";

type Name =${NAMES.map(IllustrationName => `\n  | "${IllustrationName}"`).join("")};

export type Props = {|
  +size?: "small" | "medium",
  +name: Name,
  ...Globals,
  ...spaceAfter,
|};

declare export default React$ComponentType<Props>;
`;

fs.writeFileSync(path.join(ILLUSTRATION_PATH, "index.js.flow"), FLOW_TEMPLATE);
