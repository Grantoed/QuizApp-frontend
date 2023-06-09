import { Dispatch, SetStateAction } from "react";

export interface RegisterFormInterface {
  handleOpenSignUp: Dispatch<SetStateAction<boolean>>;
}

export interface RegisterValuesInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
