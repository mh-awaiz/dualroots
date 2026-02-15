import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },
    items: Array,
    total: Number,
    status: { type: String, default: "Pending" },
  },
  { timestamps: true },
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
