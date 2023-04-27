import axios from "axios";

const DEV_URL = "localhost:8080/api";

const server = axios.create({
  baseURL: DEV_URL,
});

export const token = {
  set(token: string) {
    server.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    server.defaults.headers.common.Authorization = "";
  },
};

export default server;
