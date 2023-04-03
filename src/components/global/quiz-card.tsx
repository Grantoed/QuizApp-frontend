import { FC, ReactElement } from "react";
import Link from "next/link";
import { GiChecklist } from "react-icons/gi";
import { QuizCardInterface } from "@/utils/interfaces/quiz-card.interface";
import global from "@/styles/global.module.scss";

export const QuizCard: FC<QuizCardInterface> = ({
  title,
  questionsNumber,
}): ReactElement => {
  return (
    <Link href={"/"} className={global.cardLink}>
      <div className={global.quizCard}>
        <h3 className={global.quizCardName}>{title}</h3>
        <p className={global.quizCardNumber}>
          <GiChecklist className={global.quizCardIcon} />
          {questionsNumber} questions
        </p>
      </div>
    </Link>
  );
};
