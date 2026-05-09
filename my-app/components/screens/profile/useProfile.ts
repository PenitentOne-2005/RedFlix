import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { IAuthFormData } from "@/shared/types/auth.interface";
import Toast from "react-native-toast-message";
import { UserService } from "@/services/user.service";

const useProfile = (setValue: UseFormSetValue<IAuthFormData>) => {
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: UserService.getProfile,
  });

  useEffect(() => {
    if (data?.email) {
      setValue("email", data.email);
    }
  }, [data, setValue]);

  const { mutateAsync } = useMutation({
    mutationKey: ["update profile"],
    mutationFn: (data: IAuthFormData) => UserService.updateProfile(data),
    onSuccess() {
      Toast.show({
        text1: "Update profile",
        text2: "update was successful",
        type: "success",
      });
    },
  });

  const onSubmit: SubmitHandler<IAuthFormData> = async (
    data: IAuthFormData,
  ) => {
    await mutateAsync(data);
  };

  return { onSubmit, isLoading };
};

export default useProfile;
