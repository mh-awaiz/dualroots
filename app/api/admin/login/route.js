import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  const response = NextResponse.json({ message: "Login successful" });

  response.cookies.set("adminToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return response;
}
