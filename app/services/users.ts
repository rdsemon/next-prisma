import api from "../lib/axios";

export const getAllUser = async () => {
  try {
    const response = await api.get("/users");
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getuserById = async (id: string) => {
  try {
    const response = await api.get(`/users/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id: string, name: string) => {
  try {
    const response = await api.patch(`/users/${id}`, { name });
    const userData = response.data;
    return userData;
  } catch (error) {
    console.log(error);
  }
};
