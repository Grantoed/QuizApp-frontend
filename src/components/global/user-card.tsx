import { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserCardInterface } from "@/utils/interfaces/user-card.interface";
import global from "@/styles/global.module.scss";

export const UserCard: FC<UserCardInterface> = ({
  userAvatar,
  username,
  quizzesSolved,
  quizzesWon,
}): ReactElement => {
  return (
    <Link href={"/"} className={global.cardLink}>
      <div className={global.userCard}>
        <div className={global.userInfoWrapper}>
          <Image
            className={global.userAvatar}
            src={userAvatar}
            alt={username}
            width={40}
            height={40}
          ></Image>
          <p className={global.userName}>{username}</p>
        </div>
        <div className={global.userStats}>
          <div className={global.userStatsItem}>
            <Image
              className={global.userStatsIcon}
              src={"/solved.svg"}
              alt={"Stats icon"}
              width={40}
              height={40}
            ></Image>
            <p className={global.userStatsName}>
              {quizzesSolved} Quizzes solved
            </p>
            <p className={global.userStatsNameMobile}>{quizzesSolved}</p>
          </div>
          <div className={global.userStatsItem}>
            <Image
              className={global.userStatsIcon}
              src={"/won.svg"}
              alt={"Stats icon"}
              width={40}
              height={40}
            ></Image>
            <p className={global.userStatsName}>{quizzesWon} Quizzes won</p>
            <p className={global.userStatsNameMobile}>{quizzesWon}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
