import { Image } from 'expo-image'; // Use expo-image for better performance and caching
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function IndexScreen() {
  return (
    <LinearGradient
      colors={['#8A2BE2', '#FF1493']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1 items-center justify-center p-6" // This centers the ScrollView
    >
      <ScrollView 
        className="flex-1 w-full" // ScrollView should take full width and expand to fill available space
        contentContainerStyle={{ 
          flexGrow: 1, // Allows content to grow and push the bottom content down if ScrollView is flex-1
          alignItems: 'center', // Centers content horizontally within the ScrollView's content container
          justifyContent: 'center', // Centers content vertically if there's extra space
          paddingBottom: 80 // Add padding to make space for the absolutely positioned footer
        }}
      >
        {/* Safe image rendering with fallback */}
        {/* The require statement itself would throw an error if the image is truly missing at build time. */}
        {/* For a more dynamic fallback (e.g., remote image), you'd use state with onError. */}
        <Image
          source={require('@/assets/images/logo.png')}
          className="w-48 h-48 mb-8" // Adjusted className to match the specific sizing
          accessibilityLabel="Quick Bite Logo"
          contentFit="contain"
          style={{ borderRadius: 9999, width: 150, height: 150 }} // Ensures the image is circular
        />
        {/* Removed the conditional fallback for local assets as it's typically handled by the bundler */}

        <Text className="text-5xl font-extrabold text-white text-center my-2">
          QUICK BITE
        </Text>
        
        <Text className="text-xl text-white text-center mb-10 font-light italic">
          Food delivered in minutes
        </Text>
      
        <TouchableOpacity
          className="bg-white py-5 px-12 rounded-full shadow-lg mt-10" // Added mt-10 for more space from tagline
          onPress={() => router.push('/(auth)/signin')} // Consider a more specific route for the main app, e.g., '/home' or '/dashboard'
          activeOpacity={0.8}
        >
          <Text className="text-[#8A2BE2] text-2xl font-bold">
            Let's Eat Now!
          </Text>
        </TouchableOpacity>
      </ScrollView>
      
      {/* Moved outside ScrollView for true absolute positioning at the bottom of the screen */}
      <View className="absolute bottom-8 flex-row space-x-6">
        <TouchableOpacity onPress={() => router.push('/aboutus')}>
          <Text className="text-white opacity-80">About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/terms')}>
          <Text className="text-white opacity-80">Terms & Conditions</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}