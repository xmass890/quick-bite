import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#A78BFA', '#F472B6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 px-4"
    >
      <View
        className="flex-1"
        style={{ paddingTop: insets.top }}
      >
        {/* Avatar Section */}
        <View className="items-center mt-8 mb-6">
          <Image
            source={require('@/assets/images/avatar.png')}
            className="w-32 h-32 rounded-full bg-gray-300"
          />
          <TouchableOpacity className="mt-3 border border-white/60 rounded-full px-4 py-1">
            <Text className="text-white">Edit profile</Text>
          </TouchableOpacity>
        </View>

        {/* User Details */}
        <View className="space-y-6 bg-white/90 rounded-xl p-6 shadow-md">
          <View>
            <Text className="text-gray-500 text-sm">Full Name</Text>
            <Text className="text-gray-900 text-lg font-semibold">
              John Doe
            </Text>
          </View>

          <View>
            <Text className="text-gray-500 text-sm">Username</Text>
            <Text className="text-gray-900 text-lg font-semibold">
              johndoe123
            </Text>
          </View>

          <View>
            <Text className="text-gray-500 text-sm">Email</Text>
            <Text className="text-gray-900 text-lg font-semibold">
              john.doe@example.com
            </Text>
          </View>

          <View>
            <Text className="text-gray-500 text-sm">Phone Number</Text>
            <Text className="text-gray-900 text-lg font-semibold">
              +225 75483-9458
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
