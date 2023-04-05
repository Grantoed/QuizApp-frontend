import { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BiHomeAlt2,
  BiLayout,
  BiLayer,
  BiInfoCircle,
  BiLogOut,
} from "react-icons/bi";
import styles from "@/styles/modules/global/sidebar.module.scss";

export const Sidebar: FC = (): ReactElement => {
  return (
    <aside className={styles.sidebar}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/Logo.svg"
          alt="Logo"
          width={144}
          height={30}
        />
      </Link>
      <div className={styles.sidebarMenuWrapper}>
        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link className={styles.menuLink} href={"/"}>
                <BiHomeAlt2 className={styles.menuIcon} /> Home
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.menuLink} href={"/"}>
                <BiLayout className={styles.menuIcon} /> Dashboard
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.menuLink} href={"/"}>
                <BiLayer className={styles.menuIcon} /> Quizzes
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link className={styles.menuLink} href={"/"}>
                <BiInfoCircle className={styles.menuIcon} /> About
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.menuUserWrapper}>
          <Link href="/" className={styles.menuUserCard}>
            <Image
              className={styles.menuUserAvatar}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              }
              alt="User avatar"
              width={40}
              height={40}
            ></Image>
            <div className={styles.menuUserInfo}>
              <p className={styles.menuUserName}>Kathelyn Brokeheart</p>
              <p className={styles.menuUserEmail}>
                kathelyn.brokeheart@protonmail.com
              </p>
            </div>
          </Link>
          <button type="button" className={styles.logOutBtn}>
            <BiLogOut className={styles.logOutIcon} /> Log Out
          </button>
        </div>
      </div>
    </aside>
  );
};
