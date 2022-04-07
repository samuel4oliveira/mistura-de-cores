import SpeechBuble from "../components/SpeechBubble";
import Character from "../components/Character";
import style from "/styles/Home.module.css";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mistura de Cores</title>
        <meta name="description" content="Jogo de mistura de cores" />
        <meta name="keywords" content="Jogos, Misura, Cores" />
        <link rel="icon" href="/assets/imgs/girl.svg" />
      </Head>

      <main className={style.container}>
        <SpeechBuble />

        <Character />
      </main>
    </div>
  );
};

export default Home;
