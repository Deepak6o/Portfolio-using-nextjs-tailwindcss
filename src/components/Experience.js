import React, { useRef } from "react";
import {motion , useScroll} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
    <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            target="_blank"
            className="text-primary capitalize"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">{time}</span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["start end", "center start"]

    });
  return (
    <div className="my-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">

      <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Web Development Intern"
            company="Kamav Technologies"
            companyLink="https://www.zaubacorp.com/company/KAMAV-TECHNOLOGIES-PRIVATE-LIMITED/U72900UP2020PTC137697"
            time=" Oct. 2022- Dec. 2022"
            work="Created a responsive Educational e-commerce website with full functionality and user adaptability. The site supports
seamless interaction for educational purchases across various devices.
Skills Used- HTML5, CSS, Tailwind CSS, Bootstrap, JavaScript
Tools Used- Figma, Canva."
          />

          <Details
            position="Web Development Intern"
            company="Softol Solutions"
            companyLink="https://softolsolutions.com/"
            time="March 2023- May 2023"
            work="We developed an E-commerce Clothes Website utilizing ReactJs, ensuring an intuitive user interface. It offers a seam
less shopping experience with a focus on usability and performance.
Skills Used- ReactJs, Redux Toolkit, Tailwind CSS, React-Router DOM, JavaScript, HTML5.
Tools Used- Figma"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
