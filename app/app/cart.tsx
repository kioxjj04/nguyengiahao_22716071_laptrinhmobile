import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  getCartItems,
  updateCartQuantity,
  removeFromCart,
} from '../database/db';
import { getProductById } from '../database/db';
import { CartItem } from '../types/types';
import { formatCurrency, calculateSubtotal } from '../utils/helpers';

export default function CartScreen() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    // TODO: Tính tổng tiền
    calculateTotal();
  }, [cartItems]);

  const loadCart = async () => {
    try {
      setLoading(true);
      const items = await getCartItems();
      setCartItems(items);
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể tải giỏ hàng');
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    const sum = cartItems.reduce((acc, item) => {
      return acc + calculateSubtotal(item.product_price || 0, item.quantity);
    }, 0);
    setTotal(sum);
  };

  const handleIncrement = async (item: CartItem) => {
    // TODO: Kiểm tra tồn kho
    const product = await getProductById(item.product_id);
    
    if (!product || item.quantity >= product.stock) {
      Alert.alert('Thông báo', 'Không đủ hàng trong kho!');
      return;
    }

    // TODO: Cập nhật số lượng
    const success = await updateCartQuantity(item.id, item.quantity + 1);
    if (success) {
      await loadCart();
    }
  };

  const handleDecrement = async (item: CartItem) => {
    if (item.quantity === 1) {
      // TODO: Confirm xóa
      Alert.alert(
        'Xác nhận',
        'Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?',
        [
          { text: 'Hủy', style: 'cancel' },
          {
            text: 'Xóa',
            onPress: async () => {
              await handleRemove(item.id);
            },
          },
        ]
      );
    } else {
      // TODO: Giảm số lượng
      const success = await updateCartQuantity(item.id, item.quantity - 1);
      if (success) {
        await loadCart();
      }
    }
  };

  const handleRemove = async (cartItemId: number) => {
    const success = await removeFromCart(cartItemId);
    if (success) {
      await loadCart();
      Alert.alert('Thành công', 'Đã xóa sản phẩm khỏi giỏ hàng');
    }
  };

  const handleViewInvoice = () => {
    if (cartItems.length === 0) {
      Alert.alert('Thông báo', 'Giỏ hàng của bạn đang trống!');
      return;
    }

    // TODO: Chuyển sang màn Invoice và truyền data
    router.push({
      pathname: '/invoice',
      params: { 
        cartData: JSON.stringify(cartItems),
        total: total.toString(),
      },
    });
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.product_name}</Text>
        <Text style={styles.itemPrice}>{formatCurrency(item.product_price || 0)}</Text>
        <Text style={styles.itemSubtotal}>
          Thành tiền: {formatCurrency(calculateSubtotal(item.product_price || 0, item.quantity))}
        </Text>
      </View>

      <View style={styles.quantityControl}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => handleDecrement(item)}
        >
          <Text style={styles.controlButtonText}>−</Text>
        </TouchableOpacity>

        <Text style={styles.quantity}>{item.quantity}</Text>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => handleIncrement(item)}
        >
          <Text style={styles.controlButtonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemove(item.id)}
        >
          <Text style={styles.removeButtonText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  if (cartItems.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>Giỏ hàng trống</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Tiếp tục mua sắm</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Tổng tạm tính:</Text>
          <Text style={styles.totalAmount}>{formatCurrency(total)}</Text>
        </View>

        <TouchableOpacity
          style={styles.invoiceButton}
          onPress={handleViewInvoice}
        >
          <Text style={styles.invoiceButtonText}>Xem hoá đơn</Text>
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
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 16,
    paddingBottom: 150,
  },
  cartItem: {
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
  itemInfo: {
    marginBottom: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: '#2563eb',
    marginBottom: 4,
  },
  itemSubtotal: {
    fontSize: 14,
    fontWeight: '600',
    color: '#16a34a',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  controlButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    minWidth: 30,
    textAlign: 'center',
  },
  removeButton: {
    marginLeft: 'auto',
    padding: 8,
  },
  removeButtonText: {
    fontSize: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  invoiceButton: {
    backgroundColor: '#16a34a',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  invoiceButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});