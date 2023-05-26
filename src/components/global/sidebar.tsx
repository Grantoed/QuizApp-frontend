import { FC, ReactElement } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  BiHomeAlt2,
  BiLayout,
  BiLayer,
  BiInfoCircle,
  BiLogOut,
} from "react-icons/bi";
import { SidebarInterface } from "@/utils/interfaces/sidebar.interface";
import { useGlobalContext } from "@/contexts";
import styles from "@/styles/modules/global/sidebar.module.scss";

export const Sidebar: FC<SidebarInterface> = ({
  openAuthModal,
  handleLogOut,
}): ReactElement => {
  const router = useRouter();
  const { user, loggedIn } = useGlobalContext();

  return (
    <aside className={styles.sidebar}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Logo"
          width={144}
          height={30}
        />
      </Link>
      <div className={styles.sidebarMenuWrapper}>
        <nav className={styles.menu}>
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
                className={styles.logOutBtn}
                onClick={handleLogOut}
              >
                <BiLogOut className={styles.logOutIcon} /> Log Out
              </button>
            </>
          ) : (
            <button
              type="button"
              className={styles.logOutBtn}
              onClick={openAuthModal}
            >
              <BiLogOut className={styles.logOutIcon} /> Log In
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
