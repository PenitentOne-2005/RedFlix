import { createContext, PropsWithChildren, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { IContext, TypeUserState } from "./auth.provider.interface";

export const AuthContext = createContext({} as IContext);

SplashScreen.preventAutoHideAsync();

const AuthProvider = ({ children }: PropsWithChildren<any>) => {
  const [user, setUser] = useState<TypeUserState>(null);

  useEffect(() => {
    let mounted = true;

    const checkAccessToken = async () => {
      try {
      } catch (error) {
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    checkAccessToken();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
