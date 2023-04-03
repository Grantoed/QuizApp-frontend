import { FC, ReactElement } from "react";
import Image from "next/image";
import { Container } from "@/components/global/container";
import styles from "@/styles/HomePage/hero.module.scss";

export const Header: FC = (): ReactElement => {
  return (
    <Container>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          QuizApp - a shameless attempt at copying Quizlet
        </h1>
        <p className={styles.heroDescription}>
          QuizApp lets you take quizzes created by other users or create one
          yourself to study for exams and job interviews!
        </p>
        <div className={styles.btnWrapper}>
          <button className={styles.btnMain} type="button">
            Take quiz
          </button>
          <button className={styles.btnMain} type="button">
            Create quiz
          </button>
        </div>
        <Image
          className={styles.heroImage}
          src={"/Pic.svg"}
          alt={"Hero image"}
          width={420}
          height={420}
          priority
        ></Image>
      </section>
    </Container>
  );
};
