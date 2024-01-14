import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex item-center justify-center rounded-full font-semibold bg-dark text-light p-8 cursor-pointer absolute py-3 px-6 dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{x:0, y:0}}
      whileInView={{x:x,y:y}}
      transition={{duration:1.5}}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-36 w-full text-center md:mt-32 md:text-6xl">Skills</h2>
      <div className="w-full h-screen realtive flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      ">
        <motion.div
          className="flex item-center justify-center rounded-full font-semibold bg-dark text-light p-8 cursor-pointer
           dark:text-dark dark:bg-light
           lg:p-6 md:p-4 xs:text-xs xs:p-2
           "
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>
        <Skill name="Html" x="-22vw" y="2vw"/>
        <Skill name="CSS" x="-7vw" y="20vw"/>
        <Skill name="Javascript" x="20vw" y="3vw"/>
        <Skill name="ReactJS" x="0vw" y="12vw"/>
        <Skill name="NextJS" x="-20vw" y="-15vw"/>
        <Skill name="Tailwind CSS" x="15vw" y="-12vw"/>
        <Skill name="C/C++" x="32vw" y="-5vw"/>
        <Skill name="Bootstrap" x="0vw" y="-20vw"/>
        <Skill name="Git/GitHub" x="-25vw" y="15vw"/>
        <Skill name="Redux Toolkit" x="18vw" y="18vw"/>
        <Skill name="Figma" x="-5vw" y="-10vw"/>
        <Skill name="Canva" x="35vw" y="8vw"/>
        <Skill name="DSA" x="-35vw" y="-3vw"/>
      </div>
    </>
  );
};

export default Skills;
