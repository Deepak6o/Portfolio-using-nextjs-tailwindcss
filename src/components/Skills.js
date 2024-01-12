import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex item-center justify-center rounded-full font-semibold bg-dark text-light p-8 cursor-pointer absolute py-3 px-6 dark:text-dark dark:bg-light"
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
      <h2 className="font-bold text-8xl mt-36 w-full text-center">Skills</h2>
      <div className="w-full h-screen realtive flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex item-center justify-center rounded-full font-semibold bg-dark text-light p-8 cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>
        <Skill name="Html" x="-22vw" y="2vw"/>
        <Skill name="CSS" x="-5vw" y="-10vw"/>
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
