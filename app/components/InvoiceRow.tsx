// components/InvoiceRow.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatCurrency, calculateSubtotal } from '../utils/helpers';
import { CartItem } from '../types/types';

type Props = {
  item: CartItem;
};

export default function InvoiceRow({ item }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.name}>{item.product_name}</Text>
        <Text style={styles.detail}>
          {formatCurrency(item.product_price ?? 0)} × {item.quantity}
        </Text>
      </View>
      <Text style={styles.total}>
        {formatCurrency(calculateSubtotal(item.product_price ?? 0, item.quantity))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  left: { flex: 1 },
  name: { fontSize: 14, fontWeight: '600', marginBottom: 4 },
  detail: { fontSize: 12, color: '#666' },
  total: { fontSize: 14, fontWeight: 'bold', color: '#2563eb' },
});