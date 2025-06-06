import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const categories = [
    { name: 'Pizza', image: require('@/assets/images/food1.png') },
    { name: 'Burgers', image: require('@/assets/images/food2.png') },
    { name: 'Sushi', image: require('@/assets/images/food3.png') },
    { name: 'Desserts', image: require('@/assets/images/food2.png') },
    { name: 'Drinks', image: require('@/assets/images/food3.png') },
  ];

  const foodItems = [
    {
      id: '1',
      name: 'Pepperoni Pizza',
      restaurant: 'Pizza Palace',
      price: 'Tsh15.00',
      image: require('@/assets/images/food1.png'),
    },
    {
      id: '2',
      name: 'Classic Burger',
      restaurant: 'Burger Joint',
      price: 'Tsh12.50',
      image: require('@/assets/images/food2.png'),
    },
    {
      id: '3',
      name: 'California Roll',
      restaurant: 'Sushi Spot',
      price: 'Tsh18.00',
      image: require('@/assets/images/food1.png'),
    },
    {
      id: '4',
      name: 'Chocolate Cake',
      restaurant: 'Sweet Delights',
      price: 'Tsh7.00',
      image: require('@/assets/images/food3.png'),
    },
    {
      id: '5',
      name: 'Veggie Pizza',
      restaurant: 'Pizza Palace',
      price: 'Tsh14.00',
      image: require('@/assets/images/food2.png'),
    },
  ];

  return (
    <LinearGradient
      colors={['#A78BFA', '#F472B6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <View className="flex-1 pt-12 px-4 pb-6">
        {/* Search Bar */}
        <View className="flex-row items-center bg-white rounded-xl p-3 mb-6 shadow-md shadow-black/20">
          <Ionicons name="search" size={24} color="#888" className="mr-2" />
          <TextInput
            placeholder="Search for food or restaurants..."
            className="flex-1 text-lg text-gray-700"
            placeholderTextColor="#888"
          />
          <TouchableOpacity className="ml-2 p-2 bg-violet-500 rounded-lg">
            <Ionicons name="options" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Scrollable Content */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Categories */}
          <Text className="text-2xl font-bold text-white mb-2">Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-6"
          >
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white rounded-lg justify-center items-center mr-4 p-3 shadow-md shadow-black/20"
              >
                <Image
                  source={category.image}
                  className="w-20 h-12 rounded-md mb-1"
                  resizeMode="contain"
                />
                <Text className="text-gray-800 font-semibold text-sm">
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Food List */}
          <Text className="text-2xl font-bold text-white mb-4">Popular Dishes</Text>
          {foodItems.map((food) => (
            <Link href={`/food/Tsh{food.id}`} key={food.id} asChild>
              <TouchableOpacity className="flex-row items-center bg-white rounded-xl p-4 mb-4 shadow-md shadow-black/20">
                <Image
                  source={food.image}
                  className="w-20 h-20 rounded-lg mr-4"
                  resizeMode="cover"
                />
                <View className="flex-1">
                  <Text className="text-xl font-bold text-gray-800">
                    {food.name}
                  </Text>
                  <Text className="text-md text-gray-600">
                    {food.restaurant}
                  </Text>
                  <Text className="text-lg font-semibold text-violet-500 mt-1">
                    {food.price}
                  </Text>
                </View>
                <Ionicons name="arrow-forward" size={24} color="#A78BFA" />
              </TouchableOpacity>
            </Link>
          ))}
          <View className="h-24" /> {/* Extra bottom padding */}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
