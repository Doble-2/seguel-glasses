"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 sm:max-w-[45rem] text-center sm:my-12  scroll-mt-[100rem]"
    >
       <div className="w-full place-items-center grid lg:hidden justify-items-center ">
          <div className="w-fit h-fit relative z-10">
            <div className="w-fit h-fit relative " >
              <img src="https://static.tildacdn.com/tild3937-6162-4136-a338-333762633937/SONIC_BOT_-_SIN_LETR.png" alt="Hero" className="2xl:w-auto md:w-[20rem] sm:w-[16rem] w-[13rem]"/>
            </div>
          </div>
        </div>
      <div className="my-container flex font-primary lg:flex-row flex-col lg:mt-0 lg:gap-0 gap-10">
        <div className=" flex flex-col justify-center text-center lg:text-left">
          <div className="relative xl:text-7xl text-3xl mx-auto lg:mx-0">
            <h1 className=" l:text-4xl lg:text-4xl text-2xl mt-2 italic " >
              Welcome to Suit bot
            </h1>
          </div>
         
          <div className="mt-5 flex flex-col lg:mx-0 mx-auto">
            <div >
              <p className="w-fit mx-auto lg:mx-0 md:text-base sm:text-sm text-[11px]">
                SuitBot is a cutting-edge Telegram Bot meticulously crafted to enhance interactions within 
                the world of DeFI. We are driven by a commitment to simplicity, speed,
                and cost-effectiveness, which are the cornerstones of our project.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-evenly	 mt-5 gap-2 w-full mx-auto lg:mx-0">    
                <Link target="_blank"  href="https://t.me/ejemplo" className="group bg-gray-900 text-white  px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                  Launch Bot
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <Link target="_blank"  href="https://t.me/ejemplo" className="bg-white borderBlack dark:bg-white/10 dark:text-white/80 group px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-200 active:scale-105 transition">
                  Join telegram
                </Link>
              </div>
            </div>
            <p className="flex my-6 items-center gap-2 break-words mx-auto lg:mx-0 md:text-base text-md ">
              0x4495c3857f49138d3976e7793eb04811da9f71ee
              <span className="inline-block cursor-pointer hover:text-cyn">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2">
                  </rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2">
                  </path>
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className="w-full ml-10 place-items-center lg:grid hidden">
          <div className="w-fit h-fit relative z-10">
            <div className="w-fit h-fit relative " >
              <img src="https://static.tildacdn.com/tild3937-6162-4136-a338-333762633937/SONIC_BOT_-_SIN_LETR.png" alt="Hero" className="w-auto"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
