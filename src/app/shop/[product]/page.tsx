import ProductDetail from "@/components/ProductDetail";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function fetchProduct(id: string): Promise<Product | null> {
  const query = `*[_type == "product" && _id == $id][0] {
    "id": _id,
    name,
    description,
    price,
    stockLevel,
    category,
    "image": image.asset._ref,
    discountPercentage
  }`;

  const product = await client.fetch(query, { id });
  return product || null;
}

async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"][0..3] {
    "id": _id,
    name,
    price,
    "image": image.asset._ref
  }`;

  return await client.fetch(query);
}

export default async function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  const product = await fetchProduct(params.product);

  if (!product) return notFound();

  const products = await fetchProducts();

  return (
    <div>
      <ProductDetail
        image={product.image}
        title={product.name}
        price={product.price}
        description={product.description}
      />

      <div className="border-y border-[#D9D9D9] text-[#9F9F9F]">
        <div className="py-7 px-[2rem] lg:px-[4rem] xl:px-[6rem]">
          <ul className="flex flex-wrap justify-center gap-5 md:gap-10">
            <li className="text-[20px] lg:text-[24px] text-black">
              Description
            </li>
            <li className="text-[20px] lg:text-[24px]">
              Additional Information
            </li>
            <li className="text-[20px] lg:text-[24px]">Reviews [5]</li>
          </ul>

          <div className="p-6">
            <div className="md:px-[5rem]">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p className="mt-3">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage-styled engineering. The analogue knobs allow you to
                fine-tune controls to your preferences, while the
                guitar-influenced leather strap enables easy travel.
              </p>
            </div>

            {/* Additional Images */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="h-[348px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
                <Image
                  src="/cloud_sofa_1.png"
                  alt="Sofa Image"
                  className="w-auto h-auto rounded-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="h-[348px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center">
                <Image
                  src="/cloud_sofa_2.png"
                  alt="Sofa Image"
                  className="w-auto h-auto rounded-lg"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Top Picks For You</h2>
          <p className="text-gray-600 mt-2 md:px-[5rem]">
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
        <div>
          <h2 className="w-[121px] text-[24px] font-medium border-b-[2px] border-black m-auto mt-14">
            View More
          </h2>
        </div>
      </div>
    </div>
  );
}
