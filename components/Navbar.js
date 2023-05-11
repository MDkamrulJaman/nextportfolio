import Link from "next/link";
import React, { useEffect, useState } from "react";

import { FaBars, FaTimes, FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () => setPageScroll(window.scrollY >= 90));

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "portfolio",
    },
    {
      id: 2,
      link: "experience",
    },
    {
      id: 3,
      link: "me",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div
      className={`w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in ${
        pageScroll && "bg-black text-[#fff]"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto px-4">
        <Link href="/">
          <h1 className="text-3xl lg:text-2xl font-bold uppercase tracking-wider cursor-pointer">
            <a>
              MD Kamrul Jaman<span className="text-blue-500 px-1">Rabbi</span>
            </a>
          </h1>
        </Link>

        <div className="px-auto">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                <a>Homepage</a>
              </li>
            </Link>

            {links.map(({ id, link }) => (
              <Link key={id} href={`/${link}`}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  <a>{link}</a>
                </li>
              </Link>
            ))}
          </ul>

          {!navigation && (
            <div className="md:hidden cursor-pointer" onClick={() => setNavigation(true)}>
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          navigation ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur" : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase tracking-wider cursor-pointer"
                >
                  <span className="text-white"> Kamrul_Jaman</span>
                </h2>
              </Link>
              <div onClick={() => setNavigation(false)} className="p-3 cursor-pointer">
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNavigation(false)}
                  className="py-4 text-2xl tracking-wider cursor-pointer"
                >
                  <a>Homepage</a>
                </li>
              </Link>
              {links.map(({ id, link }) => (
                <Link key={id} href={`/${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-2xl tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

            {/* <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaLinkedin size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaTwitter size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaFacebook size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <Link href="https://translate.google.com/">
                    <a>
                      <span>
                        <FaGithub size={25} />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
