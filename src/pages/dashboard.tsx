import { FC, ReactElement } from "react";
import Image from "next/image";
import { SharedLayout } from "@/components/global/shared-layout";
import { Container } from "@/components/global/container";
import global from "@/styles/global.module.scss";
import styles from "@/styles/modules/elements/dashboard.module.scss";

const Dashboard: FC = (): ReactElement => {
  return (
    <SharedLayout>
      <Container>
        <section className={global.section}>
          <div className={styles.userWrapper}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              alt="User avatar"
              width={200}
              height={200}
            ></Image>
            <div className={styles.userInfo}>
              <p className={styles.userName}>Kathelyn Brokeheart</p>
              <p className={styles.userEmail}>
                kathelyn.brokeheart@protonmail.com
              </p>
            </div>
          </div>
          <div className={styles.statsWrapper}>
            <div className={styles.userStatsItem}>
              <Image
                className={styles.userStatsIcon}
                src={"/solved.svg"}
                alt={"Stats icon"}
                width={40}
                height={40}
              ></Image>
              <p className={styles.userStatsName}>
                <span className={styles.userStatsNumber}>32</span>
                <span className={styles.userStatsText}>Quizzes solved</span>
              </p>
            </div>
            <div className={styles.userStatsItem}>
              <Image
                className={styles.userStatsIcon}
                src={"/won.svg"}
                alt={"Stats icon"}
                width={40}
                height={40}
              ></Image>
              <p className={styles.userStatsName}>
                <span className={styles.userStatsNumber}>28</span>
                <span className={styles.userStatsText}>Quizzes won</span>
              </p>
            </div>
          </div>
        </section>
      </Container>
    </SharedLayout>
  );
};

export default Dashboard;
