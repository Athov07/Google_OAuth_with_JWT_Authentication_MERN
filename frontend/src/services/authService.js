import API from "./api";

/* =========================
   LOGOUT
========================= */
export const logoutAPI = async () => {
  return await API.post("/auth/logout");
};
