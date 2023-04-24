import { FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { SharedLayout } from "@/components/global/shared-layout";
import { Container } from "@/components/global/container";
import { QuizCard } from "@/components/global/quiz-card";
import global from "@/styles/global.module.scss";
import styles from "@/styles/modules/elements/dashboard.module.scss";

const Dashboard: FC = (): ReactElement => {
  return (
    <SharedLayout>
      <Container>
        <section className={global.section}>
          <div className={styles.sectionWrapper}>
            <Image
              className={styles.userAvatar}
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              alt="User avatar"
              width={200}
              height={200}
            ></Image>
            <div className={styles.userCardWrapper}>
              <div className={styles.userInfo}>
                <p className={styles.userName}>Kathelyn Brokeheart</p>
                <p className={styles.userEmail}>
                  kathelyn.brokeheart@protonmail.com
                </p>
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
              <div className={styles.btnWrapper}>
                <button className={styles.btnMain} type="button">
                  Take quiz
                </button>
                <button className={styles.btnMain} type="button">
                  Create quiz
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={global.section}>
          <div className={global.headerWrapper}>
            <h2 className={global.subHeader}>Created</h2>
            <Link className={global.viewMore} href={""}>
              View more
            </Link>
          </div>
          <div className={global.quizCardWrapper}>
            <div className={styles.cardItem}>
              <QuizCard
                title={"Prepare for your next History exam"}
                questionsNumber={31}
              />
              <div className={styles.editWrapper}>
                <button className={styles.editButton} type="button">
                  <RiDeleteBin6Line /> Delete
                </button>
                <button className={styles.editButton} type="button">
                  <RiEdit2Line /> Edit
                </button>
              </div>
            </div>
            <div className={styles.cardItem}>
              <QuizCard
                title={"Study Biology for ZNO 2023"}
                questionsNumber={69}
              />
              <div className={styles.editWrapper}>
                <button className={styles.editButton} type="button">
                  <RiDeleteBin6Line /> Delete
                </button>
                <button className={styles.editButton} type="button">
                  <RiEdit2Line /> Edit
                </button>
              </div>
            </div>
            <div className={styles.cardItem}>
              <QuizCard title={"Get ready for ELTIS"} questionsNumber={77} />
              <div className={styles.editWrapper}>
                <button className={styles.editButton} type="button">
                  <RiDeleteBin6Line /> Delete
                </button>
                <button className={styles.editButton} type="button">
                  <RiEdit2Line /> Edit
                </button>
              </div>
            </div>
            <div className={styles.cardItem}>
              <QuizCard
                title={"How well do you know memes?"}
                questionsNumber={23}
              />
              <div className={styles.editWrapper}>
                <button className={styles.editButton} type="button">
                  <RiDeleteBin6Line /> Delete
                </button>
                <button className={styles.editButton} type="button">
                  <RiEdit2Line /> Edit
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={`${global.section} ${global.dashboard}`}>
          <div className={global.headerWrapper}>
            <h2 className={global.subHeader}>Latest</h2>
            <Link className={global.viewMore} href={""}>
              View more
            </Link>
          </div>
          <div className={`${global.quizCardWrapper} ${global.dashboard}`}>
            <QuizCard
              title={"Prepare for your next History exam"}
              questionsNumber={31}
            />
            <QuizCard
              title={"Study Biology for ZNO 2023"}
              questionsNumber={69}
            />
          </div>
        </section>
      </Container>
    </SharedLayout>
  );
};

export default Dashboard;
