import React from "react";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section>
      <div className="relative">
        <div className="bg-cover bg-center w-full h-[216px] md:h-[316px] bg-[url('/bg_image.jpeg')] opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/icon_image.png"
            alt=""
            width={60}
            height={60}
            className="md:w-[77px]"
          />
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium mt-0">
            Contact
          </h1>
          <div className="flex items-center space-x-2 mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="w-full px-[2rem] md:px-[5rem] lg:px-[10rem] py-[2.5rem] capitalize">
        <div className="text-center lg:px-[8rem] pb-[4rem]">
          <h1 className="text-[32px] font-semibold">Get In Touch With Us</h1>
          <p className="text-[#9F9F9F] xl:px-[6rem]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-[3rem]">
          <div className="basis-[50%] m-auto md:m-0">
            <div className="flex gap-5 py-6">
              <FaLocationDot className="text-[1.5rem]" />
              <div>
                <h1 className="text-[1.5rem] font-medium">Address</h1>
                <p>
                  236 5th SE Avenue, <br /> New York NY10000,
                  <br /> United States
                </p>
              </div>
            </div>
            <div className="flex gap-5 py-6">
              <FaPhone className="text-[1.5rem]" />
              <div>
                <h1 className="text-[1.5rem] font-medium">Phone</h1>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex gap-5 py-6">
              <FaClock className="text-[1.5rem]" />
              <div>
                <h1 className="text-[1.5rem] font-medium">Working Time</h1>
                <p>
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="basis-[50%]">
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                placeholder="abc"
                className="border-[1px] rounded-[10px] p-3 md:px-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="text"
                placeholder="Abc@def.com"
                className="border-[1px] rounded-[10px] p-3 md:px-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="This is an optional"
                className="border-[1px] rounded-[10px] p-3 md:px-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="message">Message</label>
              <input
                id="message"
                type="text"
                placeholder="Hi! I'd like to ask about"
                className="border-[1px] rounded-[10px] p-3 md:px-4 outline-none"
              />
            </div>
            <button className="border-[1px] rounded-[15px] px-[3rem] py-[0.5rem] border-black capitalize">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
