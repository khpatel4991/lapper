import type { NextPage } from "next";
import Head from "next/head";
import { Aggregated } from "../components/aggregated";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aggregated</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Aggregated />
    </>
  );
};

export default Home;
