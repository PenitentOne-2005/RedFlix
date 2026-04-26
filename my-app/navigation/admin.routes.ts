import Admin from "@/components/screens/admin/home/Admin";
import { IRotues } from "./navigation.types";

export const adminRoutes: IRotues[] = [
  { name: "Admin", component: Admin, isAdmin: true },
];
