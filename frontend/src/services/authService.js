import API from "./api";

// Logout

export const logoutAPI = async () => {
  return await API.post("/auth/logout");
};
