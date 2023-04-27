import { FC, ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";
import { LoginFormInterface } from "@/utils/interfaces/login-form.interface";
import { LoginValuesInterface } from "@/utils/interfaces/login-form.interface";
import { loginSchema } from "../validations/login.validation";
import { logIn } from "@/api/users";
import styles from "@/styles/modules/global/register-form.module.scss";
import global from "@/styles/global.module.scss";

export const LogInForm: FC<LoginFormInterface> = ({
  handleOpenSignUp,
}): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    reset,
    setError,
  } = useForm<LoginValuesInterface>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: LoginValuesInterface) => {
    const r = await logIn(data);
    if (r.status === 401) {
      setError("root", {
        type: "manual",
        message: "Incorrect email or password",
      });
    }
  };

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className={styles.field}>
          <label className={styles.label} htmlFor="login-email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            id="login-email"
            {...register("email")}
            placeholder="example@mail.com"
          />
          {errors.email?.message && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="login-password">
            Password
          </label>
          <input
            className={styles.input}
            autoComplete="off"
            type="password"
            id="login-password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
          {errors.root?.message && (
            <p className={styles.error}>{errors.root.message}</p>
          )}
        </div>
        <div className={styles.btnWrapper}>
          <button
            className={`${global.btnMain}`}
            disabled={isSubmitting || !isValid}
          >
            Log in
          </button>
          <button className={`${global.btnAlt}`}>
            <FcGoogle className={styles.googleIcon} /> Log in with Google
          </button>
        </div>
        <span className={styles.horizontalLine}></span>
        <p className={styles.text}>Not registered yet?</p>
        <button
          className={`${global.btnMain}`}
          onClick={() => handleOpenSignUp(true)}
        >
          Sign up here
        </button>
      </form>
    </div>
  );
};
