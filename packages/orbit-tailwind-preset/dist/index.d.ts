import { Config } from 'tailwindcss';

declare const config: Config;

interface Options {
    /** default: true e.g. does not include default normalize styles */
    disablePreflight?: boolean;
    /** default: [] */
    content?: Config["content"];
}
declare const cfg: (options?: Options) => Config;

declare const transformedFoundation: {
    palette: Record<string, string>;
    breakpoint: Record<string, string>;
    size: Record<string, string>;
    space: Record<string, string>;
    "border-radius": Record<string, string>;
    "font-family": Record<string, string>;
    "font-size": Record<string, string>;
    "line-height": Record<string, string>;
    "font-weight": Record<string, string>;
};

export { config as default, transformedFoundation as defaultFoundation, cfg as orbitComponentsPreset };
