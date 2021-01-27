import _ from "lodash";
import { Property } from "style-dictionary";

type GroupedProperties = {
  [key: string]: Property[];
};

export const groupByCategory = (properties: Property[]): GroupedProperties =>
  _.groupBy(properties, token => token.attributes.category);

export const groupByName = (properties: Property[]): GroupedProperties =>
  _.groupBy(properties, token => token.attributes.name);
