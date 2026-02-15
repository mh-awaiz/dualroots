import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
    },
    category: String,

    images: {
      type: [String],
      required: true,
    },

    currency: {
      type: String,
      default: "GBP",
    },
  },
  { timestamps: true },
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
