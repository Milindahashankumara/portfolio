
import React from 'react';
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlight Effects */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>
          
          <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold my-4">
            Transforming Concepts into{" "}
            <span className="text-purple">Seamless User Experiences</span>
          </h1>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white-200">
            Hi! I&apos;m Hashan, a Next.js Developer.
          </p>

          <a href="#about" className="mt-8">
            <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
                Show my work
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero