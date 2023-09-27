"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { inchData } from "@/lib/data";
import Feature from "@/components/feature";
import React from "react";

export default function oneinch() {
//  const { ref } = useSectionInView("Oneinch");

  return (
    <motion.section
   //   ref={ref}
      className="mb-28  max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>INTEGRACIÓN 1INCH</SectionHeading>
      <p className="mb-3">
      1inch es un agregador de DEXs que optimiza las rutas de trading, el uso del gas y la liquidez, 
      ofreciendo a los usuarios.
      </p>

      <p><span className="font-medium">EFICIENCIA, SEGURIDAD Y PROFUNDIDAD DE LIQUIDEZ.</span> </p>
      <div>
        {inchData.map((inch, index) => (
          <React.Fragment key={index}>
            <Feature {...inch} />
          </React.Fragment>
        ))}
        </div>
    </motion.section>

  );
}
