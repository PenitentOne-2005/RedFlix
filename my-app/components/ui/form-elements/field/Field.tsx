import { TextInput, View, Text } from "react-native";
import { Controller, FieldValues } from "react-hook-form";
import cn from "clsx";
import { IField } from "./field.interface";

const Field = <T extends FieldValues>({
  control,
  rules,
  className,
  name,
  ...rest
}: IField<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            className={cn(
              "bg-[#232323] w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5",
              error ? "border-red" : "border-transparent",
            )}
          >
            <TextInput
              autoCapitalize={"none"}
              onChangeText={onChange}
              onBlur={onBlur}
              value={(value || "").toString()}
              className="text-white text-base"
              {...rest}
            />
          </View>
          {error && <Text className="text-red">{error.message}</Text>}
        </>
      )}
    />
  );
};

export default Field;
