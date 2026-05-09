import { IUser } from "@/shared/types/user.interface";
import { request } from "./api/request.api";
import { getUsersUrl } from "@/config/api.config";
import { IAuthFormData } from "@/shared/types/auth.interface";

export const UserService = {
  async getAll(searchTerm?: string) {
    return request<IUser[]>({
      url: getUsersUrl(""),
      method: "GET",
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });
  },

  async getProfile() {
    return request<IUser>({
      url: getUsersUrl("/profile"),
      method: "GET",
    });
  },

  async getById(_id: string) {
    return request<IUser>({
      url: getUsersUrl(`/${_id}`),
      method: "GET",
    });
  },

  async update(_id: string, data: IAuthFormData) {
    return request<string>({
      url: getUsersUrl(`/${_id}`),
      method: "PUT",
      data,
    });
  },

  async updateProfile(data: IAuthFormData) {
    return request<IUser>({
      url: getUsersUrl(`/profile`),
      method: "PUT",
      data,
    });
  },

  async deleteUser(_id: string) {
    return request<string>({
      url: getUsersUrl(`/${_id}`),
      method: "DELETE",
    });
  },
};
