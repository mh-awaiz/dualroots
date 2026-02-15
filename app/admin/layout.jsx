"use client";
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F8F5F2]">

      {/* Sidebar */}
      <aside className="w-64 bg-[#6D3F25] text-white hidden md:flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10">Admin</h2>

        <nav className="flex flex-col gap-4">
          <Link href="/admin/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link href="/admin/products" className="hover:text-gray-200">
            Products
          </Link>
          <Link href="/admin/orders" className="hover:text-gray-200">
            Orders
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        {children}
      </main>

    </div>
  );
}
