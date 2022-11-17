import { toast } from "react-hot-toast";

import type {
  createToast as createToastType,
  createToastPromise as createToastPromiseType,
  Props,
  Placement,
  Options,
  Toast,
} from "./types";
import ToastRoot from "./ToastRoot";

const createToast: createToastType = (content, options) => {
  toast(content, options);
};

const createToastPromise: createToastPromiseType = (content, options) =>
  toast.promise(content, options);

export { ToastRoot, createToast, createToastPromise };
export { Placement, Props, Toast, Options };
