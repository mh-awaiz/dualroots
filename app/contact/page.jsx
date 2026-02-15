"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess("Message sent successfully 🤎");
      setForm({ name: "", email: "", message: "" });
    } else {
      setSuccess(data.error || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#4b2e2e] via-[#6f4e37] to-[#3e2723] py-20 px-4 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="text-[#f5e6d3]">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>

          <p className="text-[#e8d8c3] mb-8">
            Have questions about our products or services? Our team is ready to
            assist you.
          </p>

          <div className="space-y-5 text-sm">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#d2a679] text-lg" />
              <span>123 Brown Street, Your City</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#d2a679] text-lg" />
              <span>support@yourbrand.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#d2a679] text-lg" />
              <span>+91 9876543210</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-[#5a3e36]/60 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-[#8b5e3c]/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-[#f5e6d3] text-[#3e2723] focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-xl bg-[#f5e6d3] text-[#3e2723] focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-5 py-3 rounded-xl bg-[#f5e6d3] text-[#3e2723] focus:outline-none focus:ring-2 focus:ring-[#d2a679]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#d2a679] text-[#3e2723] font-semibold hover:bg-[#e6c29f] transition shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-sm text-[#f5e6d3] mt-4">{success}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
