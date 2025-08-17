// import { api, getUser } from "../api";

// export const setToken = (token) => {
//   localStorage.setItem("token", token);
// };

// export const getToken = () => {
//   return localStorage.getItem("token");
// };

// export const logout = () => {
//   localStorage.removeItem("token");
// };

// export { getUser };

import { getUser } from "../api";

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};

export { getUser };
