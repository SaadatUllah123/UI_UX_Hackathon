import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

export default function Myaccount() {
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
            My Account
          </h1>
          <div className="flex items-center space-x-2 mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>
            <span>My Account</span>
          </div>
        </div>
      </div>

      <div className="h-[760p] bg-[#fff] grid grid-cols-1  md:grid-cols-2 justify-items-center  py-3 px-5  capitalize">
        <div className="w-[400px] lg:w-[500px] py-5 px-[40px]">
          <h1 className="text-[36px] font-semibold">login</h1>
          <form action="" className="">
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="">username or email address</label>
              <input
                type="text"
                className="lg:w-[350px]  border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
              />
            </div>
            <div className="flex flex-col gap-3 my-5">
              <label htmlFor="">password</label>
              <input
                type="text"
                className="lg:w-[350px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none"
              />
            </div>
            <div className="mt-6">
              <input type="checkbox" name="" id="" className="mr-2" />
              <label htmlFor="">remember me</label>
            </div>
            <div className="flex items-center gap-8 mt-5">
              <button className="border-[1px] rounded-[15px] px-[3rem] py-[0.5rem] border-black capitalize">
                log in
              </button>
              <p>last your password</p>
            </div>
          </form>
        </div>
        <div className="w-[400px] lg:w-[500px] py-5 px-[40px]">
          <h1 className="text-[36px] font-semibold ">Register</h1>
          <div className="flex flex-col gap-3 mt-6">
            <label htmlFor="">email </label>
            <input
              type="text"
              name=""
              id=""
              className="lg:w-[350px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
            />
          </div>
          <p className="mt-5 ">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="mt-2 mb-5 ">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <button className="border-[1px] rounded-[15px] px-[3rem] py-[0.5rem] border-black capitalize">
            Register
          </button>
        </div>
      </div>
    </section>
  );
}
