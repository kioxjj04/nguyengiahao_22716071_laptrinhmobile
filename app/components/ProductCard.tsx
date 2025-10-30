// components/ProductCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Product } from '../types/types';
import { formatCurrency } from '../utils/helpers';
import { addToCart } from '../database/db';

type Props = {
  product: Product;
  onAdded?: () => void;               // optional callback to refresh badge
};

export default function ProductCard({ product, onAdded }: Props) {
  const handleAdd = async () => {
    if (product.stock <= 0) {
      Alert.alert('Hết hàng', `${product.name} hiện đã hết.`);
      return;
    }

    const ok = await addToCart(product.id);
    if (ok) {
      Alert.alert('Thêm giỏ', `${product.name} đã được thêm!`);
      onAdded?.();
    } else {
      Alert.alert('Lỗi', 'Không thể thêm vào giỏ hàng.');
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{formatCurrency(product.price)}</Text>
        <Text style={styles.stock}>Còn: {product.stock}</Text>
      </View>

      <TouchableOpacity
        style={[styles.btn, product.stock <= 0 && styles.btnDisabled]}
        onPress={handleAdd}
        disabled={product.stock <= 0}
      >
        <Text style={styles.btnText}>
          {product.stock > 0 ? 'Thêm' : 'Hết'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  price: { fontSize: 18, color: '#2563eb', fontWeight: '600', marginBottom: 4 },
  stock: { fontSize: 12, color: '#666' },
  btn: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  btnDisabled: { backgroundColor: '#ccc' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});