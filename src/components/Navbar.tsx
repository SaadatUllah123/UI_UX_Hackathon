"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiContactsLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const pathname = usePathname();
  const navbarBg = pathname === "/" ? "bg-[#FBEBB5]" : "bg-white";

  return (
    <header>
      <div
        className={`${navbarBg} w-full px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[6rem]`}
      >
        {/*  */}
        <div className="h-[80px] bg-none flex justify-between md:justify-end md:gap-[10rem] xl:gap-[18rem] items-center ">
          <nav className="hidden md:flex md:gap-9 lg:gap-12 font-medium">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
          <div className="flex space-x-4 lg:space-x-6 cursor-pointer">
            <Link href="/myaccount">
              <RiContactsLine size={24} />
            </Link>
            <CiSearch size={24} />
            <CiHeart size={24} />
            <AiOutlineShoppingCart size={24} onClick={toggleCart} />
          </div>

          {/* Sidebar for mobile */}
          <div
            className={`fixed z-10 top-0 left-0 h-full bg-[#FBEBB5] w-64 shadow-lg transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="p-4 flex justify-between items-center">
              <button onClick={toggleSidebar}>
                <AiOutlineClose size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 p-4 font-medium">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/blog">blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
        {/*  */}
        {/* Shopping Cart Dropdown */}
        {isCartOpen && (
          <div className="w-full md:w-[417px] fixed top-0 right-0 z-10 h-full bg-white shadow-lg py-6 px-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center ">
                <h2 className="text-[24px] font-bold border-b-[1px] border-[#D9D9D9] w-[250px] pb-6">
                  Shopping Cart
                </h2>
                <button onClick={toggleCart}>
                  <AiOutlineClose size={24} />
                </button>
              </div>
              <div className="pt-8">
                <div className="flex items-center justify-between">
                  <div className="w-[105px] h-[105px] bg-[#fbebb5] rounded-[10px] flex items-center">
                    <Image
                      src="/Asgaard_sofa.png"
                      alt="Product Image"
                      width={110}
                      height={90}
                    />
                  </div>
                  <div>
                    <h3 className="text-[20px]">Asgaard sofa</h3>
                    <p>
                      1 x{" "}
                      <span className="text-[#B88E2F] font-medium">
                        Rs. 250,000.00
                      </span>
                    </p>
                  </div>
                  <button className="w-5 h-5 rounded-[50%] bg-[#9F9F9F] flex items-center justify-center">
                    <AiOutlineClose size={12} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="  ">
              <div className=" flex justify-between border-b-[1px] border-[#D9D9D9] pb-5">
                <span>Subtotal</span>
                <span className="text-[#B88E2F] font-semibold">
                  Rs. 250,000.00
                </span>
              </div>
              <div className="mt-4 flex space-x-2 pt-2">
                <Link href="/cart">
                  <button className=" border border-black text-center  rounded-[50px] px-[3rem] py-[0.25rem]">
                    View Cart
                  </button>
                </Link>
                <Link href="/checkout">
                  <button className=" border border-black text-center  rounded-[50px] px-[3rem] py-[0.25rem]">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
