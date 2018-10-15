// @flow

import * as React from "react";
import renderer from "react-test-renderer";

import Text from "../index";
import { TYPE_OPTIONS, SIZE_OPTIONS, WEIGHT_OPTIONS, ALIGN_OPTIONS } from "../consts";

describe("Text", () => {
  const text = "Lorem ipsum";

  Object.keys(TYPE_OPTIONS).forEach(type => {
    Object.keys(SIZE_OPTIONS).forEach(size => {
      Object.keys(WEIGHT_OPTIONS).forEach(weight => {
        Object.keys(ALIGN_OPTIONS).forEach(alignment => {
          test(`${type}-${size}-${weight}-${alignment} should match the snapshot`, () => {
            expect(
              renderer
                .create(
                  <Text type={type} size={size} weight={weight} align={alignment}>
                    {text}
                  </Text>,
                )
                .toJSON(),
            ).toMatchSnapshot();
          });

          test(`${type}-${size}-${weight}-${alignment}-uppercase should match the snapshot`, () => {
            expect(
              renderer
                .create(
                  <Text type={type} size={size} weight={weight} align={alignment} uppercase>
                    {text}
                  </Text>,
                )
                .toJSON(),
            ).toMatchSnapshot();
          });

          test(`${type}-${size}-${weight}-${alignment}-italic should match the snapshot`, () => {
            expect(
              renderer
                .create(
                  <Text type={type} size={size} weight={weight} align={alignment} italic>
                    {text}
                  </Text>,
                )
                .toJSON(),
            ).toMatchSnapshot();
          });

          test(`${type}-${size}-${weight}-${alignment}-uppercase-italic should match the snapshot`, () => {
            expect(
              renderer
                .create(
                  <Text type={type} size={size} weight={weight} align={alignment} uppercase italic>
                    {text}
                  </Text>,
                )
                .toJSON(),
            ).toMatchSnapshot();
          });
        });
      });
    });
  });
});
