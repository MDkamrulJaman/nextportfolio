import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaIcon = () => {
  return (
    <>
      <div className="text-center">
        <div className=" mx-auto p-2 flex justify-center items-center">
          <div className="flex items-center justify-between m-auto py-4 gap-3">
            <Link href="https://www.linkedin.com/" tLinkrget="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin size={20} />
              </div>
            </Link>
            <Link href="https://github.com/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <a>
                  <FaGithub size={20} />
                </a>
              </div>
            </Link>
            <Link href="https://github.com/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <a>
                  <FaGithub size={20} />
                </a>
              </div>
            </Link>
            <Link href="https://github.com/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <a>
                  <FaGithub size={20} />
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaIcon;
