import { FC, ReactElement } from "react";
import Link from "next/link";
import { GiChecklist } from "react-icons/gi";
import { QuizCardInterface } from "@/utils/interfaces/quiz-card.interface";
import styles from "@/styles/modules/global/quiz-card.module.scss";

export const QuizCard: FC<QuizCardInterface> = ({
  title,
  questionsNumber,
}): ReactElement => {
  return (
    <Link href={"/"} className={styles.cardLink}>
      <div className={styles.quizCard}>
        <h3 className={styles.quizCardName}>{title}</h3>
        <p className={styles.quizCardNumber}>
          <GiChecklist className={styles.quizCardIcon} />
          {questionsNumber} questions
        </p>
      </div>
    </Link>
  );
};
