import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const MeSection = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-20 text-center md:text-left">
        <div className="shadow-xl font-roboto shadow-blue-800 my-8 px-8">
          <h1 className=" text-green-800 text-2xl py-4 max-w-5xl text-center mx-auto ">
            Front End Web Developer
          </h1>
          <p className="py-2 max-w-2xl mx-auto text-2xl text-blue-900">
            I am Md Kamrul Jaman Rabbi,
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            I love to work on web application using technologies like React JS, Next JS, Express JS,
            MUI and Tailwind. Also working With Redux for state management.
          </p>

          <p className="py-4 max-w-2xl mx-auto">
            I have flourished myself as a team player by working in robotics and computer clubs at
            the university level, and I have been involved in voluntary services in social
            organizations. All of these experiences have enabled me to develop strong networking
            skills, effective communication skills, negotiation skills, and interpersonal skills,
            which motivate me to be a sensible human being. Throughout my education, I have always
            focused on the practical implications of gathered knowledge that help me to strengthen
            my soft skills as well, and that includes MS Office, PowerPoint, and web development.
            Now, I am looking forward to completing my undergraduate program at a German university
            that will help me to develop and flourish in my career
          </p>

          <p className="py-4 max-w-2xl mx-auto">
            I am an executive member of the Green Robotics Society (GRS) . This is the club of our
            University.The main objective of this club is to provide a supportive and engaging
            environment where members can explore and develop their interests in robotics while also
            contributing to the advancement of the field. It is aimed at enhancing student's
            understanding of the robotics topics introduced in the classroom settings. Every year
            the club organizes workshop to develop their robotics skills. In addition, as an
            executive member of a robotics club,I would like to be a role model for other members
            and demonstrate a passion for robotics and a willingness to learn and improve your
            skills.I also be responsible for mentoring and supporting newer members of the club,
            helping them to develop their knowledge and skills in robotics.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          {/* <Link href="/resume.pdf">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link> */}

          <Link href="/experience">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeSection;
