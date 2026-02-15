"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const res = await fetch("/api/products?category=New Arrivals");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  return (
    <section className="py-16 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6D3F25]">
            New Arrivals
          </h2>
          <div className="w-20 h-1 bg-[#6D3F25] mx-auto mt-4 rounded"></div>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">Loading products...</p>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <p className="text-center text-gray-500">No new arrivals found.</p>
        )}

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
