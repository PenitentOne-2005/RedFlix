import { RouteProp, useRoute } from "@react-navigation/native";
import { TypeRootStackParamList } from "@/navigation/navigation.types";

export const useTypedRoutes = () =>
  useRoute<RouteProp<TypeRootStackParamList>>();
