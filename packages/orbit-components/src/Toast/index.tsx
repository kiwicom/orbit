import { toast } from "react-hot-toast";

import {
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
