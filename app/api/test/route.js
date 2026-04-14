import { NextResponse } from "next/server";
import connectDB from "../../../config/db";


export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ success: true, message: "DB Connected ✅" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}