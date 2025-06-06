
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function TermsScreen() {
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
        <Text className="text-3xl font-bold text-white ml-4">Terms & Conditions</Text>
      </View>

      <ScrollView className="bg-white rounded-xl p-6 shadow-md flex-1 mb-4">
        <Text className="text-lg font-bold text-gray-900 mb-3">1. Acceptance of Terms</Text>
        <Text className="text-base text-gray-800 mb-4">
          By accessing and using the QUICK BITE mobile application ("the App"), you agree to be bound
          by these Terms and Conditions ("Terms"). If you do not agree to all of these Terms, do not use the App.
        </Text>

        <Text className="text-lg font-bold text-gray-900 mb-3">2. Service Description</Text>
        <Text className="text-base text-gray-800 mb-4">
          QUICK BITE provides a platform that connects users with restaurants and independent delivery
          drivers to facilitate the ordering and delivery of food. We do not prepare or deliver food ourselves.
        </Text>

        <Text className="text-lg font-bold text-gray-900 mb-3">3. User Accounts</Text>
        <Text className="text-base text-gray-800 mb-4">
          To use certain features of the App, you must register for an account. You agree to provide
          accurate and complete information during registration and to keep your account information updated.
        </Text>

        <Text className="text-lg font-bold text-gray-900 mb-3">4. Ordering and Payments</Text>
        <Text className="text-base text-gray-800 mb-4">
          All orders placed through the App are subject to availability and confirmation by the respective
          restaurant. Payment will be processed at the time of order placement. Prices are subject to change.
        </Text>

        <Text className="text-lg font-bold text-gray-900 mb-3">5. Delivery</Text>
        <Text className="text-base text-gray-800 mb-4">
          Delivery times are estimates and may vary due to factors outside of QUICK BITE's control,
          including traffic, weather, and restaurant preparation time.
        </Text>

        <Text className="text-lg font-bold text-gray-900 mb-3">6. Cancellations and Refunds</Text>
        <Text className="text-base text-gray-800 mb-4">
          Cancellation policies and refund eligibility are subject to the policies of the individual
          restaurants and delivery partners. Please refer to our Refund Policy for more details.
        </Text>

        <Text className="text-lg font-bold text-gray-900 mb-3">7. Privacy Policy</Text>
        <Text className="text-base text-gray-800 mb-4">
          Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms by reference.
        </Text>

        <Text className="text-lg font-bold text-gray-900 mb-3">8. Changes to Terms</Text>
        <Text className="text-base text-gray-800 mb-4">
          QUICK BITE reserves the right to modify these Terms at any time. Your continued use of the
          App after any such changes constitutes your acceptance of the new Terms.
        </Text>

        <Text className="text-lg font-bold text-gray-900 mb-3">9. Contact Us</Text>
        <Text className="text-base text-gray-800 mb-4">
          If you have any questions about these Terms, please contact us at support@quickbite.com.
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}