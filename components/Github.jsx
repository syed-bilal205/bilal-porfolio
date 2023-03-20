import React from "react";
import Image from "next/image";
import Link from "next/link";
import gitImg from "../public/images/syed-bilal205.png";

const Github = () => {
  return (
    <>
      <div className="bg-[#2d2e2e] flex flex-col items-center gap-4 justify-center py-10">
        <h3 className="text-[#20c863] bg-[#2d2e2e] text-center font-bold text-5xl tracking-widest py-4">
          Want to see all Projects
        </h3>
        <Link href={"https://github.com/syed-bilal205"}>
          <Image src={gitImg} alt="githubImage"></Image>
        </Link>

        <h3 className="text-[#20c863] bg-[#2d2e2e] text-center font-bold text-5xl tracking-widest py-4">
          FIND ME ON GITHUB
        </h3>
      </div>
      <hr />
    </>
  );
};

export default Github;
