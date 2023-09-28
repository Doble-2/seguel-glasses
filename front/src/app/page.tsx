"use client";

import Intro from '@/components/intro';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 sm:max-w-[60rem] lg:mb-0 ">
        <Intro/>
      </div>
    </main>
  )
}
