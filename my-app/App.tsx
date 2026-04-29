import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider from "@/providers/auth/AuthProvider";
import Navigation from "@/navigation/Navigation";
import "@/global.css";

export default function HomeScreen() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
