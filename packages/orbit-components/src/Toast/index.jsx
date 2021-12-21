// @flow
import { toast } from "react-hot-toast";

import ToastRoot from "./ToastRoot";

import type { createToastType, createToastPromiseType } from ".";

const createToast: createToastType = (content, options) => toast(content, { ...options });
const createToastPromise: createToastPromiseType = (content, options) =>
  toast.promise(content, { ...options });

export { ToastRoot, createToast, createToastPromise };
