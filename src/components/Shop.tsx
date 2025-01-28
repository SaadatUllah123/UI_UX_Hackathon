import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiApps2Fill } from "react-icons/ri";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";

export default function Shop({ product }: { product: Product }) {
  // const Products = [
  //   {
  //     title: "Trenton_modular_sofa_3",
  //     img: "/products/Trenton modular sofa_3.png",
  //     price: "Rs. 25,000.00",
  //   },
  //   {
  //     title: "Granite_dining_table_with_dining_chair",
  //     img: "/products/Granite_dining_table_with_dining_chair.png",
  //     price: "Rs. 25,000.00",
  //   },
  //   {
  //     title: "Outdoor bar table and stool",
  //     img: "/products/product_3.png",
  //     price: "Rs. 25,000.00",
  //   },
  //   {
  //     title: "Plain console with teak mirror",
  //     img: "/products/product_4.png",
  //     price: "Rs. 25,000.00",
  //   },
  //   {
  //     title: "Grain coffee table",
  //     img: "/products/product_5.png",
  //     price: "Rs. 15,000.00",
  //   },
  //   {
  //     title: "Kent coffee table",
  //     img: "/products/product_6.png",
  //     price: "Rs. 225,000.00",
  //   },
  //   {
  //     title: "Round coffee table_color 2",
  //     img: "/products/product_7.png",
  //     price: "Rs. 251,000.00",
  //   },
  //   {
  //     title: "Reclaimed teak coffee table",
  //     img: "/products/product_8.png",
  //     price: "Rs. 25,200.00",
  //   },
  //   {
  //     title: "Plain console_",
  //     img: "/products/product_9.png",
  //     price: "Rs. 258,200.00",
  //   },
  //   {
  //     title: "Reclaimed teak Sideboard",
  //     img: "/products/product_10.png",
  //     price: "Rs. 20,000.00",
  //   },
  //   {
  //     title: "SJP_0825 ",
  //     img: "/products/product_11.png",
  //     price: "Rs. 200,000.00",
  //   },
  //   {
  //     title: "Bella chair and table",
  //     img: "/products/product_12.png",
  //     price: "Rs. 100,000.00",
  //   },
  //   {
  //     title: "Granite square side table",
  //     img: "/products/product_13.png",
  //     price: "Rs. 258,800.00",
  //   },
  //   {
  //     title: "Asgaard sofa",
  //     img: "/products/product_14.png",
  //     price: "Rs. 250,000.00",
  //   },
  //   {
  //     title: "Maya sofa three seater",
  //     img: "/products/product_15.png",
  //     price: "Rs. 115,000.00",
  //   },
  //   {
  //     title: "Outdoor sofa set",
  //     img: "/products/product_16.png",
  //     price: "Rs. 244,000.00",
  //   },
  // ];

  return (
    <div>
      <Link href={`/shop/${product.id}`}>
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
    </div>
  );
}
