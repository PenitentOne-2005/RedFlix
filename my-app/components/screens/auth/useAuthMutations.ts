import { useMemo } from "react";
import { UseFormReset } from "react-hook-form";
import { IAuthFormData } from "@/shared/types/auth.interface";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/services/auth/auth.service";

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
  const { setUser } = useAuth();

  const { mutate: login, isPending: isLoadingLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: IAuthFormData) =>
      AuthService.main("login", email, password),
    onSuccess(data) {
      reset();
      setUser(data.user);
    },
  });

  const { mutate: register, isPending: isLoadingRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: ({ email, password }: IAuthFormData) =>
      AuthService.main("reg", email, password),
    onSuccess(data) {
      reset();
      setUser(data.user);
    },
  });

  return useMemo(
    () => ({ login, register, isLoading: isLoadingLogin || isLoadingRegister }),
    [isLoadingLogin, isLoadingRegister],
  );
};
