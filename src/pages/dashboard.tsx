import { FC, ReactElement, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line, RiEdit2Line, RiSettings2Line } from "react-icons/ri";
import { getByUser } from "@/api/sets";
import { current } from "@/api/users";
import { useGlobalContext } from "@/contexts";
import { SharedLayout } from "@/components/global/shared-layout";
import { Container } from "@/components/global/container";
import { QuizCard } from "@/components/global/quiz-card";
import global from "@/styles/global.module.scss";
import styles from "@/styles/modules/elements/dashboard.module.scss";

const Dashboard: FC = (): ReactElement => {
  const { user, sets, loading, setUser, setSets, setLoading, setLoggedIn } =
    useGlobalContext();

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);

      const data = await current();
      if (!data) {
        return;
      }

      setUser(data);
      setLoggedIn(true);
    };

    const fetchUserSets = async () => {
      const { sets } = await getByUser({ limit: "5" });
      setSets(sets);
    };

    getUser();
    fetchUserSets();
    setLoading(false);
  }, []);

  return (
    <SharedLayout>
      <Container>
        {!loading && (
          <>
            <section className={global.section}>
              <div className={styles.sectionWrapper}>
                <Image
                  className={styles.userAvatar}
                  src={user.avatarURL}
                  alt="User avatar"
                  width={200}
                  height={200}
                ></Image>
                <div className={styles.userCardWrapper}>
                  <div className={styles.userInfo}>
                    <p className={styles.userName}>{user.name}</p>
                    <p className={styles.userEmail}>{user.email}</p>
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
                        <span className={styles.userStatsNumber}>
                          {user.solvedQuizes.length}
                        </span>
                        <span className={styles.userStatsText}>
                          Quizzes solved
                        </span>
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
                <button
                  className={styles.userSettingsButton}
                  type="button"
                  aria-label="user settings"
                >
                  <RiSettings2Line />
                </button>
              </div>
            </section>
            <section className={global.section}>
              <div className={global.headerWrapper}>
                <h2 className={global.subHeader}>Created</h2>
                <Link className={global.viewMore} href={""}>
                  View more
                </Link>
              </div>
              {sets.length ? (
                <div className={global.quizCardWrapper}>
                  {sets.map((setItem: any) => (
                    <div key={setItem._id} className={styles.cardItem}>
                      <QuizCard
                        title={setItem.title}
                        questionsNumber={setItem.cards.length}
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
                  ))}
                </div>
              ) : (
                <p className={styles.quizCardWarning}>No cards created yet</p>
              )}
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
          </>
        )}
      </Container>
    </SharedLayout>
  );
};

export default Dashboard;
