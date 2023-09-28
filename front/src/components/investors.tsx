/*"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { investorsData } from "@/lib/data";
import Image from "next/image";

export default function Investors() {
  const { ref } = useSectionInView("Investors");

  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[53rem] scroll-mt-28 text-center"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="investors"
    >
        <SectionHeading>INVESTORS</SectionHeading>
        <p className="mb-3">
           WE HAVE AN  <span className="font-medium"> EXCELLENT TEAM OF INVESTORS </span> THAT SUPPORTS THE PROJECT
        </p>
        <div className="flex justify-center flex-wrap sm:grid-cols-3 grid-cols-2 gap-4">
            {/*sm:grid-cols-3 grid-cols-2}
            {investorsData.map((investor , index) => (
            // eslint-disable-next-line react/jsx-key
            <Image key={'key'} className="basis-1/3	sm:basis-1/4 w-36 sm:w-48" alt={investor.alt} src={investor.imageUrl}/>
            ))}
           
           
        </div>
    </motion.section>
  );
}
*/