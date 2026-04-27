import { TypeFeatherIconNames } from "@/shared/types/icon.types";
import { PressableProps } from "react-native";

export interface IButton extends PressableProps {
  classNames?: string;
  icon?: TypeFeatherIconNames;
}
