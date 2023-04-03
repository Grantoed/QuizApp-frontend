import { FC, ReactElement } from "react";
import Link from "next/link";
import { Container } from "@/components/global/container";
import { UserCard } from "@/components/global/user-card";
import global from "@/styles/global.module.scss";

export const HighScore: FC = (): ReactElement => {
  return (
    <Container>
      <section className={`${global.section} ${global.highScore}`}>
        <h2 className={global.subHeader}>Highest scores</h2>
        <div className={global.cardWrapper}>
          <UserCard
            userAvatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541
"
            username="Kathelyn Brokeheart"
            quizzesSolved={87}
            quizzesWon={80}
          ></UserCard>
          <UserCard
            userAvatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541
"
            username="John Smith"
            quizzesSolved={70}
            quizzesWon={65}
          ></UserCard>
          <UserCard
            userAvatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541
"
            username="Brian Cranston"
            quizzesSolved={34}
            quizzesWon={10}
          ></UserCard>
          <UserCard
            userAvatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541
"
            username="Steve Rogers"
            quizzesSolved={9}
            quizzesWon={3}
          ></UserCard>
          <UserCard
            userAvatar="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541
"
            username="Steve Rogers"
            quizzesSolved={5}
            quizzesWon={1}
          ></UserCard>
        </div>
      </section>
    </Container>
  );
};
