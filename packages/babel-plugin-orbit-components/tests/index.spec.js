const test = require("tape");
const babel = require("@babel/core");

const plugin = require("..");

const single = `
import { Alert } from "@kiwicom/orbit-components";
`;

const singleWant = `
import Alert from "@kiwicom/orbit-components/lib/Alert";
`;

const multi = `
import { Alert, Button } from "@kiwicom/orbit-components";
`;

const multiWant = `
import Button from "@kiwicom/orbit-components/lib/Button";
import Alert from "@kiwicom/orbit-components/lib/Alert";
`;

const fromLib = `
import Alert from "@kiwicom/orbit-components/lib/Alert";
`;

const nested = `
import { ModalSection } from "@kiwicom/orbit-components";
`;

const nestedWant = `
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection";
`;

const nestedMulti = `
import { Alert, ModalSection } from "@kiwicom/orbit-components";
`;

const nestedMultiWant = `
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection";
import Alert from "@kiwicom/orbit-components/lib/Alert";
`;

const icon = `
import { Passengers } from "@kiwicom/orbit-components/lib/icons";
`;

const iconWant = `
import Passengers from "@kiwicom/orbit-components/lib/icons/Passengers";
`;

const utils = `
import { mediaQueries } from "@kiwicom/orbit-components";
`;

const utilsWant = `
import mediaQueries from "@kiwicom/orbit-components/lib/utils/mediaQuery";
`;

const mixed = `
import { Alert, ModalSection, mediaQueries } from "@kiwicom/orbit-components";
import { Passengers, Invoice } from "@kiwicom/orbit-components/lib/icons";
`;

const mixedWant = `
import mediaQueries from "@kiwicom/orbit-components/lib/utils/mediaQuery";
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import Invoice from "@kiwicom/orbit-components/lib/icons/Invoice";
import Passengers from "@kiwicom/orbit-components/lib/icons/Passengers";
`;

test(t => {
  const resSingle = babel.transform(single, { plugins: [plugin] });
  t.equals(resSingle.code, singleWant.trim());

  const resMulti = babel.transform(multi, { plugins: [plugin] });
  t.equals(resMulti.code, multiWant.trim());

  const resFromLib = babel.transform(fromLib, { plugins: [plugin] });
  t.equals(resFromLib.code, resFromLib.code.trim());

  const resNested = babel.transform(nested, { plugins: [plugin] });
  t.equals(resNested.code, nestedWant.trim());

  const resNestedMulti = babel.transform(nestedMulti, { plugins: [plugin] });
  t.equals(resNestedMulti.code, nestedMultiWant.trim());

  const resIcon = babel.transform(icon, { plugins: [plugin] });
  t.equals(resIcon.code, iconWant.trim());

  const resUtils = babel.transform(utils, { plugins: [plugin] });
  t.equals(resUtils.code, utilsWant.trim());

  const resMixed = babel.transform(mixed, { plugins: [plugin] });
  t.equals(resMixed.code, mixedWant.trim());

  t.end();
});
