import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaTag } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const BlogSection = () => (
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
    <div className="py-10 px-8 lg:px-16 xl:px-24 ">
      <div className="flex flex-col lg:flex-row gap-14 lg:py-10">
        <div className="lg:basis-[70%] space-y-12 py-5 md:py-10 lg:py-0 ">
          <div>
            <div className="w-full xl:w-[800px]">
              <Image
                src="/blogs/blog_2.jpeg"
                alt="Blog Post"
                width={1000}
                height={500}
                className="h-[250px] sm:h-[300px] md:h-[400px] xl:h-[500px] rounded-[10px] object-cover"
              />
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-sm mt-4">
              <span>
                <FaUser />
              </span>
              <span>Admin</span>
              <span>
                <FaCalendar />
              </span>
              <span>14 Oct 2022</span>
              <span>
                <FaTag />
              </span>
              <span>Wood</span>
            </div>
            <h2 className="text-[25px] md:text-[30px] font-medium my-4">
              Going all-in with millennial design
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Curabitur mattis molestie a iaculis at erat. Nihil cras
              pulvinar mattis nunc sed blandit libero. Pellentesque elit
              ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
              ornare aenean euismod elementum.
            </p>
            <Link
              href="#"
              className="w-[77px] border-b-[1px] border-black pb-2"
            >
              Read more
            </Link>
          </div>
          <div>
            <div className="w-full xl:w-[800px]">
              <Image
                src="/blogs/blog_4.jpeg"
                alt="Blog Post"
                width={1000}
                height={500}
                className="h-[300px] md:h-[400px] xl:h-[500px] rounded-[10px] object-cover"
              />
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-sm mt-4">
              <span>
                <FaUser />
              </span>
              <span>Admin</span>
              <span>
                <FaCalendar />
              </span>
              <span>14 Oct 2022</span>
              <span>
                <FaTag />
              </span>
              <span>Handmade</span>
            </div>
            <h2 className="text-[25px] md:text-[30px] font-medium my-4">
              Exploring new ways of decorating
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <Link
              href="#"
              className="w-[77px] border-b-[1px] border-black pb-2"
            >
              Read more
            </Link>
          </div>
          <div>
            <div className="w-full xl:w-[800px]">
              <Image
                src="/blogs/blog_5.jpeg"
                alt="Blog Post"
                width={1000}
                height={500}
                className="h-[300px] md:h-[400px] xl:h-[500px] rounded-[10px] object-cover"
              />
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-sm mt-4">
              <span>
                <FaUser />
              </span>
              <span>Admin</span>
              <span>
                <FaCalendar />
              </span>
              <span>14 Oct 2022</span>
              <span>
                <FaTag />
              </span>
              <span>Wood</span>
            </div>
            <h2 className="text-[25px] md:text-[30px] font-medium my-4">
              Handmade pieces that took time to make
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <Link
              href="#"
              className="w-[77px] border-b-[1px] border-black pb-2"
            >
              Read more
            </Link>
          </div>
          <div className="lg:hidden">
            <Pagination />
          </div>
        </div>
        <div className="lg:basis-[30%]   flex flex-col md:flex-row-reverse md:justify-end lg:justify-start lg:flex-col gap-5 md:gap-20">
          <Categories />
          <RecentPosts />
        </div>
      </div>
      <div className="hidden lg:block">
        <Pagination />
      </div>
    </div>
  </section>
);

const SearchBox = () => (
  <div className="relative">
    <input
      type="search"
      id="search"
      className="w-full md:min-w-[300px] border rounded-lg p-3"
    />
    <IoSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[1.5rem]" />
  </div>
);

const Categories = () => (
  <div>
    <SearchBox />
    <div className="px-8">
      <h2 className="text-[20px] md:text-[24px] font-medium  py-7">
        Categories
      </h2>
      <div className="flex justify-between text-[#9F9F9F]">
        <div className="flex flex-col gap-2 space-y-5">
          <p>Categories</p>
          <p>Design</p>
          <p>Handmade</p>
          <p>Interior</p>
          <p>Wood</p>
        </div>
        <div className="flex flex-col gap-2 space-y-5">
          <p>2</p>
          <p>8</p>
          <p>7</p>
          <p>1</p>
          <p>6</p>
        </div>
      </div>
    </div>
  </div>
);

const RecentPosts = () => (
  <div className="px-8 lg:py-10">
    <h2 className="text-[20px] md:text-[24px] font-medium py-7 md:pt-0">
      Recent Posts
    </h2>
    <div className="space-y-8">
      <div className="flex gap-3 items-center">
        <Image
          src="/blogs/post_1.jpeg"
          alt="Recent Post"
          width={80}
          height={80}
          className="h-[80px] rounded-[10px]"
        />
        <div>
          <h2 className="text-[14px]">Going all-in with millennial design</h2>
          <p className="text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          src="/blogs/post_2.jpeg"
          alt="Recent Post"
          width={80}
          height={80}
          className="h-[80px] rounded-[10px]"
        />
        <div>
          <h2 className="text-[14px]">Exploring new ways of decorating</h2>
          <p className="text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          src="/blogs/post_3.jpeg"
          alt="Recent Post"
          width={80}
          height={80}
          className="h-[80px] rounded-[10px]"
        />
        <div>
          <h2 className="text-[14px]">
            Handmade pieces that took time to make
          </h2>
          <p className="text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          src="/blogs/post_4.jpeg"
          alt="Recent Post"
          width={80}
          height={80}
          className="h-[80px] rounded-[10px]"
        />
        <div>
          <h2 className="text-[14px]">
            Handmade pieces that took time to make
          </h2>
          <p className="text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          src="/blogs/post_5.jpeg"
          alt="Recent Post"
          width={80}
          height={80}
          className="h-[80px] rounded-[10px]"
        />
        <div>
          <h2 className="text-[14px]">
            Handmade pieces that took time to make
          </h2>
          <p className="text-[12px] text-[#9F9F9F]">03 Aug 2022</p>
        </div>
      </div>
    </div>
  </div>
);

const Pagination = () => (
  <div className="w-full flex justify-center items-center space-x-8 mt-16">
    <button className="w-[55px] h-[55px] bg-[#FBEBB5] rounded-[10px] flex justify-center items-center">
      1
    </button>
    <button className="w-[55px] h-[55px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
      2
    </button>
    <button className="w-[55px] h-[55px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
      3
    </button>
    <button className="w-[100px] h-[55px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
      Next
    </button>
  </div>
);

export default BlogSection;
