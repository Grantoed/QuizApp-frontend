import { FC, ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  BiHomeAlt2,
  BiLayout,
  BiLayer,
  BiInfoCircle,
  BiLogOut,
  BiLogIn,
} from "react-icons/bi";
import { useGlobalContext } from "@/contexts";
import { MobileMenuInterface } from "@/utils/interfaces/mobile.menu.interface";
import styles from "@/styles/modules/global/mobile-menu.module.scss";

export const MobileMenu: FC<MobileMenuInterface> = ({
  closeMenu,
  openAuthModal,
  handleLogOut,
}): ReactElement => {
  const router = useRouter();
  const { user, loggedIn } = useGlobalContext();

  useEffect(() => {
    document.addEventListener("keydown", closeMenu);

    return () => {
      document.removeEventListener("keydown", closeMenu);
    };
  }, [closeMenu]);

  return (
    <div className={styles.backdrop}>
      <nav className={styles.menu} onClick={closeMenu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link
              className={
                router.pathname === "/"
                  ? `${styles.menuLinkActive}`
                  : `${styles.menuLink}`
              }
              href={"/"}
            >
              <BiHomeAlt2 className={styles.menuIcon} /> Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              className={
                router.pathname === "/dashboard"
                  ? `${styles.menuLinkActive}`
                  : `${styles.menuLink}`
              }
              href={"/dashboard"}
            >
              <BiLayout className={styles.menuIcon} /> Dashboard
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              className={
                router.pathname === "/quizzes"
                  ? `${styles.menuLinkActive}`
                  : `${styles.menuLink}`
              }
              href={"/quizzes"}
            >
              <BiLayer className={styles.menuIcon} /> Quizzes
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              className={
                router.pathname === "/about"
                  ? `${styles.menuLinkActive}`
                  : `${styles.menuLink}`
              }
              href={"/about"}
            >
              <BiInfoCircle className={styles.menuIcon} /> About
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.menuUserWrapper}>
        {loggedIn ? (
          <>
            <Link href="/" className={styles.menuUserCard}>
              <Image
                className={styles.menuUserAvatar}
                src={user.avatarURL}
                alt="User avatar"
                width={40}
                height={40}
              ></Image>
              <div className={styles.menuUserInfo}>
                <p className={styles.menuUserName}>{user.name}</p>
                <p className={styles.menuUserEmail}>{user.email}</p>
              </div>
            </Link>
            <button
              type="button"
              id="log-out"
              className={styles.logOutBtn}
              onClick={handleLogOut}
            >
              <BiLogOut className={styles.logOutIcon} />
              Log Out
            </button>
          </>
        ) : (
          <button
            type="button"
            id="log-in"
            className={styles.logOutBtn}
            onClick={openAuthModal}
          >
            <BiLogIn className={styles.logOutIcon} /> Log In
          </button>
        )}
      </div>
    </div>
  );
};
