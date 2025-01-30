import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Shop({ product }: { product: Product }) {
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
