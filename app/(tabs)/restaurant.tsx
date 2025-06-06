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

export default function SearchScreen() {
  const results = [
    {
      id: '1',
      name: 'Spicy Chicken Pizza',
      restaurant: 'Pizza Palace',
      price: '$16.00',
      image: require('@/assets/images/food1.png'),
    },
    {
      id: '2',
      name: 'Avocado Burger',
      restaurant: 'Burger Joint',
      price: '$13.50',
      image: require('@/assets/images/food2.png'),
    },
    {
      id: '3',
      name: 'Dragon Roll Sushi',
      restaurant: 'Sushi Spot',
      price: '$20.00',
      image: require('@/assets/images/food3.png'),
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

        {/* Results */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-2xl font-bold text-white mb-4">Search Results</Text>

          {results.map((item) => (
            <Link href={`/food/${item.id}`} key={item.id} asChild>
              <TouchableOpacity className="flex-row items-center bg-white rounded-xl p-4 mb-4 shadow-md shadow-black/20">
                <Image
                  source={item.image}
                  className="w-20 h-20 rounded-lg mr-4"
                  resizeMode="cover"
                />
                <View className="flex-1">
                  <Text className="text-xl font-bold text-gray-800">{item.name}</Text>
                  <Text className="text-md text-gray-600">{item.restaurant}</Text>
                  <Text className="text-lg font-semibold text-violet-500 mt-1">
                    {item.price}
                  </Text>
                </View>
                <Ionicons name="arrow-forward" size={24} color="#A78BFA" />
              </TouchableOpacity>
            </Link>
          ))}

          <View className="h-24" /> {/* Bottom spacing */}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
