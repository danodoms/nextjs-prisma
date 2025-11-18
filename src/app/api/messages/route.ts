import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();

    if (typeof content !== "string") {
      return NextResponse.json(
        { error: "Invalid payload, must be typeof string" },
        { status: 400 }
      );
    }

    const message = await prisma.message.create({
      data: {
        content,
      },
    });

    console.log("Created message:", message);

    return NextResponse.json(
      { message: "Message created successfully" },
      { status: 201 }
    );
  } catch (error) {}
}

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ messages });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
