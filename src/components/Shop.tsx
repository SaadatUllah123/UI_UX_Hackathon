import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiApps2Fill } from "react-icons/ri";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";

export default function Shop() {
  const Products = [
    {
      title: "Trenton modular sofa_3",
      img: "/products/product_1.png",
      price: "Rs. 25,000.00",
    },
    {
      title: "Granite dining table with dining chair",
      img: "/products/product_2.png",
      price: "Rs. 25,000.00",
    },
    {
      title: "Outdoor bar table and stool",
      img: "/products/product_3.png",
      price: "Rs. 25,000.00",
    },
    {
      title: "Plain console with teak mirror",
      img: "/products/product_4.png",
      price: "Rs. 25,000.00",
    },
    {
      title: "Grain coffee table",
      img: "/products/product_5.png",
      price: "Rs. 15,000.00",
    },
    {
      title: "Kent coffee table",
      img: "/products/product_6.png",
      price: "Rs. 225,000.00",
    },
    {
      title: "Round coffee table_color 2",
      img: "/products/product_7.png",
      price: "Rs. 251,000.00",
    },
    {
      title: "Reclaimed teak coffee table",
      img: "/products/product_8.png",
      price: "Rs. 25,200.00",
    },
    {
      title: "Plain console_",
      img: "/products/product_9.png",
      price: "Rs. 258,200.00",
    },
    {
      title: "Reclaimed teak Sideboard",
      img: "/products/product_10.png",
      price: "Rs. 20,000.00",
    },
    {
      title: "SJP_0825 ",
      img: "/products/product_11.png",
      price: "Rs. 200,000.00",
    },
    {
      title: "Bella chair and table",
      img: "/products/product_12.png",
      price: "Rs. 100,000.00",
    },
    {
      title: "Granite square side table",
      img: "/products/product_13.png",
      price: "Rs. 258,800.00",
    },
    {
      title: "Asgaard sofa",
      img: "/products/product_14.png",
      price: "Rs. 250,000.00",
    },
    {
      title: "Maya sofa three seater",
      img: "/products/product_15.png",
      price: "Rs. 115,000.00",
    },
    {
      title: "Outdoor sofa set",
      img: "/products/product_16.png",
      price: "Rs. 244,000.00",
    },
  ];

  return (
    <section>
      <div>
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
              Shop
            </h1>
            <div className="flex items-center space-x-2 mt-2 text-sm md:text-base">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="text-lg">
                <MdKeyboardArrowRight />
              </span>
              <span>Shop</span>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="xl:h-[80px] flex flex-wrap items-center justify-center md:justify-between bg-[#FAF4F4] mt-[2.5rem] py-4 px-[2rem] lg:px-[4rem] xl:px-[5rem] space-y-4 md:space-y-0 md:flex-nowrap">
          {/* Filter and Layout Buttons */}
          <div className="flex items-center space-x-4 lg:text-[20px]">
            <FaFilter className="" />

            <span className="hidden md:inline">Filter</span>
            <div className="flex items-center space-x-4 lg:pr-4">
              <RiApps2Fill className="" />
              <TfiLayoutListThumbAlt className="" />
            </div>
            <div className="border-l-[2px] border-[#9F9F9F] pl-3 lg:pl-6">
              Showing 1-16 of 32 results
            </div>
          </div>

          {/* Results Count */}

          {/* Show and Sort Options */}
          <div className="flex flex-wrap items-center justify-center space-x-4 w-full md:w-auto">
            <div className="flex items-center space-x-3">
              <span className=" lg:text-[20px]">Show</span>
              <input
                type="number"
                className="w-[55px] text-gray-600 p-2 border rounded bg-white text-center"
                defaultValue="16"
              />
            </div>
            <div className="flex items-center space-x-3">
              <span className="lg:text-[20px] ">Sort by</span>
              <input
                type="text"
                className="w-[100px] lg:w-[150px] text-gray-600 p-2 border rounded bg-white "
                defaultValue="Default"
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-7 px-[2rem] lg:px-[4rem] xl:px-[5rem]">
          {Products.map((product, index) => {
            return (
              <Link href={`/shop/${index + 1}`} key={index}>
                <div className="">
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={1000}
                    height={1000}
                    className="w-full h-[287px]"
                  />
                  <h1>{product.title}</h1>
                  <p>{product.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <div className="flex justify-center items-center gap-3 md:gap-10 text-center py-10 px-[2rem] ">
            <div className="w-[55px] h-[55px] bg-[#FBEBB5] rounded-[10px] flex justify-center items-center">
              1
            </div>
            <div className="w-[55px] h-[55px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
              2
            </div>
            <div className="w-[55px] h-[55px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
              3
            </div>
            <div className="w-[100px] h-[55px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
              Next
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
