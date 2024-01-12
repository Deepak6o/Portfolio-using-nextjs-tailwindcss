import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hook/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isTop = currentScrollPos < 100; // Change the scroll threshold as needed
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full px-32 py-8 font-medium flex items-center justify-between ${isScrolled ? 'bg-opacity-90 backdrop-filter backdrop-blur-lg' : ''} sticky top-0 z-50 transition duration-300 ease-in-out`}>

      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="projects" className="mx-4" />
        {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <a></a>
        
        <motion.a
          href="https://github.com/Deepak6o"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/deepak-kumar-086817200/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <button  onClick={()=> setMode(mode==="light" ? "dark" : "light")} className="ml-3 flex items-center justify-center rounded-full p-1">
          {
            mode==="dark" ? 
            <SunIcon className={"fill-dark"}/> :
            <MoonIcon className={"fill-dark"}/>
          }
        </button>
      
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
