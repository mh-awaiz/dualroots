"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer group">
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={product.images?.[0] || "/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#6D3F25]">
            {product.name}
          </h3>

          <div className="mt-3 flex justify-between items-center">
            <span className="text-[#6D3F25] font-bold text-lg">
              £ {product.discountedPrice || product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
