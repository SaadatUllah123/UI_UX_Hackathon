import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

export default function Cart() {
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
            Cart
          </h1>
          <div className="flex items-center space-x-2 mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>
            <span>Cart</span>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full flex flex-col lg:flex-row justify-center md:items-center lg:items-start gap-7 py-[3rem] lg:py-[4rem] px-[2rem] md:px-[3rem] lg:px-[5rem]">
        <div className="md:w-[680px] flex  sm:flex-col gap-6">
          <div className=" md:w-[100%] sm:bg-[#FFF9E5] flex flex-col sm:flex-row justify-between items-center  py-2 sm:px-8 lg:px-3">
            <p className=" bg-[#FFF9E5] mt-8 py-2 sm:mt-0 sm:ml-10 px-6">Product</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-8">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-5">
                <p className="bg-[#FFF9E5] py-2 px-5">Price</p>
                <p className="bg-[#FFF9E5] py-2 px-5">Quantity</p>
              </div>
              <p className="bg-[#FFF9E5] py-2 px-5">Subtotal</p>
            </div>
          </div>
          <div className="w-[100%] flex flex-col sm:flex-row items-center gap-8 p-2 ">
            <div className="w-[106px] h-[106px] bg-[#fbebb5] rounded-[10px] flex items-center">
              <Image
                src="/Asgaard_sofa.png"
                alt="Product Image"
                width={110}
                height={90}
              />
            </div>
            <span className="text-[#9F9F9F] sm:ml-4">Asgaard sofa</span>
            <div className="sm:ml-auto flex flex-col sm:flex-row items-center gap-2">
              <div className="text-[#9F9F9F] p-2">Rs. 250,000.00</div>
              <div className="p-2">
                <input
                  type="number"
                  className="w-12 border rounded p-1 text-center"
                  value="1"
                />
              </div>
              <div className="p-2">Rs. 250,000.00</div>
              <FaBoxArchive className="text-[#FBEBB5] text-[1.25rem] hidden sm:block" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-[#FFF9E5] md:w-[680px] lg:w-[393px] p-[1rem_3rem_4rem] text-center capitalize">
            <h1 className="text-[32px] font-semibold mb-10">Cart Totals</h1>
            <div className="flex justify-between  my-[1.5rem]">
              <h1 className="text-[1.1rem] font-medium">Subtotal</h1>
              <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between my-[1.5rem]">
              <h1 className="text-[1.1rem] font-medium">total</h1>
              <p className="text-[#B88E2F] text-[1.25rem] font-medium">
                Rs. 250,000.00
              </p>
            </div>
            <button className="border-[1px] rounded-[15px] px-[3rem] py-[0.5rem] mt-10 border-black capitalize">
              check out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
