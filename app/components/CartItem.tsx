// components/CartItemRow.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { CartItem } from '../types/types';
import { formatCurrency, calculateSubtotal } from '../utils/helpers';
import { updateCartQuantity, removeFromCart } from '../database/db';
import { getProductById } from '../database/db';

type Props = {
  item: CartItem;
  onRefresh: () => void;
};

export default function CartItem({ item, onRefresh }: Props) {
  const inc = async () => {
    const prod = await getProductById(item.product_id);
    if (!prod || item.quantity >= prod.stock) {
      Alert.alert('Hết hàng', 'Không đủ tồn kho.');
      return;
    }
    await updateCartQuantity(item.id, item.quantity + 1);
    onRefresh();
  };

  const dec = async () => {
    if (item.quantity <= 1) {
      Alert.alert('Xóa?', 'Xóa sản phẩm khỏi giỏ?', [
        { text: 'Hủy' },
        {
          text: 'Xóa',
          onPress: async () => {
            await removeFromCart(item.id);
            onRefresh();
          },
        },
      ]);
    } else {
      await updateCartQuantity(item.id, item.quantity - 1);
      onRefresh();
    }
  };

  const del = async () => {
    await removeFromCart(item.id);
    onRefresh();
  };

  return (
    <View style={styles.row}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.product_name}</Text>
        <Text style={styles.price}>{formatCurrency(item.product_price ?? 0)}</Text>
        <Text style={styles.sub}>
          Thành tiền: {formatCurrency(calculateSubtotal(item.product_price ?? 0, item.quantity))}
        </Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.btn} onPress={dec}>
          <Text style={styles.btnTxt}>−</Text>
        </TouchableOpacity>

        <Text style={styles.qty}>{item.quantity}</Text>

        <TouchableOpacity style={styles.btn} onPress={inc}>
          <Text style={styles.btnTxt}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.del} onPress={del}>
          <Text style={styles.delTxt}>Trash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  info: { marginBottom: 12 },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  price: { fontSize: 14, color: '#2563eb', marginBottom: 4 },
  sub: { fontSize: 14, fontWeight: '600', color: '#16a34a' },
  controls: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  btn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  qty: { fontSize: 18, fontWeight: 'bold', minWidth: 30, textAlign: 'center' },
  del: { marginLeft: 'auto', padding: 8 },
  delTxt: { fontSize: 20 },
});