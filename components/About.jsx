import React from "react";
import Image from "next/image";
import bilal from "../public/images/man.png";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="bg-[black] flex flex-col items-center justify-center md:flex-row px-4 py-8"
      >
        <div>
          <Image src={bilal} alt="aboutImage" />
        </div>
        <div className="px-8 md:px-0">
          <h2 className="text-[#20c863] text-3xl font-medium">About Me</h2>
          <h6 className="text-[#20c863] text-xl py-4">Education</h6>
          <ul>
            <li className="text-white">
              <b>Matriculation from</b>
              <span className="text-[#20c863]"> Usman Grammar School</span>
            </li>
            <li className="text-white">
              <b>Intermediate/Pre-Engineering from</b>
              <span className="text-[#20c863]">
                Govt.Superior Science College
              </span>
            </li>
            <li className="text-white">
              <b>Bachelors/Computer Science from</b>
              <span className="text-[#20c863]">
                Virtual University Of Pakistan (Continue)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
