import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

export const usersService = axios.create({
  headers: {
    "x-access-token": accessToken,
  },
  baseURL: import.meta.env.USERS_SERVICE_API,
});
