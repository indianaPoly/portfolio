import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/layout";
import Intro from "../components/home/intro";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0E3A5E]">
      <Head>
        <title>Poly's </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Intro />
      </Layout>
    </div>
  );
};

export default Home;
