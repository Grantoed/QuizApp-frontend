import { FC, ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";
import { RegisterFormInterface } from "@/utils/interfaces/register-form.interface";
import { RegisterValuesInterface } from "@/utils/interfaces/register-form.interface";
import { registerSchema } from "../validations/register.validation";
import { register } from "@/api/users";
import styles from "@/styles/modules/global/register-form.module.scss";
import global from "@/styles/global.module.scss";

export const RegisterForm: FC<RegisterFormInterface> = ({
  handleOpenSignUp,
}): ReactElement => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    getValues,
    reset,
  } = useForm<RegisterValuesInterface>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = ({ username, email, password }: RegisterValuesInterface) => {
    console.log("Form submitted", { username, email, password });
    register({ username, email, password });
  };

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className={styles.field}>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.input}
            type="name"
            id="username"
            {...register("username")}
            placeholder="what's your name?"
          />
          {errors.username?.message && (
            <p className={styles.error}>{errors.username.message}</p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            {...register("email")}
            placeholder="example@mail.com"
          />
          {errors.email?.message && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            autoComplete="off"
            type="password"
            id="password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            className={styles.input}
            autoComplete="off"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className={styles.error}>{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className={styles.btnWrapper}>
          <button
            className={`${global.btnMain}`}
            disabled={isSubmitting || !isValid}
          >
            Sign up
          </button>
          <button className={`${global.btnAlt}`}>
            <FcGoogle className={styles.googleIcon} /> Sign up with Google
          </button>
        </div>
        <span className={styles.horizontalLine}></span>
        <p className={styles.text}>Already have an account?</p>
        <button
          className={`${global.btnMain}`}
          onClick={() => handleOpenSignUp(false)}
        >
          Log in instead
        </button>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};
