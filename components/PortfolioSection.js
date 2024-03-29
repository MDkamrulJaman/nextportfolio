import React from "react";

import { MdExpandMore } from "react-icons/md";
import installNode from "../public/assets/portfolio/installNode.jpg";
import mern from "../public/assets/portfolio/mern.png";
import usestate from "../public/assets/portfolio/usestate.jpg";
import counterapp from "../public/assets/portfolio/counterapp.png";
import Link from "next/link";
import Image from "next/image";

const PortfolioSection = () => {
  const portfolios = [
    {
      id: 1,
      title: "Counter App",
      imageSrc: counterapp,
      url: "https://counter-app-next-redux-sable.vercel.app/",
    },
    {
      id: 2,
      title: "install node",
      imageSrc: installNode,
      url: "https://nodejs.dev/en/",
    },
    {
      id: 3,
      title: "Use State explained",
      imageSrc: usestate,
      url: "https://legacy.reactjs.org/docs/hooks-state.html",
    },
    {
      id: 4,
      title: "Mern-Authentication",
      imageSrc: mern,
      url: "https://github.com/MDkamrulJaman/Mern-Authentication",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <p className="text-2xl md:text-2xl hover:text-green-800 py-4">
          While only that hauntedtell many purple no lent cushions more heart.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 hover:img-red-800 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={url}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              All Projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
