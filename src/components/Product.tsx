"use client";
import Image from "next/image";
import Link from "next/link";

// components/ProductDetail.js
// import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

const Product = () => {
  // const [quantity, setQuantity] = useState(1);
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
  ];

  // const [activeTab, setActiveTab] = useState("description");

  // const handleTabClick = () => {
  //   setActiveTab("");
  // };

  return (
    <section>
      <ProductDetails />
      
      {/*  */}
      <div className="border-y border-[#D9D9D9] text-[#9F9F9F]">
        <div className="py-7 px-[2rem] lg:px-[4rem] xl:px-[6rem]">
          <ul className="flex flex-wrap justify-center gap-5 md:gap-10">
            <li className="text-[20px] lg:text-[24px] text-black">
              Description
            </li>
            <li className="text-[20px] lg:text-[24px] ">
              Additional Information
            </li>
            <li className="text-[20px] lg:text-[24px]">Reviews [5]</li>
          </ul>

          <div className={`p-6`}>
            <div className=" md:px-[5rem]">
              <p className="">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p className=" mt-3">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <div className="h-[348px] bg-[#FFF9E5] rounded-[10px] ">
                <Image
                  src="/cloud_sofa_1.png"
                  alt="Sofa Image"
                  width={828}
                  height={551}
                  className=""
                />
              </div>
              <div className=" h-[348px] bg-[#FFF9E5] rounded-[10px]">
                <Image
                  src="/cloud_sofa_2.png"
                  alt="Sofa Image"
                  width={828}
                  height={551}
                  className=""
                />
              </div>
            </div>
          </div>

          
        </div>
      </div>

      {/*  */}
      <div className="bg-white py-10 px-[2rem] lg:px-[4rem] xl:px-[6rem]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Top Picks For You</h2>
          <p className="text-gray-600 mt-2 md:px-[5rem]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 place-items-center ">
          {Products.map((product, index) => {
            return (
              <Link href={`/shop/${index + 1}`} key={index}>
                <div>
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={500}
                    height={500}
                  />
                  <h1>{product.title}</h1>
                  <p>{product.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <h2 className="w-[121px] text-[24px] font-medium border-b-[2px] border-black m-auto mt-14">
            View More
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Product;
