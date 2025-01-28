import Featurecard from "@/components/Featurecard";
import Shop from "@/components/Shop";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiApps2Fill } from "react-icons/ri";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";

async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    category,
    "id": _id,
    price,
    description,
    stockLevel,
    imagePath,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image":image.asset._ref
  }`;
  const products = await client.fetch(query);
  console.log(products);
  return products;
}

export default async function page() {
  const products = await fetchProducts();

  return (
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-7 px-[2rem] lg:px-[4rem] xl:px-[5rem]">
        {products.map((product: Product) => (
          <Shop product={product} key={product.id} />
        ))}
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
      <Featurecard />
    </div>
  );
}
