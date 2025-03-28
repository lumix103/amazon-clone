import "server-only";
import {
  int,
  text,
  index,
  singlestoreTableCreator,
  bigint,
  timestamp,
  decimal,
} from "drizzle-orm/singlestore-core";
import { relations } from "drizzle-orm";

export const createTable = singlestoreTableCreator(
  (name) => `amazon_clone_${name}`
);

export const products_table = createTable(
  "products",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    title: text("title").notNull(),
    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
    rating: decimal("rating", { precision: 3, scale: 2 }).notNull(),
    reviewCount: int("review_count").notNull(),
    description: text("description").notNull(),
    imageSrc: text("image_src"),
    created_at: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => [
    index("title_index").on(t.title),
    index("price_index").on(t.price),
    index("rating_index").on(t.rating),
  ]
);

export type Product = typeof products_table.$inferSelect;

export const reviews_table = createTable(
  "reviews",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    productId: bigint("product_id", {
      mode: "number",
      unsigned: true,
    }).notNull(),
    name: text("name").notNull(),
    rating: int("rating").notNull(),
    title: text("title").notNull(),
    date: text("date").notNull(),
    content: text("content"),
    created_at: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => [
    index("review_product_id_index").on(t.productId),
    index("review_name_index").on(t.name),
  ]
);

export type Review = typeof reviews_table.$inferSelect;

export const features_table = createTable(
  "features",
  {
    productId: bigint("product_id", {
      mode: "number",
      unsigned: true,
    }).notNull(),
    feature: text("feature").notNull(),
  },
  (t) => [
    index("product_id_index").on(t.productId),
    index("product_feature_pk").on(t.productId, t.feature),
  ]
);

export type Feature = typeof features_table.$inferSelect;

export const productRelations = relations(products_table, ({ many }) => ({
  features: many(features_table),
  reviews: many(reviews_table),
}));

export const productFeaturesRelations = relations(
  features_table,
  ({ one }) => ({
    product: one(products_table, {
      fields: [features_table.productId],
      references: [products_table.id],
    }),
  })
);

export const reviewsRelations = relations(reviews_table, ({ one }) => ({
  product: one(products_table, {
    fields: [reviews_table.productId],
    references: [products_table.id],
  }),
}));

export const cart = createTable(
  "cart",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    userId: text("user_id").notNull(),
    productId: bigint("product_id", {
      mode: "number",
      unsigned: true,
    }).notNull(),
    quantity: int("quantity").notNull().default(1),
  },
  (t) => [
    index("cart_user_id_index").on(t.userId),
    index("cart_product_id_index").on(t.productId),
  ]
);

export const cartRelations = relations(cart, ({ one }) => ({
  product: one(products_table, {
    fields: [cart.productId],
    references: [products_table.id],
  }),
}));

export type CartItem = typeof cart.$inferSelect;
export type NewCartItem = typeof cart.$inferInsert;
