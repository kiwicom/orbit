import _ from "lodash";
import { Property } from "style-dictionary";

type GroupedProperties = {
  [key: string]: Property[];
};

export const groupByAttribute = (
  properties: Property[],
  name: "namespace" | "object" | "variant" | "subVariant",
): GroupedProperties => _.groupBy(properties, token => token.attributes[name]);

