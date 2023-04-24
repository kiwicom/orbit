import {
  foundationPreset as orbitFoundationPreset,
  componentsPreset as orbitComponentsPreset,
} from "./presets";

const PREFIX = "orbit-";

interface Options {
  /** default: `true` eg does not include the tailwind preflight */
  disablePreflight?: boolean;
  /** default: `false` */
  includeComponentTokens?: boolean;
}

export default function orbitPreset({
  disablePreflight = true,
  includeComponentTokens = false,
}: Options) {
  return {
    prefix: PREFIX,
    corePlugins: {
      preflight: !disablePreflight,
    },
    presets: [orbitFoundationPreset, includeComponentTokens && orbitComponentsPreset].filter(
      Boolean,
    ),
  };
}

export { orbitComponentsPreset, orbitFoundationPreset };
