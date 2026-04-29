import React from "react";
import { Pressable } from "react-native";
import { IMenuItem, TypeNavigate } from "./menu.interface";
import { getColor } from "@/config/colors.config";
import { Feather } from "@expo/vector-icons";

interface IMenuItemProps {
  item: IMenuItem;
  nav: TypeNavigate;
  currentRoute?: string;
}

const MenuItem = ({ currentRoute, nav, item }: IMenuItemProps) => {
  const isActive = currentRoute === item.path;

  return (
    <Pressable className="items-center w-[20%]" onPress={() => nav(item.path)}>
      <Feather
        name={item.iconName}
        size={26}
        color={isActive ? getColor("primary") : getColor("gray.400")}
      />
    </Pressable>
  );
};

export default MenuItem;
