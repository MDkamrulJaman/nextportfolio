import React from "react";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <div className="flex justify-center items-center flex-col pt-40 text-center font-bold  uppercase lg:text-8xl text-6xl space-y-2">
        <h1 className="text-gray-900 pb-10">
          project with <span className="text-blue-500">Next.js</span> &
          <span className="text-blue-400">React.js</span>
        </h1>
        <Link href="https://nextjs.org/">
          <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
            <h1 className="text-center">Let's start </h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HeroSection;
