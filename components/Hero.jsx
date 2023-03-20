import React from "react";
import Typewritter from "typewriter-effect";
import styles from "../styles/Home.module.css";
import Download from "./Download";

const Hero = () => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <h6 className="text-white font-bold tracking-widest">HELLO I M</h6>
        </div>
        <div className="text-[#20c863] font-extrabold text-5xl md:text-9xl text-center">
          <Typewritter
            options={{
              strings: [
                "SYED<br>BILAL",
                "FRONTEND<br>DEVELOPER",
                "WEB<br>DESIGNER",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <br />
        <Download />
      </div>
    </>
  );
};

export default Hero;
