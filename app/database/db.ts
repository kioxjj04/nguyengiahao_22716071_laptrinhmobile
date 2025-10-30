// src/db/database.ts
import * as SQLite from 'expo-sqlite';
import { Product, CartItem } from '../types/types';
import { DB_NAME } from '../constants/config';

let dbInstance: SQLite.SQLiteDatabase | null = null;

/* --------------------------------------------------------------
   SINGLETON – get (or create) the database instance
   -------------------------------------------------------------- */
export const getDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  if (dbInstance) return dbInstance;

  dbInstance = await SQLite.openDatabaseAsync(DB_NAME);
  console.log('Database opened:', DB_NAME);
  return dbInstance;
};

/* --------------------------------------------------------------
   INITIALISE SCHEMA + SAMPLE DATA
   -------------------------------------------------------------- */
export const initDatabase = async (): Promise<void> => {
  const db = await getDatabase();

  // ---------- PRODUCTS ----------
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      stock INTEGER NOT NULL DEFAULT 0,
      image_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // ---------- CART ----------
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS cart (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 1,
      added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
    );
  `);

  console.log('Tables created');

  // Seed sample data only once
  await insertSampleData(db);
};

/* --------------------------------------------------------------
   SAMPLE DATA (identical to the one in the skeleton)
   -------------------------------------------------------------- */
const insertSampleData = async (db: SQLite.SQLiteDatabase) => {
  const row = await db.getFirstAsync<{ count: number }>(
    'SELECT COUNT(*) AS count FROM products'
  );

  if ((row?.count ?? 0) > 0) {
    console.log('Sample data already present – skipping');
    return;
  }

  console.log('Inserting sample data…');

  const products = [
    ['iPhone 15 Pro Max', 29_990_000, 50, 'https://via.placeholder.com/150'],
    ['Samsung Galaxy S24', 24_990_000, 30, 'https://via.placeholder.com/150'],
    ['MacBook Air M3', 32_990_000, 20, 'https://via.placeholder.com/150'],
    ['iPad Pro 11"', 22_990_000, 40, 'https://via.placeholder.com/150'],
    ['AirPods Pro 2', 6_490_000, 100, 'https://via.placeholder.com/150'],
    ['Apple Watch Series 9', 10_990_000, 60, 'https://via.placeholder.com/150'],
    ['Sony WH-1000XM5', 8_990_000, 25, 'https://via.placeholder.com/150'],
    ['Dell XPS 15', 45_990_000, 15, 'https://via.placeholder.com/150'],
  ] as const;

  for (const [name, price, stock, image_url] of products) {
    await db.runAsync(
      `INSERT INTO products (name, price, stock, image_url)
       VALUES (?, ?, ?, ?)`,
      [name, price, stock, image_url]
    );
  }

  console.log('Sample data inserted');
};

/* --------------------------------------------------------------
   PRODUCT QUERIES
   -------------------------------------------------------------- */
export const getAllProducts = async (): Promise<Product[]> => {
  const db = await getDatabase();
  return (await db.getAllAsync('SELECT * FROM products ORDER BY id')) as Product[];
};

export const getProductById = async (id: number): Promise<Product | null> => {
  const db = await getDatabase();
  const row = await db.getFirstAsync(
    'SELECT * FROM products WHERE id = ?',
    [id]
  );
  return (row as Product) ?? null;
};

export const updateProductStock = async (
  productId: number,
  quantity: number
): Promise<boolean> => {
  try {
    const db = await getDatabase();
    await db.runAsync(
      'UPDATE products SET stock = stock - ? WHERE id = ?',
      [quantity, productId]
    );
    return true;
  } catch (e) {
    console.error('updateProductStock error:', e);
    return false;
  }
};

/* --------------------------------------------------------------
   CART QUERIES
   -------------------------------------------------------------- */
export const getCartItems = async (): Promise<CartItem[]> => {
  const db = await getDatabase();
  return (await db.getAllAsync(`
    SELECT
      c.id,
      c.product_id,
      c.quantity,
      c.added_at,
      p.name      AS product_name,
      p.price     AS product_price,
      p.stock     AS product_stock
    FROM cart c
    JOIN products p ON c.product_id = p.id
    ORDER BY c.added_at DESC
  `)) as CartItem[];
};

export const addToCart = async (productId: number): Promise<boolean> => {
  try {
    const db = await getDatabase();

    const existing = await db.getFirstAsync(
      'SELECT id, quantity FROM cart WHERE product_id = ?',
      [productId]
    );

    if (existing) {
      await db.runAsync(
        'UPDATE cart SET quantity = quantity + 1 WHERE product_id = ?',
        [productId]
      );
    } else {
      await db.runAsync(
        'INSERT INTO cart (product_id, quantity) VALUES (?, 1)',
        [productId]
      );
    }
    return true;
  } catch (e) {
    console.error('addToCart error:', e);
    return false;
  }
};

export const updateCartQuantity = async (
  cartItemId: number,
  quantity: number
): Promise<boolean> => {
  try {
    const db = await getDatabase();
    if (quantity <= 0) {
      await db.runAsync('DELETE FROM cart WHERE id = ?', [cartItemId]);
    } else {
      await db.runAsync(
        'UPDATE cart SET quantity = ? WHERE id = ?',
        [quantity, cartItemId]
      );
    }
    return true;
  } catch (e) {
    console.error('updateCartQuantity error:', e);
    return false;
  }
};

export const removeFromCart = async (cartItemId: number): Promise<boolean> => {
  try {
    const db = await getDatabase();
    await db.runAsync('DELETE FROM cart WHERE id = ?', [cartItemId]);
    return true;
  } catch (e) {
    console.error('removeFromCart error:', e);
    return false;
  }
};

export const clearCart = async (): Promise<boolean> => {
  try {
    const db = await getDatabase();
    await db.runAsync('DELETE FROM cart');
    return true;
  } catch (e) {
    console.error('clearCart error:', e);
    return false;
  }
};

export const getCartCount = async (): Promise<number> => {
  try {
    const db = await getDatabase();
    const row = await db.getFirstAsync<{ total: number }>(
      'SELECT SUM(quantity) AS total FROM cart'
    );
    return row?.total ?? 0;
  } catch (e) {
    console.error('getCartCount error:', e);
    return 0;
  }
};

/* --------------------------------------------------------------
   OPTIONAL: close the DB (useful for tests / hot-reload)
   -------------------------------------------------------------- */
export const closeDatabase = async (): Promise<void> => {
  if (dbInstance) {
    await dbInstance.closeAsync();
    dbInstance = null;
    console.log('Database closed');
  }
};