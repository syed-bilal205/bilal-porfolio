import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-[#2d2e2e] flex flex-col items-center justify-center py-6">
        <hr />
        <p>
          All ©Copy Right Reserved By{" "}
          <span className="text-[#20c863] font-extrabold">Syed Bial</span>
        </p>
      </div>
      <div className="flex justify-center items-center relative">
        <div onClick={goToTop} className="z-40 ">
          <AiOutlineArrowUp
            size={30}
            className="p-1 fixed text-white bg-[#20c863] bottom-[5rem] right-[1rem] rounded-full cursor-pointer flex justify-center items-center"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
