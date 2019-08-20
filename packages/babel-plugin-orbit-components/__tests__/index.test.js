// @flow

const babel = require('@babel/core');

const plugin = require('..');

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

function transform(input) {
  return babel.transform(input, {
    plugins: [plugin],
    root: __dirname,
    rootMode: 'root',
  });
}

it('works as exepcted', () => {
  const resSingle = transform(single);
  expect(resSingle.code).toEqual(singleWant.trim());

  const resMulti = transform(multi);
  expect(resMulti.code).toEqual(multiWant.trim());

  const resFromLib = transform(fromLib);
  expect(resFromLib.code).toEqual(resFromLib.code.trim());

  const resNested = transform(nested);
  expect(resNested.code).toEqual(nestedWant.trim());

  const resNestedMulti = transform(nestedMulti);
  expect(resNestedMulti.code).toEqual(nestedMultiWant.trim());

  const resIcon = transform(icon);
  expect(resIcon.code).toEqual(iconWant.trim());

  const resUtils = transform(utils);
  expect(resUtils.code).toEqual(utilsWant.trim());

  const resMixed = transform(mixed);
  expect(resMixed.code).toEqual(mixedWant.trim());
});
