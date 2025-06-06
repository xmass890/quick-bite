
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function FoodDetailScreen() {
  const { id } = useLocalSearchParams();

  // In a real app, you'd fetch food details using `id` from Convex
  const foodItem = {
    id: id,
    name: 'Pepperoni Pizza',
    restaurant: 'Pizza Palace',
    price: '$15.00',
    description: 'A delicious classic pepperoni pizza with mozzarella cheese and a crispy crust.',
    image: require('../../assets/images/food1.png'), // Updated path
    similarFoods: [
      { id: '1', name: 'Veggie Pizza', restaurant: 'Pizza Palace', price: '$14.00', image: require('../../assets/images/food1.png') },
      { id: '2', name: 'Classic Burger', restaurant: 'Burger Joint', price: '$12.50', image: require('../../assets/images/food2.png') },
      { id: '3', name: 'California Roll', restaurant: 'Sushi Spot', price: '$18.00', image: require('../../assets/images/food3.png') },
    ]
  };

  if (!foodItem) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Food item not found.</Text>
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
        <Text className="text-2xl font-bold text-white ml-4">Food Details</Text>
      </View>

      <ScrollView className="flex-1 bg-white rounded-t-3xl p-6 shadow-xl">
        <Image source={foodItem.image} className="w-full h-64 rounded-xl mb-6" resizeMode="cover" />
        <Text className="text-4xl font-bold text-gray-900 mb-2">{foodItem.name}</Text>
        <Text className="text-xl text-gray-700 mb-4">{foodItem.restaurant}</Text>
        <Text className="text-3xl font-bold text-primaryPurple mb-6">{foodItem.price}</Text>
        <Text className="text-lg text-gray-800 mb-8">{foodItem.description}</Text>

        <Text className="text-2xl font-bold text-gray-900 mb-4">Similar Foods</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8">
          {foodItem.similarFoods.map((item) => (
            <TouchableOpacity key={item.id} className="w-40 mr-4 bg-gray-100 rounded-xl p-3 shadow-sm">
              <Image source={item.image} className="w-full h-24 rounded-lg mb-2" resizeMode="cover" />
              <Text className="text-md font-semibold text-gray-800">{item.name}</Text>
              <Text className="text-sm text-gray-600">{item.restaurant}</Text>
              <Text className="text-lg font-bold text-primaryPurple mt-1">{item.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity className="bg-primaryPurple p-5 rounded-full flex-row items-center justify-center shadow-lg mb-4">
          <Text className="text-purple-500 text-2xl font-bold">Order Now</Text>
        </TouchableOpacity>
        <View className="h-20" />{/* Spacer for bottom tab bar */}
      </ScrollView>
    </LinearGradient>
  );
}