import Image from "next/image";
import React from "react";

import contactus from "../public/images/contact.jpg";
// import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import PageIcon from "./PageIcon";
// import { Button } from "react-scroll";

const ContactSection = () => {
  return (
    <>
      <div className="w-full p-top-5">
        <div className="max-w-screen-xl mx-auto px-8 py-24 text-center md:text-left">
          <h2 className="text-4xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold hidden">
            contact
          </h2>

          <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white mt-4">
            <div className="w-full md:w-1/2 h-full rounded-xl p-4">
              <Image src={contactus} alt="man with laptop" className="rounded-xl" />
              <p className="pt-2 pb-10">
                I am open to talk regarding freelancing or full-time opportunities. Fell free to
                contact me using your preferred medium.
              </p>
              <PageIcon />
            </div>

            {/* form stuff  */}
            <div className="w-full md:w-1/2 h-full rounded-xl p-4">
              <div className="p-4 text-left">
                <form>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="capitalize text-sm py-2 text-slate-600 font-light">
                        name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="capitalize text-sm py-2 text-slate-600 font-light">
                        phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      />
                    </div>

                    <div className="flex flex-col col-span-2">
                      <label className="capitalize text-sm py-2 text-slate-600 font-light">
                        email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      />
                    </div>
                    <div className="flex flex-col col-span-2">
                      <label className="capitalize text-sm py-2 text-slate-600 font-light">
                        message
                      </label>
                      <textarea
                        name="message"
                        rows="10"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                      send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
