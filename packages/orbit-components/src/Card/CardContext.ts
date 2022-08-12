import * as React from "react";

interface Context {
  addSection: (arg: number) => void;
  isOpened: boolean;
  removeSection: (arg: number) => void;
  roundedBorders: Record<"top" | "bottom", boolean>;
  index: number;
  noBorderTop: boolean;
}

export const cardDefault: Context = {
  addSection: () => {},
  isOpened: false,
  removeSection: () => {},
  roundedBorders: {
    top: false,
    bottom: false,
  },
  index: 0,
  noBorderTop: false,
};

const context = React.createContext<Context>(cardDefault);
context.displayName = "CardOrbitContext";

export const useCard = (): Context => React.useContext(context);

export const { Consumer, Provider } = context;
