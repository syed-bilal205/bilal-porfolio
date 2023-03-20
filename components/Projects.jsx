import React from "react";
import Image from "next/image";
import Link from "next/link";
import Phone from "../public/images/phone.png";
import mobile from "../public/images/mobileWeb.png";
import styles from "../styles/Home.module.css";
import laptopWeb from "../public/images/laptopWeb.png";
import laptop from "../public/images/laptop.png";

const Projects = () => {
  return (
    <>
      <h3
        id="projects"
        className="text-[#20c863] bg-[#2d2e2e] text-center font-bold text-5xl tracking-widest px-8 py-4"
      >
        PROJECTS
      </h3>
      <div className={styles.project}>
        <div className="flex flex-col items-center  overflow-hidden px-8 gap-4 lg:flex-row lg:justify-around lg:max-h-max">
          <div className="w-[300px] h-[600px] relative lg:transform-none">
            <Image src={Phone} alt="Phone Image"></Image>
            <div className="rounded-3xl absolute w-[264px] h-[567px] top-[17px] left-[18px]   overflow-scroll scrollbar-hide cursor-pointer">
              <Image className="w-full" src={mobile} alt="Mobile Image"></Image>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 py-6">
            <h1 className="text-7xl font-extrabold text-center text-[#555]">
              TATOO STUDIO
            </h1>
            <Link
              href={"https://tatoo-1a670s53c-syed-bilal205.vercel.app/"}
              target="_blank"
            >
              <button className="focus:outline-none bg-transparent py-[10px] px-[10px] border-2 border-[#555] hover:bg-[#555] text-white ease-out duration-300">
                Live Demo
              </button>
            </Link>
          </div>
        </div>

        <div className="flex  flex-col-reverse overflow-hidden gap-4 px-16  items-center  lg:flex-row lg:justify-around lg:max-h-max">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-7xl  font-extrabold text-center text-[#555]">
              PIZZA APP
            </h1>
            <Link href={"https://pizza-app-azure.vercel.app/"} target="_blank">
              <button className="focus:outline-none bg-transparent py-[10px] px-[10px] border-2 border-[#555] hover:bg-[#555] text-white ease-out duration-300">
                Live Demo
              </button>
            </Link>
          </div>
          <div className="relative w-[330px] h-[379px] md:w-[500px] lg:transform-none">
            <Image src={laptop} alt="Laptop Image"></Image>
            <div className="absolute w-[245px] h-[140px] top-[18px] left-[40px] md:w-[365px] md:h-[230px] md:left-[65px]   overflow-scroll scrollbar-hide cursor-pointer">
              <Image
                className="w-full"
                src={laptopWeb}
                alt="LAptop web Image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
