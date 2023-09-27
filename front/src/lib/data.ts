import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuRocket } from "react-icons/lu";
import { LuFlame } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { LuTrophy } from "react-icons/lu";

import { MdRocketLaunch } from "react-icons/md";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import overgroup from "@/public/overgroup.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
 /* {
    name: "WHITEPAPER",
    hash: "#whitepaper",
  },*/
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Roadmap",
    hash: "#roadmap",
  },

  {
    name: "Investors",
    hash: "#investors",
  },
] as const;

export const roadmapData = [
  {
    title: "Phase 1: Feature Launch (MVP)",
    location: "",
    description:"Descripcion de ejemplo de cada fase donde explicamos en grandes rasgos los pasos",
      list: [
        "Manage Wallet",
        "Swap Tokens",
        "Gas Wei",
        "Approve Tokens",
        "Leaderboard",
        "PNL (Profit and Loss) Results",
        "Token Balances",
        "Go Token Plus Analysis",
      ],
    icon: React.createElement(LuRocket),
    date: "oct 23 - ene 24",
  },
  {
    title: "Phase 2",
    location: "",
    description:"Descripcion de ejemplo de cada fase donde explicamos en grandes rasgos los pasos",
    list: [
      "Limit Orders",
      "Snipe Tokens",
      "1inch Fusion Orders",
      "Copy trading",
      "Airdrops",
      "Token Launch"
    ],
    icon: React.createElement(LuFlame),
    date: "ene 24 - abril 24",
  },
  {
    title: "Phase 3",
    location: "",
    list: [
      "Multi-Wallet Management",
      "Multi-Network Management",
      "Layer Zero Bridge Integration",
      "Dapp"
    ],
    description:"Descripcion de ejemplo de cada fase donde explicamos en grandes rasgos los pasos",
    icon: React.createElement(LuWallet),
    date: "abril 24 - julio 24",
  },
  {
    title: "Phase 4",
    location: "",
    list: [
      "External Wallet Analysis",
      "Token Contract Analysis",
    ],
    description:"Descripcion de ejemplo de cada fase donde explicamos en grandes rasgos los pasos",
    icon: React.createElement(LuTrophy),
    date: "julio 24 - octubre 24",
  },
] as const;

export const inchData = [
  {
    title: "Highlighting 1inch Integration",
    description: "💡 Why settle for less? Our bot uses 1inch’s DEX aggregation to find you the best trading prices across multiple exchanges. #DeFi #1inch",
    imageUrl: corpcommentImg,
  },
  {
    title: "Ease of Use",
    description:
      "👌 Swapping crypto has never been easier! Our Telegram bot is user-friendly and packed with features. #DeFi #Crypto",
    imageUrl: rmtdevImg,
  },
  {
    title: "Comparisons",
    description: "💪 Why use multiple platforms? Our Telegram bot + 1inch offers a one-stop solution for all your crypto needs. #DeFi",
    imageUrl: wordanalyticsImg,}
] as const;
export const featuresData = [
/*  
  },*/
  {
    title: "Buy tokens",
    description: "Dive into the Defi world and buy your favorite tokens with a single click.",
  },
  {
    title: "Mirror sniper",
    description: "Stay ahead of the game by mirroring the moves of top traders in real time.",
  },
  {
    title: "PNL analysis",
    description: "Dive deep into your trading performance with detailed profit and loss analysis.",
  },
  {
    title: "Token balances",
    description: "Keep track of your assets with our intuitive dashboard, ensuring you're always in the know",
  },
  {
    title: "Audit",
    description: "Keep track of your assets with our intuitive dashboard, ensuring you're always in the know",
  },
  {
    title: "Leaderboard",
    description: "Keep track of your assets with our intuitive dashboard, ensuring you're always in the know",
  },
  {
    title: "Sell tokens",
    description: "Ready to cash out? SonicBot ensures swift and secure sales, maximizing your profits.",
  },
] as const;


export const investorsData = [
  {
    alt: "Overgroup",
    imageUrl: overgroup,
  },
  

] as const;

export const skillsData = ["revenue share", "programa referidos"] as const;
