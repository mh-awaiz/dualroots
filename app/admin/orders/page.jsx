"use client";
import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then(setOrders);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#6D3F25] mb-8">Orders</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        {orders.map((order) => (
          <div key={order._id} className="border p-4 rounded">
            <p>
              <strong>Name:</strong> {order.customer.name}
            </p>
            <p>
              <strong>Email:</strong> {order.customer.email}
            </p>
            <p>
              <strong>Total:</strong> ₹{order.total}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
