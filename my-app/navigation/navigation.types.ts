import { ComponentType } from "react";

export type TypeRootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Profile: undefined;
  Trending: undefined;
  Favorites: undefined;
  Search: undefined;
} & TypeRootStackAdminList;

type TypeRootStackAdminList = {
  Admin: undefined;
};

export interface IRotues {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
  isAdmin?: boolean;
}
