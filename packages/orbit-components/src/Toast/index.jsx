// @flow
import { toast } from "react-hot-toast";

import ToastProvider from "./ToastProvider";

import type { createToastType, createToastPromiseType } from ".";

const createToast: createToastType = (content, options) => toast(content, { ...options });
const createToastPromise: createToastPromiseType = (content, options) =>
  toast.promise(content, { ...options });

export default ToastProvider;
export { createToast, createToastPromise };
