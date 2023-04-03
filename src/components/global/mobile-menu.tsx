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
import global from "@/styles/global.module.scss";

export const MobileMenu: FC = (): ReactElement => {
  return (
    <div className={global.backdrop}>
      <nav className={global.menu}>
        <ul className={global.menuList}>
          <li>
            <Link className={global.menuItem} href={"/"}>
              <BiHomeAlt2 className={global.menuIcon} /> Home
            </Link>
          </li>
          <li>
            <Link className={global.menuItem} href={"/"}>
              <BiLayout className={global.menuIcon} /> Dashboard
            </Link>
          </li>
          <li>
            <Link className={global.menuItem} href={"/"}>
              <BiLayer className={global.menuIcon} /> Quizzes
            </Link>
          </li>
          <li>
            <Link className={global.menuItem} href={"/"}>
              <BiInfoCircle className={global.menuIcon} /> About
            </Link>
          </li>
        </ul>
      </nav>
      <div className={global.menuUserWrapper}>
        <Link href="/" className={global.menuUserCard}>
          <Image
            className={global.menuUserAvatar}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            }
            alt="User avatar"
            width={40}
            height={40}
          ></Image>
          <div className={global.menuUserInfo}>
            <p className={global.menuUserName}>Kathelyn Brokeheart</p>
            <p className={global.menuUserEmail}>
              kathelyn.brokeheart@protonmail.com
            </p>
          </div>
        </Link>
        <button type="button" className={global.logOutBtn}>
          <BiLogOut className={global.logOutIcon} /> Log Out
        </button>
      </div>
    </div>
  );
};
