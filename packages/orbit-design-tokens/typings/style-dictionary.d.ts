/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "style-dictionary" {
  type BoxShadow = {
    x: number | string;
    y: number | string;
    blur: number | string;
    spread: number | string;
    color: string;
    opacity: number;
    inset?: boolean;
  };
  export type Value = string | number;
  export type BasicProperties<V = Value> = {
    type: string;
    value: V;
    internal?: boolean;
  };
  export type Attributes = {
    [attribute: string]: Attributes | Array<Attributes> | string | number | boolean | undefined;
  };
  export type Property = BasicProperties & {
    original: BasicProperties;
    name: string;
    attributes: Attributes;
    category?: string;
    "box-shadow"?: Array<BoxShadow> | BoxShadow;
    comment?: string;
    opacity?: number;
    deprecated?: boolean;
    "deprecated-replace"?: BasicProperties<
      BasicProperties & {
        name: string;
      }
    >;
    "deprecated-version"?: string;
    path: string[];
  };

  export type Platform = {
    preset?: string;
    buildPath: string;
    transformGroup?: string;
    transforms?: string[];
    actions?: string[];
    files: Array<{
      destination: string;
      format: string;
      filter?: any;
      options?: any;
    }>;
  };

  export type Config = {
    source: string[];
    platforms: Record<string, Platform>;
  };

  export type InjectedTransformer = {
    type: "name" | "attribute" | "value";
    transformer: (prop: { path: string; name: string }, options: any) => string;
  };

  type InjectedConfig = {
    buildPath: string;
    transformGroup?: string;
    actions: Array<null | undefined | string>;
    transforms: InjectedTransformer[];
    files: Array<{
      destination: string;
      format: any;
      options?: any;
    }>;
  };

  const StyleDictionaryApi: {
    registerFormat: (config: {
      name: string;
      formatter: (
        this: { context: any; options: any },
        dictionary: any,
        config: InjectedConfig,
      ) => string;
    }) => void;
    registerTransform: (config: {
      name: string;
      type: "name" | "attribute" | "value";
      matcher?: (prop: Property) => boolean;
      transformer: (prop: Property, config: InjectedConfig) => string | void;
    }) => void;
    registerTransformGroup: (config: { name: string; transforms: string[] }) => void;
    registerAction: (config: {
      name: string;
      do: (dictionary: any, config: InjectedConfig) => void;
      undo?: (dictionary: any, config: InjectedConfig) => void;
    }) => void;
    registerFilter: (config: { name: string; matcher: (prop: Property) => boolean }) => void;
    extend: (
      config: Config,
    ) => {
      buildPlatform: (platform: string) => void;
      buildAllPlatforms: () => void;
      properties: Record<string, Property>;
    };
  };
  export type StyleDictionary = typeof StyleDictionaryApi;
  export default StyleDictionaryApi;
}
