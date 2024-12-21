import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

export default function Checkout() {
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
            Checkout
          </h1>
          <div className="flex items-center space-x-2 mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>
            <span>Checkout</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:gap-[4rem] xl:gap-[8rem] px-[2rem] md:px-[5rem] py-[2.5rem] capitalize">
        <div className=" py-[1rem] ">
          <h1 className="text-[36px] font-semibold ">Billing details</h1>
          <div className="py-5">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-6 md:mb-0">
              <div className="basis-[50%]  flex flex-col gap-3 md:my-6">
                <label htmlFor="">first name</label>
                <input
                  type="text"
                  className=" border-[1px] rounded-[10px] p-3 md:px-4 outline-none "
                />
              </div>
              <div className="basis-[50%] flex flex-col gap-3 md:my-6">
                <label htmlFor="">last name</label>
                <input
                  type="text"
                  className=" border-[1px] rounded-[10px] p-3 md:px-4 outline-none "
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Company Name (Optional)</label>
              <input
                type="text"
                className="lg:w-[453px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
              />
            </div>
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="">Country / Region</label>
              <input
                type="text"
                className="lg:w-[453px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
              />
            </div>
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="">Street address</label>
              <input
                type="text"
                className="lg:w-[453px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
              />
            </div>
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="">Town / City</label>
              <input
                type="text"
                className="lg:w-[453px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
              />
            </div>
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="">Province</label>
              <input
                type="text"
                className="lg:w-[453px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
              />
            </div>
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="">ZIP code</label>
              <input
                type="text"
                className="lg:w-[453px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
              />
            </div>
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                className="lg:w-[453px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
              />
            </div>
            <div className="flex flex-col gap-3 my-6">
              <label htmlFor="">Email address</label>
              <input
                type="text"
                className="lg:w-[453px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="additional information"
                className="lg:w-[453px] border-[1px] rounded-[10px] p-3 md:px-8 outline-none "
              />
            </div>
          </div>
        </div>
        <div className=" py-[1rem]">
          <div className="flex justify-between border-b-[1px] border-[#D9D9D9] leading-[2.25rem] mb-5 pb-6">
            <div>
              <h1 className="text-[1.5rem] font-medium">Product</h1>
              <p>
                <span className=" text-[#9F9F9F]">Asgaard sofa</span> x 1
              </p>
              <p className="text-[1.1rem] font-semibold">Subtotal</p>
              <p className="text-[1.1rem] font-semibold">Total</p>
            </div>
            <div className="text-end">
              <h1 className="text-[1.5rem] font-medium">Subtotal</h1>
              <p className="text-[1.1rem]">Rs. 250,000.00</p>
              <p className="text-[1.1rem]">Rs. 250,000.00</p>
              <p className="text-[1.25rem] text-[#B88E2F] font-bold">
                Rs. 250,000.00
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">
              <div className="inline-block w-[10px] h-[10px] bg-black rounded-[50%] mr-[0.25rem]"></div>{" "}
              Direct Bank Transfer
            </h1>
            <p className="text-[#9F9F9F] py-2">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="text-[#9F9F9F] py-2 flex flex-col gap-3">
              <div>
                <input type="radio" className="mr-3" />
                <label htmlFor="">Direct Bank Transfer</label>
              </div>
              <div>
                <input type="radio" className="mr-3" />
                <label htmlFor="">Cash On Delivery</label>
              </div>
            </div>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button className="border-[1px] rounded-[15px] px-[3rem] py-[0.5rem] border-black text-center mt-7 capitalize">
              place order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
