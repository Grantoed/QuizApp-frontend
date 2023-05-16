import { FC, ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { RegisterForm } from "./register-form";
import { LogInForm } from "./login-form";
import { AuthModalInterface } from "@/utils/interfaces/auth-modal.interface";
import styles from "@/styles/modules/global/auth-modal.module.scss";

export const AuthModal: FC<AuthModalInterface> = ({
  closeAuthModal,
}): ReactElement => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", closeAuthModal);

    return () => {
      document.removeEventListener("keydown", closeAuthModal);
    };
  }, [closeAuthModal]);

  return (
    <div className={styles.backdrop} onClick={closeAuthModal} id="backdrop">
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Logo"
            width={144}
            height={30}
          />
          <button
            type="button"
            id="auth-close"
            className={styles.close}
            onClick={closeAuthModal}
          >
            Close
            <RxCross1 className={styles.iconClose} />
          </button>
        </div>
        {isSignUpOpen ? (
          <RegisterForm handleOpenSignUp={setIsSignUpOpen} />
        ) : (
          <LogInForm handleOpenSignUp={setIsSignUpOpen} />
        )}
      </div>
    </div>
  );
};
