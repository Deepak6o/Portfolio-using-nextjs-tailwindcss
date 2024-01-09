import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
            <AnimatedText text="My Recent Works"/>
            <p className="flex justify-center items-center font-bold">Here are a few projects I've worked on recently</p>
            <div className="grid grid-cols-12 gap-24">
              <div className="col-span-12">
                Featured Projects
              </div>
              <div className="col-span-6">
                 Projects-1
              </div>
              <div className="col-span-6">
                 Projects-2
              </div>
            </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
