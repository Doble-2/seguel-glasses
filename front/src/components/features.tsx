"use client";
import React from "react";
import { featuresData } from "@/lib/data";
import Feature from "@/components/feature";
import SectionHeading from "./section-heading";

export default function Features() {
  return (
    <section id="features" className="mb-28 sm:mt-20 max-w-[50rem] text-center leading-8  scroll-mt-28">
      <SectionHeading>FEATURES</SectionHeading> 
    {/*   <p className="mb-3">
        🤖 Your go-to #DeFi assistant on Telegram. Multiple DEX aggregation & best crypto swap rates 🔄🚀
        </p>
      <div>
        {featuresData.map((feature, index) => (
          <React.Fragment key={index}>
            <Feature {...feature} />
          </React.Fragment>
        ))}
        </div>*/} 
        <div className="flex justify-start flex-wrap justify-evenly sm:grid-cols-4 grid-cols-2 gap-4">
          {featuresData.map((feature, index) => (
            // eslint-disable-next-line react/jsx-key
            <div key={'key'} className="basis-1/3	sm:basis-1/5 w-36 sm:w-48">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="leading-relaxed text-left text-gray-700 dark:text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

    </section>
  );
}
