import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import {
  EnumSecureStore,
  IAuthResponse,
  ITokens,
} from "@/shared/types/auth.interface";

export const getAccessToken = async () => {
  const accessToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokensStorage = async (data: ITokens) => {
  await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.accessToken);
  await setItemAsync(EnumSecureStore.REFRESH_TOKEN, data.refreshToken);
};

export const deleteTokensStorage = async () => {
  await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN);
  await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN);
  await deleteItemAsync(EnumSecureStore.USER);
};

export const getUserFromStorage = async () => {
  try {
    const data = await getItemAsync(EnumSecureStore.USER);

    return data ? JSON.parse(data) : null;
  } catch (_) {
    return null;
  }
};

export const saveToStorage = async (data: IAuthResponse) => {
  await saveTokensStorage(data);
  await setItemAsync(EnumSecureStore.USER, JSON.stringify(data.user));
};
