export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image_url?: string;
  created_at?: string;
}

export interface CartItem {
  id: number;
  product_id: number;
  quantity: number;
  added_at?: string;
  // Join data từ products
  product_name?: string;
  product_price?: number;
  product_stock?: number;
}

export interface Order {
  id?: number;
  total_amount: number;
  vat_amount: number;
  final_amount: number;
  order_date?: string;
}

export interface InvoiceItem {
  product_name: string;
  price: number;
  quantity: number;
  subtotal: number;
}