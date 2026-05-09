import { Text } from "react-native";
import cn from "clsx";
import type { IHeading } from "./heading.interface";

const Heading = ({ className, title }: IHeading) => {
  return (
    <Text
      className={cn(
        "text-white text-opacity-80 font-semibold text-3xl",
        className,
      )}
      numberOfLines={1}
    >
      {title}
    </Text>
  );
};

export default Heading;
