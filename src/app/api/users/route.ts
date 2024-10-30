import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId)
      return Response.json({ error: "UNAUTHORIZED" }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        firstname: true,
      },
    });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }
    return Response.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
