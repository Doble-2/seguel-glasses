/*
"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mt-20 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>NUESTRA ESPECIALIDAD</SectionHeading>
      <p className="mb-3">
        NUESTRO <span className="font-medium">TRADING BOT</span> OFRECE UNA
        AMPLIA GAMA DE HERRAMIENTAS Y FUNCIONALIDADES
      </p>

      <p>TODAS ELLAS ACCESIBLES SIN COSTO.</p>
    </motion.section>
  );
}
*/