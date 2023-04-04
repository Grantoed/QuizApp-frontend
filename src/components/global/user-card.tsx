import { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserCardInterface } from "@/utils/interfaces/user-card.interface";
import styles from "@/styles/modules/global/user-card.module.scss";

export const UserCard: FC<UserCardInterface> = ({
  userAvatar,
  username,
  quizzesSolved,
  quizzesWon,
}): ReactElement => {
  return (
    <Link href={"/"} className={styles.cardLink}>
      <div className={styles.userCard}>
        <div className={styles.userInfoWrapper}>
          <Image
            className={styles.userAvatar}
            src={userAvatar}
            alt={username}
            width={40}
            height={40}
          ></Image>
          <p className={styles.userName}>{username}</p>
        </div>
        <div className={styles.userStats}>
          <div className={styles.userStatsItem}>
            <Image
              className={styles.userStatsIcon}
              src={"/solved.svg"}
              alt={"Stats icon"}
              width={40}
              height={40}
            ></Image>
            <p className={styles.userStatsName}>
              {quizzesSolved} Quizzes solved
            </p>
            <p className={styles.userStatsNameMobile}>{quizzesSolved}</p>
          </div>
          <div className={styles.userStatsItem}>
            <Image
              className={styles.userStatsIcon}
              src={"/won.svg"}
              alt={"Stats icon"}
              width={40}
              height={40}
            ></Image>
            <p className={styles.userStatsName}>{quizzesWon} Quizzes won</p>
            <p className={styles.userStatsNameMobile}>{quizzesWon}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
