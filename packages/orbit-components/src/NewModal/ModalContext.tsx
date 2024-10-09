import * as React from "react";

export interface Props {
  readonly hasModalHeader?: boolean;
  readonly setHasModalHeader?: React.Dispatch<React.SetStateAction<boolean>>;
  readonly isModalHeaderSuppressed?: boolean;
  readonly setIsModalHeaderSuppressed?: React.Dispatch<React.SetStateAction<boolean>>;
  readonly hasModalSection?: boolean;
  readonly setHasModalSection?: () => void;
  readonly removeHasModalSection?: () => void;
}

export const ModalContext = React.createContext<Props>({
  setHasModalHeader: () => {},
  setIsModalHeaderSuppressed: () => {},
  setHasModalSection: () => {},
  removeHasModalSection: () => {},
  hasModalHeader: false,
  hasModalSection: false,
  isModalHeaderSuppressed: false,
});
