import { useEffect } from "react";
import Head from "next/head";
import { current } from "@/api/users";
import { SharedLayout } from "@/components/global/shared-layout";
import { Header } from "@/components/elements/HomePage/hero";
import { Featured } from "@/components/elements/HomePage/featured";
import { HighScore } from "@/components/elements/HomePage/high-score";
import { useGlobalContext } from "@/contexts";

export default function Home() {
  const { loggedIn, setUser, setLoggedIn, setLoading } = useGlobalContext();

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

    getUser();
    setLoading(false);
  }, []);

  return (
    <SharedLayout>
      <Head>
        <title>QuizApp</title>
        <meta
          name="description"
          content="QuizApp - a shameless attempt at copying Quizlet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Featured />
      <HighScore />
    </SharedLayout>
  );
}
