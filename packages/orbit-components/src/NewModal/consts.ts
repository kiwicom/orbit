export enum SIZES {
  EXTRASMALL = "extraSmall",
  SMALL = "small",
  NORMAL = "normal",
  LARGE = "large",
  EXTRALARGE = "extraLarge",
}

export const CLOSE_BUTTON_DATA_TEST = "ModalCloseButton";

export const maxWidthClasses: {
  [K in SIZES | "largeMobile" | "footer"]: K extends SIZES ? string : Record<SIZES, string>;
} = {
  [SIZES.EXTRASMALL]: "max-w-modal-extra-small",
  [SIZES.SMALL]: "max-w-modal-small",
  [SIZES.NORMAL]: "max-w-modal-normal",
  [SIZES.LARGE]: "max-w-modal-large",
  [SIZES.EXTRALARGE]: "max-w-modal-extra-large",
  largeMobile: {
    [SIZES.EXTRASMALL]: "lm:max-w-modal-extra-small",
    [SIZES.SMALL]: "lm:max-w-modal-small",
    [SIZES.NORMAL]: "lm:max-w-modal-normal",
    [SIZES.LARGE]: "lm:max-w-modal-large",
    [SIZES.EXTRALARGE]: "lm:max-w-modal-extra-large",
  },
  footer: {
    [SIZES.EXTRASMALL]: "lm:[&_.orbit-modal-footer]:max-w-modal-extra-small",
    [SIZES.SMALL]: "lm:[&_.orbit-modal-footer]:max-w-modal-small",
    [SIZES.NORMAL]: "lm:[&_.orbit-modal-footer]:max-w-modal-normal",
    [SIZES.LARGE]: "lm:[&_.orbit-modal-footer]:max-w-modal-large",
    [SIZES.EXTRALARGE]: "lm:[&_.orbit-modal-footer]:max-w-modal-extra-large",
  },
};

export const OFFSET = 40;
