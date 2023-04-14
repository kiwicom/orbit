import { toast } from "react-hot-toast";

import type {
  createToast as createToastType,
  createToastPromise as createToastPromiseType,
} from "./types";
import ToastRoot from "./ToastRoot";

const createToast: createToastType = (content, options) => {
  toast(content, options);
};

const createToastPromise: createToastPromiseType = (content, messages, options?) =>
  toast.promise(content, messages, options);

export { ToastRoot, createToast, createToastPromise };
