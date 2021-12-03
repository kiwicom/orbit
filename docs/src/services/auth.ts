import { navigate } from "@reach/router";

import { save, load } from "../utils/storage";

export const isBrowser = typeof window !== `undefined`;

const getUser = () => (load("googleUser") ? JSON.parse(String(load("googleUser"))) : {});

const setUser = user => save("googleUser", JSON.stringify(user));

export const handleLogin = user => {
  if (!isBrowser) return;

  if (user) {
    setUser(user);
    navigate(`/dashboard`);
  }
};

export const isLoggedIn = () => {
  if (!isBrowser) return false;

  const user = getUser();

  return !!user.profileObj && !!user.profileObj.email;
};

export const getCurrentUser = () => isBrowser && getUser();

export const logout = () => {
  if (!isBrowser) return;

  setUser({});
  navigate(`/dashboard/login/`);
};
