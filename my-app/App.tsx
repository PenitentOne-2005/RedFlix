import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/providers/auth/AuthProvider";
import Navigation from "@/navigation/Navigation";
import { Toast } from "./components/ui";
import "@/global.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function HomeScreen() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar style="light" />
      <Toast />
    </QueryClientProvider>
  );
}
