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

test(t => {
  const resSingle = babel.transform(single, { plugins: [plugin] });
  t.equals(resSingle.code, singleWant.trim());

  const resMulti = babel.transform(multi, { plugins: [plugin] });
  t.equals(resMulti.code, multiWant.trim());

  const resFromLib = babel.transform(fromLib, { plugins: [plugin] });
  t.equals(resFromLib.code, resFromLib.code.trim());

  t.end();
});
