// @flow
import { toast } from "react-hot-toast";

import ToastProvider from "./ToastProvider";

import type { createToastType, createToastPromiseType } from ".";

const createToast: createToastType = (content, { icon }) => toast(content, { icon });
const createToastPromise: createToastPromiseType = (content, { icon, loading, error, success }) =>
  toast.promise(content, { icon, loading, error, success });

export default ToastProvider;
export { createToast, createToastPromise };
