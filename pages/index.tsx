import type { NextPage } from "next";
import Head from "next/head";
import { Lapper } from "../components/lapper";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lapper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Lapper />
    </>
  );
};

export default Home;
