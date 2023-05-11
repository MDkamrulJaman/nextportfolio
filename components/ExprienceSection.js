import React from "react";
import Link from "next/link";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/html.png";
import graphql from "../public/assets/experience/graphql.png";
import node from "../public/assets/experience/node.png";
import Image from "next/image";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
      path: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      title: "CSS",
      src: css,
      path: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
      path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
      path: "https://legacy.reactjs.org/",
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
      path: "https://nextjs.org/",
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
      path: "https://translate.google.com/",
    },
    {
      id: 7,
      title: "GraphQL",
      src: graphql,
      path: "https://graphql.org/",
    },
    {
      id: 8,
      title: "Node JS",
      src: node,
      path: "https://nodejs.dev/en/learn/",
    },
  ];

  return (
    <div id="experience" className="w-full py-12">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <p className="py-4 ">
          While only that hauntedtell many purple no lent cushions more heart. Soul cushions the
          still if i, hath lamplight mortals the rapping have me and.
        </p>

        <div className="grid lg:grid-cols-4 gap-10">
          {experiences.map(({ id, title, src, path }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Link href={path}>
                <a>
                  <Image src={src} width="64px" height="64px" alt={title} />
                  <h3 className="font-light">{title}</h3>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
