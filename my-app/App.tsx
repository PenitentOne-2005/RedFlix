import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AuthProvider from "@/providers/auth/AuthProvider";
import Navigation from "@/navigation/Navigation";
import { Toast } from "./components/ui";
import "@/global.css";

export default function HomeScreen() {
  return (
    <>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar style="light" />
      <Toast />
    </>
  );
}
