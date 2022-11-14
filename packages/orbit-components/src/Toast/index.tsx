import { toast } from "react-hot-toast";

import {
  Props,
  Placement,
  Options,
  Toast,
  createToast as createToastType,
  createToastPromise as createToastPromiseType,
} from "./types";
import ToastRoot from "./ToastRoot";

const createToast: createToastType = (content, options) => {
  toast(content, options);
};

const createToastPromise: createToastPromiseType = (content, options) =>
  toast.promise(content, options);

export { ToastRoot, createToast, createToastPromise };
export { Placement, Props, Toast, Options };
