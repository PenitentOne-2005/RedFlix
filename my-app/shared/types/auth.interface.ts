import { IUser } from "./user.interface";

export interface IAuthFormData extends Pick<IUser, "email" | "password"> {}

export enum EnumSecureStore {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
  USER = "user",
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}
