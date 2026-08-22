import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { favorites } from "@/lib/schema";
import { and, eq } from "drizzle-orm";

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;

  const rows = await db.select().from(favorites).where(eq(favorites.userId, userId));
  return NextResponse.json({ favorites: rows.map((r) => r.storyId) });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;

  const { storyId } = await req.json();
  if (!storyId) return NextResponse.json({ error: "Missing storyId" }, { status: 400 });

  await db.insert(favorites).values({ userId, storyId }).onConflictDoNothing();
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;

  const { storyId } = await req.json();
  if (!storyId) return NextResponse.json({ error: "Missing storyId" }, { status: 400 });

  await db.delete(favorites).where(and(eq(favorites.userId, userId), eq(favorites.storyId, storyId)));
  return NextResponse.json({ ok: true });
}
