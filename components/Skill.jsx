import React from "react";
import Image from "next/image";
import html from "../public/images/HTML.png";
import css from "../public/images/CSS.png";
import javascript from "../public/images/JAVASCRIPT.png";
import bootstrap from "../public/images/BOOTSTRAP.png";
import next from "../public/images/next-js.svg";
import react from "../public/images/REACT.png";
import scss from "../public/images/SCSS.png";
import tailwind from "../public/images/TAILWIND.png";

const Skill = () => {
  return (
    <>
      <h3
        id="skills"
        className="text-[#20c863] bg-[#2d2e2e] text-center font-bold text-5xl tracking-widest py-6"
      >
        SKILLS
      </h3>
      <div className="bg-[#2d2e2e] w-full flex flex-col items-center justify-center gap-8 px-8 md:justify-around md:flex-row">
        <Image
          alt="Skill Icon Image"
          className="w-[15rem] cursor-pointer py-3 grayscale ease-in duration-500 hover:grayscale-0 hover:scale-125"
          src={html}
        />
        <Image
          alt="Skill Icon Image"
          className="w-[15rem] cursor-pointer py-3 grayscale ease-in duration-500 hover:grayscale-0 hover:scale-125"
          src={css}
        />
        <Image
          alt="Skill Icon Image"
          className="w-[15rem] cursor-pointer py-3 grayscale ease-in duration-500 hover:grayscale-0 hover:scale-125"
          src={javascript}
        />
        <Image
          alt="Skill Icon Image"
          className="w-[18rem] cursor-pointer py-3 grayscale ease-in duration-500 hover:grayscale-0 hover:scale-125"
          src={bootstrap}
        />
        <Image
          alt="Skill Icon Image"
          className="w-[15rem] cursor-pointer py-3 grayscale ease-in duration-500 hover:grayscale-0 hover:scale-125"
          src={scss}
        />
        <Image
          alt="Skill Icon Image"
          className="w-[15rem] cursor-pointer py-3 grayscale ease-in duration-500 hover:grayscale-0 hover:scale-125"
          src={tailwind}
        />
        <Image
          alt="Skill Icon Image"
          className="w-[15rem] cursor-pointer py-3 grayscale ease-in duration-500 hover:grayscale-0 hover:rotate-180"
          src={react}
        />
        <Image
          alt="Skill Icon Image"
          className="w-[10rem] cursor-pointer py-3 ease-in duration-500 hover:scale-125"
          src={next}
        />
      </div>
    </>
  );
};

export default Skill;
