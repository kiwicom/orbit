// @flow

import os from 'os';
import { transform as babelTransform } from '@babel/core';

expect.addSnapshotSerializer({
  print(serializerValue) {
    return Object.keys(serializerValue)
      .map(key => `~~~~~~~~~~ ${key.toUpperCase()} ~~~~~~~~~~\n${serializerValue[key]}`)
      .join(os.EOL);
  },
  test() {
    return true;
  },
});

function transform(input) {
  return babelTransform(input, {
    plugins: [require('..')],
    root: __dirname,
    rootMode: 'root',
  }).code;
}

test.each([
  ['import { Alert } from "@kiwicom/orbit-components";'], // single
  ['import { Alert, Button } from "@kiwicom/orbit-components";'], // multi
  ['import Alert from "@kiwicom/orbit-components/lib/Alert";'], // from lib (stays as is)
  ['import { ModalSection } from "@kiwicom/orbit-components";'], // nested
  ['import { Alert, ModalSection } from "@kiwicom/orbit-components";'], // nested multi
  ['import { Passengers } from "@kiwicom/orbit-components/lib/icons";'], // icon
  ['import { mediaQueries } from "@kiwicom/orbit-components";'], // utils
  [
    // mixed
    `import { Alert, ModalSection, mediaQueries } from "@kiwicom/orbit-components";
import { Passengers, Invoice } from "@kiwicom/orbit-components/lib/icons";`,
  ],
])('transform imports as expected %#', rawInput => {
  const input = rawInput.trim();
  expect({
    input,
    output: transform(input),
  }).toMatchSnapshot();
});
