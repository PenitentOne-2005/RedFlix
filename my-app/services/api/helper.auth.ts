import axios from "axios";
import { getItemAsync } from "expo-secure-store";
import { API_URL, getAuthUrl } from "@/config/api.config";
import { EnumSecureStore } from "@/shared/types/auth.interface";
import { saveToStorage } from "@/services/auth/auth.helper";

export const getNewTokens = async () => {
  try {
    const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN);

    const response = await axios.post(
      API_URL + getAuthUrl("/login/access-token"),
      { refreshToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (response.data.accessToken) await saveToStorage(response.data);
  } catch (error) {}
};
