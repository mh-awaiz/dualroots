"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Subscribed successfully 🤎");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (err) {
      setMessage("Server error");
    }

    setLoading(false);
  };

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-r from-[#4b2e2e] via-[#6f4e37] to-[#3e2723]">
      <div className="max-w-5xl mx-auto bg-[#5a3e36]/60 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center border border-[#8b5e3c]/30">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f5e6d3] mb-4">
          Stay Updated With Us
        </h2>

        <p className="text-[#e8d8c3] mb-8 text-sm md:text-base">
          Subscribe to receive exclusive offers, latest collections, and special
          discounts directly to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-5 py-3 rounded-xl bg-[#f5e6d3] text-[#3e2723] placeholder:text-[#6f4e37] focus:outline-none focus:ring-2 focus:ring-[#d2a679] transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#d2a679] text-[#3e2723] font-semibold hover:bg-[#e6c29f] transition duration-300 shadow-lg"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {message && <p className="mt-5 text-sm text-[#f5e6d3]">{message}</p>}
      </div>
    </section>
  );
}
