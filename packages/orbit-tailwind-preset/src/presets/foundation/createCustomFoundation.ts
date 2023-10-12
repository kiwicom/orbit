import type { defaultFoundation } from "@kiwicom/orbit-design-tokens";
import type { CustomFoundation } from "@kiwicom/orbit-design-tokens/src/js/defaultFoundation";
import mergeDeep from "@kiwicom/orbit-design-tokens/src/utils/mergeDeep";

export const createCustomFoundation = (
  foundation: typeof defaultFoundation,
  customFoundation: CustomFoundation,
): typeof defaultFoundation => {
  return mergeDeep(foundation, customFoundation);
};
