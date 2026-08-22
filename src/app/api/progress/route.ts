import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { progress } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;

  const rows = await db.select().from(progress).where(eq(progress.userId, userId));
  return NextResponse.json({
    progress: Object.fromEntries(
      rows.map((r) => [r.storyId, { page: r.page, totalPages: r.totalPages, ts: r.updatedAt.getTime() }])
    ),
  });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;

  const { storyId, page, totalPages } = await req.json();
  if (!storyId || typeof page !== "number" || typeof totalPages !== "number") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await db
    .insert(progress)
    .values({ userId, storyId, page, totalPages, updatedAt: new Date() })
    .onConflictDoUpdate({
      target: [progress.userId, progress.storyId],
      set: { page, totalPages, updatedAt: new Date() },
    });

  return NextResponse.json({ ok: true });
}
