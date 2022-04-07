import Character from "../components/Character";
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

      <main>
        <Character />
      </main>
    </div>
  );
};

export default Home;
