import server, { token } from "./default";
import { RegisterValuesInterface } from "@/utils/interfaces/register-form.interface";
import { LoginValuesInterface } from "@/utils/interfaces/login-form.interface";

const URL_LIST = Object.freeze({
  register: "/users/register",
  logIn: "/users/login",
  logOut: "/users/logout",
  current: "/users",
  refresh: "/users/refresh",
  oauth: "/users/google",
});

export const signUp = async (body: RegisterValuesInterface) => {
  try {
    const { name, email, password } = body;
    const { data } = await server.post(URL_LIST.register, {
      name,
      email,
      password,
    });
    token.set(data.accessToken);
    localStorage.setItem("token", data.accessToken);
    window.location.href = "http://localhost:3000/";
    return data;
  } catch (e: any) {
    return { status: e.response.status, message: e.message };
  }
};

export const logIn = async (body: LoginValuesInterface) => {
  try {
    const { email, password } = body;
    const { data } = await server.post(URL_LIST.logIn, { email, password });
    token.set(data.accessToken);
    localStorage.setItem("token", data.accessToken);
    window.location.href = "http://localhost:3000/";
    return data;
  } catch (e: any) {
    return { status: e.response.status, message: e.message };
  }
};

export const logOut = async () => {
  try {
    await server.post(URL_LIST.logOut);
    token.unset();
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const current = async () => {
  try {
    const bearer = localStorage.getItem("token");
    if (bearer) {
      token.set(bearer);
    }
    const { data } = await server.get(URL_LIST.current, {
      withCredentials: true,
    });
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const refresh = async () => {
  try {
    const { data } = await server.get(URL_LIST.refresh, {
      withCredentials: true,
    });
    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const oauth = async () => {
  try {
    window.location.href = "http://localhost:8080/api/users/google";
  } catch (e: any) {
    throw new Error(e.message);
  }
};
