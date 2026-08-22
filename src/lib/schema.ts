import { pgTable, text, timestamp, integer, boolean, primaryKey } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name"),
  allowScary: boolean("allow_scary").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const favorites = pgTable(
  "favorites",
  {
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    storyId: text("story_id").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.storyId] }),
  })
);

export const progress = pgTable(
  "progress",
  {
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    storyId: text("story_id").notNull(),
    page: integer("page").notNull(),
    totalPages: integer("total_pages").notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.storyId] }),
  })
);
