import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.png";
import Skills from "@/components/Skills";
import Github from "@/components/Github";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Transition from "@/components/Transition";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition/>
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Know Who I'M" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 md:flex md:flex-col-reverse">
            <div className="flex flex-col items-start justify-start col-span-4 xl-col-span-4">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me...
              </h2>
              <p className="font-medium">
                Hello there! I am Deepak Kumar, a passionate individual hailing
                from the beautiful state of Bihar, India. Currently, I am
                immersed in the world of technology, pursuing a Bachelor
                degree in Computer Science Engineering.
              </p>
              <p className="my-4 font-medium">
                My journey in the realm of technology has been an exhilarating
                one, particularly in the domain of web development. I thrive on
                creating seamless and visually captivating experiences on the
                internet, specializing in frontend development.
              </p>
              <p className="font-medium">
                As a frontend web developer, I channel my creativity and
                technical prowess to craft user-friendly interfaces that
                resonate with modern design trends. Proficient in HTML, CSS, and
                JavaScript, I leverage these tools to breathe life into ideas
                and concepts, translating them into captivating digital spaces.
              </p>
            </div>
            <div className="relative col-span-4 h-max xl-col-span-4">
              <Image
                src={profilePic}
                alt=""
                className="w-full bg-white shadow-md"
                priority
                sizes="(max-width:768) 100vw,
              (max-width:1200px) 50vw,
              50vw"
              />
            </div>
          </div>
          <Skills />
          <Github />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
