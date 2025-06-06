
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function OrdersScreen() {
  const pastOrders = [
    { id: 'ord1', date: '2024-05-30', total: '$45.00', items: ['Pepperoni Pizza', 'Classic Burger'] },
    { id: 'ord2', date: '2024-05-28', total: '$25.50', items: ['California Roll'] },
  ];

  return (
    <LinearGradient
      colors={['#A78BFA', '#F472B6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 pt-12 px-4"
    >
      <Text className="text-3xl font-bold text-white mb-6">Your Orders</Text>

      <TouchableOpacity onPress={() => router.push("/(tabs)/home")} className="flex-row items-center justify-center bg-white rounded-xl p-4 mb-6 shadow-md">
        <Ionicons name="add-circle" size={28} color="#A78BFA" className="mr-2" />
        <Text className="text-xl font-semibold text-primaryPurple">Start New Order</Text>
      </TouchableOpacity>

      <Text className="text-2xl font-bold text-white mb-4">Past Orders</Text>
      <ScrollView className="flex-1">
        {pastOrders.map((order) => (
          <View key={order.id} className="bg-white rounded-xl p-4 mb-4 shadow-md">
            <Text className="text-lg font-bold text-gray-800 mb-2">Order ID: {order.id}</Text>
            <Text className="text-md text-gray-600 mb-1">Date: {order.date}</Text>
            <Text className="text-md text-gray-600 mb-2">Items: {order.items.join(', ')}</Text>
            <Text className="text-xl font-semibold text-primaryPurple">Total: {order.total}</Text>
            <TouchableOpacity className="mt-3 p-2 bg-primaryPurple rounded-lg self-end">
              <Text className="text-white font-semibold">View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View className="h-20" />
      </ScrollView>
    </LinearGradient>
  );
}