import Home from "@/components/screens/home/Home";
import Search from "@/components/screens/search/Search";
import Trending from "@/components/screens/trending/Trending";
import Profile from "@/components/screens/profile/Profile";
import Favorites from "@/components/screens/favorites/Favorites";
import { IRotues } from "./navigation.types";
import { adminRoutes } from "./admin.routes";

export const userRoutes: IRotues[] = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Search",
    component: Search,
  },
  {
    name: "Trending",
    component: Trending,
  },
  {
    name: "Profile",
    component: Profile,
  },
  {
    name: "Favorites",
    component: Favorites,
  },
];

export const routes = [...userRoutes, ...adminRoutes];
