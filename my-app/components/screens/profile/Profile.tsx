import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { IAuthFormData } from "@/shared/types/auth.interface";
import { logout } from "@/providers/auth/authLogout";
import useProfile from "./useProfile";
import AuthFields from "../auth/AuthFields";
import { Button, Heading, Loader } from "@/components/ui";

const Profile = () => {
  const { handleSubmit, setValue, control } = useForm<IAuthFormData>({
    mode: "onChange",
  });

  const { isLoading, onSubmit } = useProfile(setValue);

  return (
    <View className="mt-20 px-10">
      <Heading title="Profile" />

      {isLoading ? (
        <Loader />
      ) : (
        <View className="mb-10">
          <AuthFields control={control} />

          <Button onPress={handleSubmit(onSubmit)} icon={"edit"}>
            Update profile
          </Button>
        </View>
      )}

      <Pressable
        onPress={logout}
        className="opacity-40 items-center flex-row justify-end"
      >
        <AntDesign name={"logout"} size={18} color="white" />
        <Text className="text-white text-lg ml-2">Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
