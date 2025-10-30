import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { initDatabase } from '../database/db';

export default function RootLayout() {
  useEffect(() => {
    // Khởi tạo database khi app khởi động
    initDatabase().catch(console.error);
  }, []);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2563eb',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Sản phẩm',
          headerRight: () => <CartBadge />,
        }} 
      />
      <Stack.Screen 
        name="cart" 
        options={{ title: 'Giỏ hàng' }} 
      />
      <Stack.Screen 
        name="invoice" 
        options={{ title: 'Hoá đơn' }} 
      />
    </Stack>
  );
}

// TODO: Component CartBadge để hiển thị số lượng SP trong giỏ
function CartBadge() {
  // TODO: Implement badge với số lượng sản phẩm
  return null;
}