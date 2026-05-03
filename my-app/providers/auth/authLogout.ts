let logoutHandler: null | (() => Promise<void>) = null;

export const setLogoutHandler = (fn: () => Promise<void>) => {
  logoutHandler = fn;
};

export const logout = async () => {
  if (logoutHandler) {
    await logoutHandler();
  }
};
