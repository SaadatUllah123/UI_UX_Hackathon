"use client";
import Image from "next/image";
// components/ProductDetail.js
import React, { useState } from "react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-col gap-5 items-start justify-start">
            <div className="w-[75px] h-[80px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
              <Image
                src="/Maya_sofa_three_seater_2.png"
                alt="Thumbnail"
                width={83}
                height={55}
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
            </div>
            <div className="w-[75px] h-[80px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
              <Image
                src="/Outdoor_sofa_set _2.png"
                alt="Thumbnail"
                width={83}
                height={55}
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
            </div>
            <div className="w-[75px] h-[80px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
              <Image
                src="/Outdoor_sofa_set_2.png"
                alt="Thumbnail"
                width={83}
                height={55}
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
            </div>
            <div className="w-[75px] h-[80px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
              <Image
                src="/Stuart_sofa_1.png"
                alt="Thumbnail"
                width={83}
                height={55}
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
            </div>
          </div>
          <div className="w-[423px] h-[500px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
            <Image
              src="/Asgaard_sofa.png"
              alt="Product"
              width={481}
              height={391}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Asgaard Sofa</h1>
          <p className="text-xl text-gray-500">Rs. 250,000.00</p>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-yellow-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.92 5.764 1.396 8.1-7.344-3.861-7.343 3.861 1.396-8.1-5.92-5.764 8.2-1.192z" />
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.92 5.764 1.396 8.1-7.344-3.861-7.343 3.861 1.396-8.1-5.92-5.764 8.2-1.192z" />
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.92 5.764 1.396 8.1-7.344-3.861-7.343 3.861 1.396-8.1-5.92-5.764 8.2-1.192z" />
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.92 5.764 1.396 8.1-7.344-3.861-7.343 3.861 1.396-8.1-5.92-5.764 8.2-1.192z" />
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.92 5.764 1.396 8.1-7.344-3.861-7.343 3.861 1.396-8.1-5.92-5.764 8.2-1.192z" />
              </svg>
            </span>
            <span className="ml-2 text-gray-600">(5 Customer Reviews)</span>
          </div>
          <p className="mt-4 text-gray-700">
            Setting the bar as one of the loudest speakers in its class, the
            Elac Uni-Fi UB5 has a well-balanced sound which boasts a clear
            midrange and extended highs for a more natural sound.
          </p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Size</h2>
            <div className="flex items-center mt-2 space-x-2">
              <button className="w-10 h-10 bg-gray-200 rounded-full focus:outline-none">
                L
              </button>
              <button className="w-10 h-10 bg-gray-200 rounded-full focus:outline-none">
                XL
              </button>
              <button className="w-10 h-10 bg-gray-200 rounded-full focus:outline-none">
                XXL
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Color</h2>
            <div className="flex items-center mt-2 space-x-2">
              <button className="w-8 h-8 bg-purple-600 rounded-full focus:outline-none"></button>
              <button className="w-8 h-8 bg-black rounded-full focus:outline-none"></button>
              <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none"></button>
              <button className="w-8 h-8 bg-yellow-600 rounded-full focus:outline-none"></button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className="w-10 h-10 bg-gray-200 rounded-full focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center bg-white border border-gray-200 rounded-full mx-2"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 bg-gray-200 rounded-full focus:outline-none"
              >
                +
              </button>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">SKU: SS001</p>
            <p className="text-gray-600">Category: Sofas</p>
            <p className="text-gray-600">Tags: Sofa, Chair, Home, Shop</p>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <button className="p-2 bg-gray-200 rounded-full">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="p-2 bg-gray-200 rounded-full">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="p-2 bg-gray-200 rounded-full">
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button className="p-2 bg-gray-200 rounded-full">
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
