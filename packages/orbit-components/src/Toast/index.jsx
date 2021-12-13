// @flow
import { toast } from "react-hot-toast";

import ToastInit from "./ToastInit";

import type { createToastType, createToastPromiseType } from ".";

const createToast: createToastType = (content, { icon }) => toast(content, { icon });
const createToastPromise: createToastPromiseType = (content, { icon, loading, error, success }) =>
  toast.promise(content, { icon, loading, error, success });

export default ToastInit;
export { createToast, createToastPromise };
