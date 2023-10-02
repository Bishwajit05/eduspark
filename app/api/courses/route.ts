import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    console.log("🚀 ~ file: route.ts:8 ~ POST ~ userId:", userId);
    const { title } = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const course = await db.course.create({ data: { userId, title } });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[Courses]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
