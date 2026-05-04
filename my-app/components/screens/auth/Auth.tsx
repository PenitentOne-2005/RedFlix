import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import { Button, Loader, DismissKeyboard } from "@/components/ui";
import { IAuthFormData } from "@/shared/types/auth.interface";
import AuthFields from "./AuthFields";
import { useAuthMutations } from "./useAuthMutations";
import {
  getAccessToken,
  getUserFromStorage,
} from "@/services/auth/auth.helper";

const Auth = () => {
  const [isReg, setIsReg] = useState(false);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: "onChange",
  });

  const { login, register, isLoading } = useAuthMutations(reset);

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    if (isReg) register(data);
    else login(data);
  };

  return (
    <DismissKeyboard>
      <View className="mx-2 items-center justify-center h-full">
        <View className="w-9/12">
          <Text className="text-center text-white text-4xl font-bold mb-2.5">
            {isReg ? "Register" : "Login"}
          </Text>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <AuthFields control={control} isPassRequired />

              <Button onPress={handleSubmit(onSubmit)} icon={"film"}>
                Go to watch
              </Button>

              <Pressable
                onPress={async () => {
                  const accessToken = await getAccessToken();
                  console.log(accessToken);
                }}
              >
                <Text className="text-white opacity-30 text-right text-base mt-3">
                  show accessToken
                </Text>
              </Pressable>
              <Pressable
                onPress={async () => {
                  const user = await getUserFromStorage();
                  console.log(user);
                }}
              >
                <Text className="text-white opacity-30 text-right text-base mt-3">
                  show user
                </Text>
              </Pressable>

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text className="text-white opacity-30 text-right text-base mt-3">
                  {isReg ? "Login" : "Register"}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </DismissKeyboard>
  );
};

export default Auth;