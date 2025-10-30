import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { clearCart } from '../database/db';
import { updateProductStock } from '../database/db';
import { CartItem } from '../types/types';
import { formatCurrency, formatDate, calculateSubtotal, calculateVAT } from '../utils/helpers';
import { VAT_RATE } from '../constants/config';

export default function InvoiceScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [orderDate] = useState(new Date());

  useEffect(() => {
    // TODO: Parse cart data từ params
    try {
      const data = JSON.parse(params.cartData as string);
      setCartItems(data);
      
      const total = parseFloat(params.total as string) || 0;
      setSubtotal(total);
      setVat(calculateVAT(total, VAT_RATE));
      setFinalTotal(total + calculateVAT(total, VAT_RATE));
    } catch (error) {
      console.error('Error parsing cart data:', error);
      Alert.alert('Lỗi', 'Không thể tải thông tin hoá đơn');
    }
  }, [params]);

  const handlePlaceOrder = async () => {
    Alert.alert(
      'Xác nhận đặt hàng',
      'Bạn có chắc chắn muốn đặt hàng?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Đặt hàng',
          onPress: async () => {
            try {
              // TODO: Cập nhật tồn kho
              for (const item of cartItems) {
                await updateProductStock(item.product_id, item.quantity);
              }

              // TODO: Xóa giỏ hàng
              await clearCart();

              Alert.alert(
                'Thành công',
                'Đơn hàng đã được đặt thành công!',
                [
                  {
                    text: 'OK',
                    onPress: () => {
                      router.replace('/');
                    },
                  },
                ]
              );
            } catch (error) {
              Alert.alert('Lỗi', 'Không thể đặt hàng. Vui lòng thử lại!');
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>HOÁ ĐƠN MUA HÀNG</Text>
          <Text style={styles.date}>{formatDate(orderDate)}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Chi tiết đơn hàng</Text>
          
          {cartItems.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <View style={styles.itemLeft}>
                <Text style={styles.itemName}>{item.product_name}</Text>
                <Text style={styles.itemDetail}>
                  {formatCurrency(item.product_price || 0)} x {item.quantity}
                </Text>
              </View>
              <Text style={styles.itemTotal}>
                {formatCurrency(calculateSubtotal(item.product_price || 0, item.quantity))}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tổng tiền hàng:</Text>
            <Text style={styles.summaryValue}>{formatCurrency(subtotal)}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>VAT (10%):</Text>
            <Text style={styles.summaryValue}>{formatCurrency(vat)}</Text>
          </View>

          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>TỔNG THANH TOÁN:</Text>
            <Text style={styles.totalValue}>{formatCurrency(finalTotal)}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Quay lại</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={handlePlaceOrder}
        >
          <Text style={styles.placeOrderButtonText}>Đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemLeft: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemDetail: {
    fontSize: 12,
    color: '#666',
  },
  itemTotal: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e5e5',
    marginVertical: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 2,
    borderTopColor: '#2563eb',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  backButton: {
    flex: 1,
    backgroundColor: '#6b7280',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    flex: 1,
    backgroundColor: '#16a34a',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});