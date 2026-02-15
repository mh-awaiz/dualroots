import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.formData();

    const name = data.get("name");
    const price = data.get("price");
    const discountedPrice = data.get("discountedPrice");
    const category = data.get("category");
    const files = data.getAll("images");

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No images uploaded" },
        { status: 400 },
      );
    }

    // Upload all images to Cloudinary
    const uploadedImages = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "dualroots",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            },
          )
          .end(buffer);
      });

      uploadedImages.push(uploadResult.secure_url);
    }

    const product = await Product.create({
      name,
      price,
      discountedPrice,
      category,
      images: uploadedImages,
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Product creation failed" },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    let products;

    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find();
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
