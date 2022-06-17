import type { NextPage } from 'next';
import Head from 'next/head';
import { Lapper } from '../components/lapper';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Lapper />
    </>
  );
};

export default Home;
