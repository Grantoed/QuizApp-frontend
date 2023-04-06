import { FC, ReactElement } from "react";
import { SharedLayout } from "@/components/global/shared-layout";
import { Container } from "@/components/global/container";
import global from "@/styles/global.module.scss";
import styles from "@/styles/modules/elements/about.module.scss";

const About: FC = (): ReactElement => {
  return (
    <SharedLayout>
      <Container>
        <section className={global.section}>
          <main>
            <h2 className={global.subHeader}>About</h2>
            <div className={styles.aboutWrapper}>
              <p className={styles.paragraph}>
                Introducing QuizApp - a TypeScript Next.js and Node.js
                full-stack application for creating and solving quizzes. Whether
                you're studying for exams or job interviews, QuizApp provides an
                intuitive and engaging platform to help you learn more
                efficiently.
              </p>
              <p className={styles.paragraph}>
                With a sleek design by my friend&nbsp;
                <a className={styles.link} href={"/"} target="_blank">
                  Yaroslav Slauta
                </a>
                , QuizApp is not only functional but also visually appealing.
                The use of TypeScript ensures a seamless and error-free
                experience, while Next.js and Node.js provide efficient data
                processing and retrieval.
              </p>
              <p className={styles.paragraph}>
                To see my other projects, visit my&nbsp;
                <a
                  className={styles.link}
                  href="https://github.com/Grantoed"
                  target="_blank"
                >
                  Github
                </a>
                . Also feel free to check out the&nbsp;
                <a
                  className={styles.link}
                  href="https://github.com/Grantoed/QuizApp-frontend"
                  target="_blank"
                >
                  frontend&nbsp;
                </a>
                and&nbsp;
                <a
                  className={styles.link}
                  href="https://github.com/Grantoed/QuizApp-backend"
                  target="_blank"
                >
                  backend&nbsp;
                </a>
                code for QuizApp. Give QuizApp a try and see how it can help you
                in your studies!
              </p>
            </div>
          </main>
        </section>
      </Container>
    </SharedLayout>
  );
};

export default About;
