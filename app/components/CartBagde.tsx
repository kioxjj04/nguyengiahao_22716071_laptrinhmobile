// components/CartBadge.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getCartCount } from '../database/db';
import { Ionicons } from '@expo/vector-icons';

export default function CartBadge() {
  const [count, setCount] = useState(0);

  const refresh = async () => {
    const n = await getCartCount();
    setCount(n);
  };

  // first load + listen to focus (when coming back from other screens)
  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 3000);          // optional live update
    return () => clearInterval(interval);
  }, []);

  if (count === 0) return null;

  return (
    <View style={styles.badgeContainer}>
      <Ionicons name="cart-outline" size={24} color="#fff" />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});