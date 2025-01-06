import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { useState } from 'react';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-5 py-7 px-[2rem] lg:px-[4rem] xl:px-[6rem]">
      {/* Image Gallery */}
      <div className="flex gap-5 justify-center">
        <div className="flex flex-col gap-5 items-start justify-start">
          {['/Maya_sofa_three_seater_2.png', '/Outdoor_sofa_set_2.png', '/Outdoor_sofa_set_2.png', '/Stuart_sofa_1.png'].map((src, index) => (
            <div key={index} className="w-[75px] h-[80px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
              <Image
                src={src}
                alt="Thumbnail"
                width={83}
                height={55}
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
            </div>
          ))}
        </div>
        <div className="w-[423px] md:h-[500px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
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
      <div className="flex flex-col sm:m-auto">
        <h1 className="text-[30px] xl:text-[42px]">Asgaard Sofa</h1>
        <p className="text-[20px] md:text-[24px] font-medium text-[#9F9F9F]">Rs. 250,000.00</p>
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
        <p className="text-[13px] mt-5">
          Setting the bar as one of the loudest speakers in its class, the <br />
          Kilburn is a compact, stout-hearted hero with a well-balanced <br />
          audio which boasts a clear midrange and extended highs for a <br />
          sound.
        </p>
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
};

export default ProductDetails;
