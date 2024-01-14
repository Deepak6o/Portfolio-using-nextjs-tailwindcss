import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp; </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Engineering In Computer Science"
            time="2020-2024"
            place="Chandigarh University(CU)"
            info="BE in Computer Science, Chandigarh University, 2020-2024, with a current CGPA of 8.01. Developed proficiency in programming, cutting-edge technology, and effective problem-solving methodologies."
          />
          <Details
            type="Class XII"
            time="2019"
            place="Central Board of Secondary Education"
            info="Completed Higher Secondary Education (Class 12) with a focus on Physics, Chemistry, and Mathematics (PCM), securing an outstanding 80.8% and fostering a strong foundation in analytical thinking and scientific principles."
          />
           <Details
            type="Class X"
            time="2017"
            place="Central Board of Secondary Education"
            info="Completed Secondary Education (Class 10) with a stellar academic performance, achieving a remarkable CGPA of 9.2, laying the groundwork for comprehensive learning and establishing a solid educational base."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
