
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function RestaurantDetailScreen() {
  const { id } = useLocalSearchParams();

  // In a real app, you'd fetch restaurant details and their menu using `id` from Convex
  const restaurant = {
    id: id,
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.5,
    address: '123 Pizza St, Cityville',
    description: 'Authentic Italian pizzas made with fresh ingredients and a lot of love.',
    image: require('../../assets/images/restaurant1.png'), // Changed to assets/images/restaurant1.png
    menu: [
      { category: 'Pizzas', items: [
        { id: '1', name: 'Pepperoni Pizza', price: '$15.00', image: require('../../assets/images/food1.png') }, // Changed to food1
        { id: '5', name: 'Veggie Pizza', price: '$14.00', image: require('../../assets/images/food2.png') },   // Changed to food2
      ]},
      { category: 'Sides', items: [
        { id: 's1', name: 'Garlic Bread', price: '$5.00', image: require('../../assets/images/restaurant3.png') }, // Changed to restaurant3
        { id: 's2', name: 'Fries', price: '$4.00', image: require('../../assets/images/restaurant3.png') },        // Changed to restaurant3
      ]},
    ]
  };

  if (!restaurant) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Restaurant not found.</Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={['#A78BFA', '#F472B6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 pt-12"
    >
      <View className="flex-row items-center px-4 pb-4">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-white ml-4">Restaurant Details</Text>
      </View>

      <ScrollView className="flex-1 bg-white rounded-t-3xl p-6 shadow-xl">
        <Image source={restaurant.image} className="w-full h-64 rounded-xl mb-6" resizeMode="cover" />
        <Text className="text-4xl font-bold text-gray-900 mb-2">{restaurant.name}</Text>
        <Text className="text-xl text-gray-700 mb-2">{restaurant.cuisine}</Text>
        <View className="flex-row items-center mb-4">
          <Ionicons name="star" size={24} color="#FFD700" />
          <Text className="text-lg text-gray-700 ml-1">{restaurant.rating}</Text>
          <Ionicons name="location-outline" size={24} color="#888" className="ml-4" />
          <Text className="text-lg text-gray-700 ml-1">{restaurant.address}</Text>
        </View>
        <Text className="text-lg text-gray-800 mb-8">{restaurant.description}</Text>

        <Text className="text-2xl font-bold text-gray-900 mb-4">Menu</Text>
        {restaurant.menu.map((category) => (
          <View key={category.category} className="mb-6">
            <Text className="text-xl font-bold text-primaryPurple mb-3">{category.category}</Text>
            {category.items.map((item) => (
              <TouchableOpacity key={item.id} className="flex-row items-center bg-gray-50 rounded-xl p-3 mb-3 shadow-sm">
                <Image source={item.image} className="w-16 h-16 rounded-lg mr-4" />
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">{item.name}</Text>
                  <Text className="text-md font-bold text-gray-700">{item.price}</Text>
                </View>
                <Ionicons name="add-circle" size={28} color="#A78BFA" />
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View className="h-20" />{/* Spacer for bottom tab bar */}
      </ScrollView>
    </LinearGradient>
  );
}