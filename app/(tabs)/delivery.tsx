import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DeliveryScreen() {
  const insets = useSafeAreaInsets();
  const { width, height } = Dimensions.get('window');

  // Example coordinates
  const lat = 37.7749;
  const lng = -122.4194;
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=${Math.floor(width)}x${Math.floor(height)}&maptype=roadmap&key=YOUR_API_KEY`; // :contentReference[oaicite:1]{index=1}

  return (
    <View className="flex-1 bg-gray-100">
      {/* Full-screen map */}
      <Image
        source={require("@/assets/images/map.png")}
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />

      {/* Bottom card with ETA */}
      <View
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 shadow-lg"
        style={{ paddingBottom: insets.bottom + 16 }}
      >
        <Text className="text-xl font-bold mb-2">Estimated Arrival</Text>
        <Text className="text-3xl font-semibold text-green-600 mb-4">10–15 mins</Text>
        <TouchableOpacity className="bg-blue-600 rounded-xl py-3 items-center">
          <Text className="text-white font-semibold">Track Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
