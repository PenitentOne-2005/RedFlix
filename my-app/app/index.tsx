import Navigation from "@/navigation/Navigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "@/global.css";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
