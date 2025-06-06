
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function AboutScreen() {
  return (
    <LinearGradient
      colors={['#A78BFA', '#F472B6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 pt-12 px-4"
    >
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-white ml-4">About Us</Text>
      </View>

      <ScrollView className="bg-white rounded-xl p-6 shadow-md flex-1 mb-4">
        <Text className="text-lg text-gray-800 mb-4">
          Welcome to QUICK BITE, your ultimate food delivery companion! We are dedicated to bringing
          the best culinary experiences right to your doorstep, quickly and conveniently.
        </Text>
        <Text className="text-lg text-gray-800 mb-4">
          Our mission is to connect food lovers with their favorite local restaurants, offering a vast
          selection of dishes for every craving. Whether you're in the mood for a gourmet meal, a quick
          snack, or something in between, QUICK BITE has you covered.
        </Text>
        <Text className="text-lg text-gray-800 mb-4">
          Founded in 2024, QUICK BITE started with a simple idea: make ordering food effortless and enjoyable.
          We've grown to serve thousands of happy customers, collaborating with a diverse range of restaurants
          and a dedicated team of deliverers.
        </Text>
        <Text className="text-lg text-gray-800">
          Thank you for choosing QUICK BITE. We are constantly working to improve your experience and look forward
          to serving you!
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}