import { PropsWithChildren } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from "react-native";

const DismissKeyboard = ({
  children,
  ...rest
}: PropsWithChildren<ViewProps>) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }} {...rest}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
