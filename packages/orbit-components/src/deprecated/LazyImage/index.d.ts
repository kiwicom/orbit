// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

interface Image {
  "*"?: string;
  jpg?: string;
  webp?: string;
}

export interface Props {
  readonly placeholder?: Image;
  readonly original: Image;
  readonly name: Common.Translation;
}
export interface PictureProps {
  pictures: Image;
  name: React.ReactNode;
  loaded: boolean;
  onLoad?: () => void;
  lowRes?: boolean;
}

declare const LazyImage: React.FunctionComponent<Props>;
export { LazyImage, LazyImage as default };
