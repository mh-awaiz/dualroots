"use client";
import { useEffect, useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    discountedPrice: "",
    category: "",
    images: [],
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("discountedPrice", form.discountedPrice);
      formData.append("category", form.category);

      form.images.forEach((img) => {
        formData.append("images", img);
      });

      if (editingId) {
        await fetch(`/api/products/${editingId}`, {
          method: "PUT",
          body: formData,
        });
      } else {
        await fetch("/api/products", {
          method: "POST",
          body: formData,
        });
      }

      await fetchProducts();
      resetForm();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    await fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setForm({
      name: product.name,
      price: product.price,
      discountedPrice: product.discountedPrice,
      category: product.category,
      images: [],
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({
      name: "",
      price: "",
      discountedPrice: "",
      category: "",
      images: [],
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F3EF] p-10 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-[#6D3F25]">
          Manage Products
        </h1>

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-12 border">
          <h2 className="text-xl font-semibold mb-6 text-[#6D3F25]">
            {editingId ? "Edit Product" : "Add New Product"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Product Name"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-[#6D3F25]"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="number"
              placeholder="Price"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-[#6D3F25]"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            <input
              type="number"
              placeholder="Discounted Price"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-[#6D3F25]"
              value={form.discountedPrice}
              onChange={(e) =>
                setForm({
                  ...form,
                  discountedPrice: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Category"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-[#6D3F25]"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />

            <input
              type="file"
              multiple
              className="md:col-span-2 border p-3 rounded-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  images: Array.from(e.target.files),
                })
              }
            />
          </div>

          {/* Image Preview */}
          {form.images.length > 0 && (
            <div className="flex gap-4 mt-4 flex-wrap">
              {form.images.map((img, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#6D3F25] text-white px-8 py-3 rounded-lg hover:opacity-90"
            >
              {loading
                ? "Processing..."
                : editingId
                  ? "Update Product"
                  : "Add Product"}
            </button>

            {editingId && (
              <button
                onClick={resetForm}
                className="bg-gray-400 text-white px-6 py-3 rounded-lg"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* PRODUCT LIST */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p._id} className="bg-white p-6 rounded-xl shadow border">
              <img
                src={p.images?.[0]}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="font-semibold text-lg">{p.name}</h3>

              <p className="text-gray-500 line-through">£{p.price}</p>

              <p className="text-green-600 font-bold">£{p.discountedPrice}</p>

              <p className="text-sm text-gray-400">{p.category}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleEdit(p)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(p._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
