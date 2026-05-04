import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { logout } from "@/providers/auth/authLogout";

const Profile = () => {
  return (
    <View>
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
