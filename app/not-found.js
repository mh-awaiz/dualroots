import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8F5F2] px-6">
      <div className="text-center max-w-2xl">
        {/* 404 Text */}
        <h1 className="text-7xl md:text-9xl font-bold text-[#6D3F25]">404</h1>

        {/* Message */}
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-8 bg-[#6D3F25] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4E2C1C] transition duration-300 shadow-md">
            Go Back Home
          </button>
        </Link>
      </div>
    </section>
  );
}
