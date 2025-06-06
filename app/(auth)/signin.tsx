import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#6366F1', '#EC4899']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1 px-6 justify-center"
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        {/* Header */}
        <View className="mb-10">
          <Text className="text-white text-4xl font-bold">Welcome Back</Text>
          <Text className="text-white text-base mt-2">Login to your account</Text>
        </View>

        {/* Form */}
        <View className="space-y-4">
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ccc"
            keyboardType="email-address"
            autoCapitalize="none"
            className="bg-white/90 rounded-xl px-4 py-3 mb-4 text-gray-800"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            className="bg-white/90 rounded-xl px-4 py-3 text-gray-800"
          />
          <TouchableOpacity className="self-end">
            <Text className="text-white text-sm">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity onPress={()=> {router.push("/(tabs)/home")}} className="mt-8 bg-white rounded-xl py-3 items-center">
            Login
        </TouchableOpacity>

        {/* Footer */}rou
        <View className="mt-6 flex-row justify-center">
          <Text className="text-white">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-white underline">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
