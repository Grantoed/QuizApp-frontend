import { FC, ReactElement, useEffect } from "react";
import { SharedLayout } from "./shared-layout";
import { AuthModalInterface } from "@/utils/interfaces/auth-modal.interface";
import styles from "@/styles/modules/global/auth-modal.module.scss";

export const AuthModal: FC<AuthModalInterface> = ({
  closeAuthModal,
}): ReactElement => {
  useEffect(() => {
    document.addEventListener("keydown", closeAuthModal);

    return () => {
      document.removeEventListener("keydown", closeAuthModal);
    };
  }, [closeAuthModal]);

  return (
    <div className={styles.backdrop} onClick={closeAuthModal} id="backdrop">
      <div className={styles.modal}></div>
    </div>
  );
};
