import _ from "lodash";
import { DesignToken } from "style-dictionary";

export const groupByAttribute = (
  properties: DesignToken[],
  name: "namespace" | "object" | "variant" | "subVariant",
): Record<string, DesignToken[]> => _.groupBy(properties, token => token.attributes[name]);
