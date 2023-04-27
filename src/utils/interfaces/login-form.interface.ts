import { Dispatch, SetStateAction } from "react";

export interface LoginFormInterface {
  handleOpenSignUp: Dispatch<SetStateAction<boolean>>;
}

export interface LoginValuesInterface {
  email: string;
  password: string;
}
