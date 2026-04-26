import Home from "@/components/screens/home/Home";
import Auth from "@/components/screens/auth/Auth";
import { IRotues } from "./navigation.types";

export const userRoutes: IRotues[] = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Auth",
    component: Auth,
  },
];
