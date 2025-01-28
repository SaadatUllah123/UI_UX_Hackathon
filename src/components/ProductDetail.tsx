"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function ProductDetail({
  image,
  title,
  price,
  description
}: {
  image: string;
  title: string;
  price: number;
  description:string
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-5 py-7 px-[2rem] lg:px-[4rem] xl:px-[6rem]">
      {/* Image Gallery */}
      <div className="flex gap-5 justify-center">
        <div className="flex flex-col gap-5 items-start justify-start">
          {[image,image,image,image].map((image, index) => (
            <div key={index} className=" rounded-[10px] flex justify-center items-center">
              <Image
                src={urlFor(image).url()}
                alt="Thumbnail"
                width={83}
                height={55}
                className="w-[75px] h-[80px] rounded-lg cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className=" rounded-[10px] flex justify-center items-cente">
          <Image
            src={urlFor(image).url()}
            alt="Product"
            width={481}
            height={391}
            className="w-[423px] md:h-[450px] rounded-lg"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col sm:m-auto">
        <h1 className="text-[30px] xl:text-[42px]">{title}</h1>
        <p className="text-[20px] md:text-[24px] font-medium text-[#9F9F9F]">{`Rs. ${price}`}</p>
        <div className="flex items-center mt-2">
          <span className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <svg key={index} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.92 5.764 1.396 8.1-7.344-3.861-7.343 3.861 1.396-8.1-5.92-5.764 8.2-1.192z" />
              </svg>
            ))}
          </span>
          <span className="border-l-[1px] text-[13px] ml-3 pl-3 text-[#9F9F9F]">5 Customer Reviews</span>
        </div>
        <p className=" mt-5">{description}</p>
        <div className="mt-4">
          <h2 className="text-[14px] text-[#9F9F9F]">Size</h2>
          <div className="flex items-center mt-2 space-x-4">
            {['L', 'XL', 'XS'].map((size, index) => (
              <button key={index} className={`w-[30px] h-[30px] ${size === 'L' ? 'bg-[#FBEBB5]' : 'bg-[#FAF4F4]'} rounded-[5px] focus:outline-none`}>
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-[14px] text-[#9F9F9F]">Color</h2>
          <div className="flex items-center mt-2 space-x-4">
            {['#816DFA', 'black', '#CDBA7B'].map((color, index) => (
              <button key={index} className={`w-[30px] h-[30px] ${color === 'black' ? 'bg-black' : `bg-[${color}]`} rounded-full focus:outline-none`}></button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center gap-5">
          <div className="w-[123px] h-[64px] border border-[#9F9F9F] rounded-[10px] flex justify-center items-center">
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center mx-3"
            />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="w-[215px] h-[64px] md:text-[20px] rounded-[15px] border border-black">
            Add To Cart
          </button>
        </div>

        <div className="mt-10 pt-10 border-t border-[#D9D9D9] flex gap-5 text-[#9F9F9F]">
          <div className="flex flex-col gap-1">
            <p>SKU</p>
            <p>Category</p>
            <p>Tags</p>
            <p>Share</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3">
              <p>:</p>
              <p>SS001</p>
            </div>

            <div className="flex gap-3">
              <p>:</p>
              <p>Sofas</p>
            </div>
            <div className="flex gap-3">
              <p>:</p>
              <p>Sofa, Chair, Home, Shop</p>
            </div>

            <div className="flex gap-3">
              <p>:</p>
              <div className="flex justify-center items-center gap-5 text-black">
                <Link href="">
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <Link href="">
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link href="">
                  <AiFillTwitterCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
