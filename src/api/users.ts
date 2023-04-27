import server, { token } from "./default";
import { RegisterValuesInterface } from "@/utils/interfaces/register-form.interface";
import { LoginValuesInterface } from "@/utils/interfaces/login-form.interface";

const URL_LIST = Object.freeze({
  register: "/users/register",
  logIn: "/users/login",
  logOut: "/users/logout",
  current: "/users",
});

export const register = async (body: RegisterValuesInterface) => {
  try {
    const { data } = await server.post(URL_LIST.register, body);
    token.set(data.token);

    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const logIn = async (body: LoginValuesInterface) => {
  try {
    const { data } = await server.post(URL_LIST.logIn, body);
    token.set(data.token);

    return data;
  } catch (e: any) {
    throw new Error(e.message);
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
    const { data } = await server.get(URL_LIST.current);
    return data;
  } catch (error) {
    throw error;
  }
};
