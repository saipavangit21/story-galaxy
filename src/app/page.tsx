import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { favorites as favoritesTable, progress as progressTable, users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import AppShell from "@/components/AppShell";

export default async function HomePage() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const userId = (session.user as { id: string }).id;

  const [user] = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  const favRows = await db.select().from(favoritesTable).where(eq(favoritesTable.userId, userId));
  const progRows = await db.select().from(progressTable).where(eq(progressTable.userId, userId));

  const initialProgress = Object.fromEntries(
    progRows.map((r) => [r.storyId, { page: r.page, totalPages: r.totalPages, ts: r.updatedAt.getTime() }])
  );

  return (
    <AppShell
      userName={user?.name || session.user.email || "reader"}
      initialFavorites={favRows.map((r) => r.storyId)}
      initialProgress={initialProgress}
      initialAllowScary={user?.allowScary ?? true}
    />
  );
}
