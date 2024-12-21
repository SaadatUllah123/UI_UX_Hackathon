import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" body-font h-[555p] capitalize ">
      <div className="container px-8 py-16 mx-auto border-b-[1px] border-[#9F9F9F] font-[500]">
        <div className="flex flex-wrap md:text-left text-center order-first leading-[3]">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 self-center">
            <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3 ">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </h2>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
              Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="Home">Home</Link>
              </li>
              <li>
                <Link href="Home">shop</Link>
              </li>
              <li>
                <Link href="Home">blog</Link>
              </li>
              <li>
                <Link href="Home">contact</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-sm mb-3">
              Help
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={""}>Payment Options</Link>
              </li>
              <li>
                <Link href={""}>Returns</Link>
              </li>
              <li>
                <Link href={""}>Privacy Policies</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-[#9F9F9F]">
              Newsletter
            </h2>
            <div className="flex gap-5 ">
              <input
                type="search"
                placeholder="Enter Your Email Address"
                className="border-b-[1px] border-[#000000] font-[400]"
              />
              <button className="border-b-[1px] border-[#000000]">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <div className="container px-8 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p>2022 Meubel House. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}
