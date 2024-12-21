import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Blog() {
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
            Blog
          </h1>
          <div className="flex items-center space-x-2 mt-2 text-sm md:text-base">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>
            <span>Blog</span>
          </div>
        </div>
      </div>
    </section>
  );
}
