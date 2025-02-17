import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";

async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"][0..3] {
    "id": _id,
    name,
    price,
    "image": image.asset._ref
  }`;

  return await client.fetch(query);
}

export default async function Hero() {
  const blogPosts = [
    {
      src: "/blogs/blog_1.jpeg",
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      time: "5 min",
    },
    {
      src: "/blogs/blog_2.jpeg",
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      time: "5 min",
    },
    {
      src: "/blogs/blog_3.jpeg",
      title: "Going all-in with millennial design",
      date: "12th Oct 2022",
      time: "5 min",
    },
  ];
  const products = await fetchProducts();

  return (
    <main>
      <section>
        <div className="bg-[#FBEBB5] h-full flex flex-col-reverse md:flex-row justify-between items-center lg:gap-[5rem] pb-[2.5rem] md:pb-0 capitalize">
          <div className="md:pl-[5rem] xl:pl-[8rem]">
            <h1 className="text-[35px] sm:text-[40px] md:text-[48px] lg:text-[53px] xl:text-[62px] font-medium">
              Rocket single seater
            </h1>
            <h2 className="w-[121px] text-[24px] font-medium border-b-2 border-black mt-3 pb-2 mx-auto md:mx-0">
              shop now
            </h2>
          </div>
          <div>
            <Image
              src="/home/Rocket_single_seater.png"
              alt="Asgaard sofa"
              width={853}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FAF4F4] py-[3rem] px-[5rem]">
        <div className="flex flex-col md:flex-row justify-center gap-[5rem]">
          <div className="basis-[50%] md:px-[2rem]">
            <Image
              src="/home/table.png"
              alt="Side table"
              width={300}
              height={300}
              className="m-auto"
            />
            <div>
              <h1 className="text-[36px] font-medium">Side table</h1>
              <h2 className="w-[121px] text-[24px] font-medium border-b-[2px] border-black ">
                View More
              </h2>
            </div>
          </div>

          <div className="basis-[50%] md:px-[2rem]">
            <Image
              src="/home/sofa.png"
              alt="Side table"
              width={300}
              height={300}
              className="m-auto"
            />
            <div>
              <h1 className="text-[36px] font-medium">Side table</h1>
              <h2 className="w-[121px] text-[24px] font-medium border-b-[2px] border-black ">
                View More
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Top Picks For You</h2>
          <p className="text-gray-600 mt-2">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-7 px-[2rem] lg:px-[4rem] xl:px-[5rem]">
          {products.map((product: Product) => (
            <Link key={product.id} href={`/shop/${product.id}`}>
              <div className="">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="w-full h-[287px] rounded-[10px]"
                />
                <h1 className="font-semibold py-1">{product.name}</h1>
                <p className="font-medium">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-[#FFF9E5] h-[639p] flex flex-col md:flex-row justify-center items-center gap-[2.5rem] lg:gap-[5rem] text-center py-[2.5rem] lg:py-0 capitalize">
          <div>
            <Image
              src="/Asgaard_sofa.png"
              alt="Asgaard_sofa"
              width={800}
              height={600}
            />
          </div>
          <div className=" md:pr-[2.5rem]">
            <h2 className="text-[24px] font-medium">New Arrivals</h2>
            <h1 className="lg:w-[300px] text-[35px] sm:text-[40px]  md:text-[48px] font-bold">
              Asgaard sofa
            </h1>
            <button className="lg:text-[20px] border-[1px] px-[3rem] py-[0.5rem] border-black capitalize mt-5">
              Order Now
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className=" text-center capitalize py-[2.5rem] px-[2rem] md:px-[3rem] lg:px-[5rem]">
          <div className="mb-[4rem] ">
            <h2 className="text-[36px] font-medium">Our Blogs</h2>
            <p className="text-gray-600 mt-2">
              Find a bright ideal to suit your taste with our great selection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
            {blogPosts.map((post, index) => (
              <div key={index}>
                <Link href="/blog">
                  <Image
                    src={post.src}
                    alt={post.title}
                    width={393}
                    height={393}
                    className="rounded-[10px]"
                  />
                </Link>
                <div className="py-5">
                  <p className="text-[20px]">{post.title}</p>
                  <h1 className="text-[24px] font-medium py-2">
                    <Link href="/blog">Read More</Link>
                    <div className="border-b-2 w-[115px] border-black mx-auto"></div>
                  </h1>
                  <p className="flex justify-center items-center gap-2">
                    <FaRegClock /> {post.time}{" "}
                    <CiCalendar className="text-[1.25rem]" />
                    {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <h1 className="text-[20px] border-b-2 w-[115px] border-black mx-auto mt-10">
              View All Post
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="relative capitalize ">
          <div className="bg-cover bg-center w-full h-[250px] md:h-[350px] lg:h-[400px] bg-[url('/inst_bg.jpeg')] opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-[35px] md:text-[45px] xl:text-[55px] font-bold">
              Our Instagram
            </h1>
            <h2 className="xl:text-[20px]">Follow our store on Instagram</h2>
            <button className="rounded-[50px] px-[3rem] xl:px-[3.5rem] xl:text-[1.2rem] py-[0.5rem] bg-[#FAF4F4] mt-5 capitalize shadow-[0px_3px_10px_rgba(0,0,0,0.2)]">
              follow us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
