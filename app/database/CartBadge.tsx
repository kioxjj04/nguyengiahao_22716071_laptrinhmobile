// components/CartBadge.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getCartCount } from '../database/db';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

export default function CartBadge() {
  const [count, setCount] = useState(0);

  // Load count safely
  const loadCount = useCallback(async () => {
    try {
      const n = await getCartCount();
      setCount(n);
    } catch (err) {
      console.error('Failed to load cart count:', err);
    }
  }, []);

  // Load once on mount
  useEffect(() => {
    loadCount();
  }, [loadCount]);

  // Refresh when screen comes into focus (e.g. after adding to cart)
  useFocusEffect(
    useCallback(() => {
      loadCount();
    }, [loadCount])
  );

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