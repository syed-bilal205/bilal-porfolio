import React from "react";
import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <h3
        id="contact"
        className="text-[#20c863] bg-[#2d2e2e] text-center font-bold text-5xl tracking-widest py-4"
      >
        Contact
      </h3>
      <div className="bg-[#2d2e2e] md:px-8 px-4 py-2 flex flex-col gap-3 md:flex-row items-center justify-around">
        <form action="https://formspree.io/f/xnqypave" method="POST">
          <div className=" py-3 flex flex-col  gap-4 text-white">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                name="username"
                autoComplete="off"
                required
                className="md:w-[50%] focus:outline-none rounded border-2 border-[#555] p-2 bg-transparent "
                placeholder="Your Name"
              />
              <input
                type="email"
                name="Email"
                autoComplete="off"
                required
                className="md:w-[50%] focus:outline-none rounded border-2 border-[#555] p-2 bg-transparent"
                placeholder="Your Email"
              />
            </div>
            <input
              type="text"
              name="subject"
              autoComplete="off"
              required
              placeholder="Subject"
              className="p-2 focus:outline-none bg-transparent rounded border-2 border-[#555]"
            />
            <textarea
              type="text"
              name="message"
              autoComplete="off"
              required
              placeholder="Message"
              className="p-2 focus:outline-none bg-transparent rounded border-2 border-[#555]"
            />
            <Link href={"https://tatoo-1a670s53c-syed-bilal205.vercel.app/"}>
              <button
                value="send"
                className="focus:outline-none bg-transparent py-[10px] px-[10px] border-2 border-[#555] hover:bg-[#555] text-white ease-out duration-300"
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
        <div className="text-[#20c863] font-bold  flex items-center justify-center flex-col gap-6">
          <div className="flex items-center justify-center ">
            <GoLocation size={20} />
            <Link
              href={
                "https://www.google.com/maps/place/Plot+750+C,+Block+4+Shah+Faisal+Colony+4+Shah+Faisal+Colony,+Karachi,+Karachi+City,+Sindh+75230,+Pakistan/@24.8790837,67.1368412,18z/data=!4m12!1m6!3m5!1s0x3eb33977891f032b:0xfb6f70f4a03fbec!2sNational+Bank+of+Pakistan!8m2!3d24.8786484!4d67.139803!3m4!1s0x3eb3397747ce7003:0x456ae99c484719d6!8m2!3d24.8793877!4d67.1366396"
              }
            >
              <p>4/750 Shah Faisal Colony,Karachi</p>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineMobile size={20} />
            <Link href={"tel:+92 3452121396"}>+92 3452121396</Link>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineMail size={20} />
            <Link href={"https://mail.google.com/mail/u/0/#inbox"}>
              syedb4115@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
