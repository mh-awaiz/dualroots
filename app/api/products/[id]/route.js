import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function PUT(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;

    const data = await req.formData();

    const name = data.get("name");
    const price = data.get("price");
    const discountedPrice = data.get("discountedPrice");
    const category = data.get("category");
    const files = data.getAll("images");

    let updateData = { name, price, discountedPrice, category };

    // If new images uploaded
    if (files && files.length > 0 && files[0].size > 0) {
      const uploadedImages = [];

      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload_stream({ folder: "dualroots" }, (err, result) => {
              if (err) reject(err);
              else resolve(result);
            })
            .end(buffer);
        });

        uploadedImages.push(uploadResult.secure_url);
      }

      updateData.images = uploadedImages;
    }

    const updated = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    await Product.findByIdAndDelete(id);

    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
