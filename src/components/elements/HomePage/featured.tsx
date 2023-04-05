import { FC, ReactElement } from "react";
import Link from "next/link";
import { Container } from "@/components/global/container";
import { QuizCard } from "@/components/global/quiz-card";
import global from "@/styles/global.module.scss";

export const Featured: FC = (): ReactElement => {
  return (
    <Container>
      <section className={global.section}>
        <div className={global.headerWrapper}>
          <h2 className={global.subHeader}>Featured</h2>
          <Link className={global.viewMore} href={""}>
            View more
          </Link>
        </div>
        <div className={global.quizCardWrapper}>
          <QuizCard
            title={"Prepare for your next History exam"}
            questionsNumber={31}
          />
          <QuizCard title={"Study Biology for ZNO 2023"} questionsNumber={69} />
          <QuizCard title={"Get ready for ELTIS"} questionsNumber={77} />
          <QuizCard
            title={"How well do you know memes?"}
            questionsNumber={23}
          />
        </div>
      </section>
    </Container>
  );
};
