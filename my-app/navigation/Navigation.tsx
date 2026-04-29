import { useState } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { routes } from "./user.routes";
import { useAuth } from "@/hooks/useAuth";
import Auth from "@/components/screens/auth/Auth";
import { BottomMenu } from "@/components/ui";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation = () => {
  const { user } = useAuth();
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(
    undefined,
  );
  const navRef = useNavigationContainerRef();

  const filteredRoutes = routes.filter(
    (route) => user?.isAdmin || !route.isAdmin,
  );

  return (
    <>
      <NavigationContainer
        ref={navRef}
        onReady={() => {
          setCurrentRoute(navRef.getCurrentRoute()?.name);
        }}
        onStateChange={() => {
          setCurrentRoute(navRef.getCurrentRoute()?.name);
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "black" },
          }}
        >
          {user ? (
            filteredRoutes.map((route) => (
              <Stack.Screen key={route.name} {...route} />
            ))
          ) : (
            <Stack.Screen name="Auth" component={Auth} />
          )}
        </Stack.Navigator>
      </NavigationContainer>

      {user && currentRoute && (
        <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
      )}
    </>
  );
};

export default Navigation;
