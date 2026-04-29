import { createContext, PropsWithChildren, useEffect, useState } from "react";
import SplashScreen from "expo-splash-screen";
import { IContext, TypeUserState } from "./auth.provider.interface";
import { IUser } from "@/shared/types/user.interface";

export const AuthContext = createContext({} as IContext);

SplashScreen.preventAutoHideAsync();

const AuthProvider = ({ children }: PropsWithChildren<any>) => {
  const [user, setUser] = useState<TypeUserState>({} as IUser);

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
