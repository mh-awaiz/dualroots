"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth");

    if (!isAdmin) {
      router.push("/admin");
    }
  }, []);

  return (
    <div className="min-h-screen p-10 bg-[#F8F5F2]">
      <h1 className="text-3xl font-bold text-[#6D3F25]">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div
          onClick={() => router.push("/admin/products")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="font-semibold text-lg text-black">Manage Products</h2>
        </div>

        <div
          onClick={() => router.push("/admin/orders")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="font-semibold text-lg text-black">View Orders</h2>
        </div>
      </div>
    </div>
  );
}
