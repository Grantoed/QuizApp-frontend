import Head from "next/head";
import { SharedLayout } from "@/components/global/shared-layout";
import { Header } from "@/components/elements/HomePage/hero";
import { Featured } from "@/components/elements/HomePage/featured";
import { HighScore } from "@/components/elements/HomePage/high-score";

export default function Home() {
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
