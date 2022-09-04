import { toast } from "react-hot-toast";

import {
  createToast as createToastType,
  createToastPromise as createToastPromiseType,
} from "./index.d";
import ToastRoot from "./ToastRoot";

const createToast: typeof createToastType = (content, options) => {
  toast(content, options);
};

const createToastPromise: typeof createToastPromiseType = (content, options) =>
  toast.promise(content, options);

export { ToastRoot, createToast, createToastPromise };
