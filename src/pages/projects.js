import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/icons";
import project1 from "../../public/images/projects/Youtube.png";
import project2 from "../../public/images/projects/Thoughwall.png";
import project3 from "../../public/images/projects/Gym.png";
import project4 from "../../public/images/projects/todo.png";
import project5 from "../../public/images/projects/weather.png";
import project6 from "../../public/images/projects/nike.png";
import Transition from "@/components/Transition";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="flex items-center justify-between w-full p-6 transition duration-300 transform border border-solid shadow-2xl rounded-3xl border-dark dark:border-light bg-light dark:bg-dark hover:scale-105 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg"
          priority
          sizes="(max-width:768) 100vw,
              (max-width:1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 p-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left text-dark dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 text-sm text-gray-700 dark:text-light sm:text-sm">{summary}</p>
        <div className="flex items-center mt-4">
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 ml-4 text-lg font-semibold transition duration-300 rounded-lg bg-dark text-light hover:bg-light hover:text-dark dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition/>
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <div className="mb-16">
            <AnimatedText text="My Recent Works" className="lg:!text-7xl  sm:!text-6xl xs:!text-4xl"/>
            <p className="flex items-center justify-center font-bold sm:text-xs">
              Here are a few projects I have worked on recently
            </p>
          </div>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Youtube Clone"
                img={project1}
                summary="Built a frontend YouTube Clone mimicking core functionalities. Created a responsive platform resembling the original
 YouTube interface. Tech. used: React, Redux Toolkit, Tailwind CSS, React Router DOM, Youtube APIs, JavaScript, HTML5"
                link="https://github.com/Deepak6o/yt-clone"
                github="https://github.com/Deepak6o/yt-clone"
                type="Self-learning Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="ThoughtWall"
                img={project2}
                summary="Created Thought Wall, allowing easy blog creation and deletion. Implemented user-friendly features using frontend
 and backend technologies. Tech. used: React, TailwindCSS, JavaScript, React-Router , HTML5"
                link="https://deepakthoughtwallproject.pages.dev/"
                github="https://github.com/Deepak6o/ThoughtWall-website-using-reactjs"
                type="Self-learning Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Gym Website"
                img={project3}
                summary="Developed Gym Website catering to fitness enthusiasts, offering membership details, workout resources, using fron
tend technologies. Tech. used: React, CSS, JavaScript, HTML5, Framer Motion"
                link="https://deepakthoughtwallproject.pages.dev/"
                github="https://github.com/Deepak6o/Gym-website-using-react-js"
                type="Self-learning Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="To-Do-List App"
                img={project4}
                summary="Created a responsive To-Do-List app with dynamic task management using HTML, CSS, and JavaScript, emphasizing an intuitive user interface and cross-browser compatibility."
                link="https://todolist-3zo.pages.dev/"
                github="https://github.com/Deepak6o/To-Do-List-App"
                type="Self-learning Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Weather App"
                img={project5}
                summary="Developed a sleek Weather App with HTML, CSS, and JavaScript, offering real-time weather information and a user-friendly interface. Implemented API integration for accurate and dynamic weather updates."
                link="https://weatherapp-cvv.pages.dev/"
                github="https://github.com/Deepak6o/Weatherapp"
                type="Self-learning Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Nike-Shoes E-commerce Website Clone"
                img={project6}
                summary="Developed a React.js-based Nike e-commerce site with responsive design, showcasing seamless user interactions and API integration for a dynamic shopping experience."
                link="https://github.com/Deepak6o/Nike-Clone-Shoes-Ordering-app-reactjs"
                github="https://github.com/Deepak6o/Nike-Clone-Shoes-Ordering-app-reactjs"
                type="Self-learning Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
