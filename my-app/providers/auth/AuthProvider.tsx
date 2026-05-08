import { createContext, PropsWithChildren, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { IContext, TypeUserState } from "./auth.provider.interface";
import {
  getAccessToken,
  getUserFromStorage,
} from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.service";
import { setLogoutHandler } from "./authLogout";

export const AuthContext = createContext({} as IContext);

SplashScreen.preventAutoHideAsync();

const AuthProvider = ({ children }: PropsWithChildren<any>) => {
  const [user, setUser] = useState<TypeUserState>(null);

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  useEffect(() => {
    setLogoutHandler(logout);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const checkAccessToken = async () => {
      try {
        const accessToken = await getAccessToken();

        if (accessToken) {
          const user = await getUserFromStorage();

          if (isMounted) {
            setUser(user);
          }
        }
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    checkAccessToken();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
