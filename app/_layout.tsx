import "@/global.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

// --- Environment Variable Configuration ---
const EXPO_PUBLIC_CONVEX_URL = process.env.EXPO_PUBLIC_CONVEX_URL;

if (!EXPO_PUBLIC_CONVEX_URL) {
  throw new Error("ERROR: EXPO_PUBLIC_CONVEX_URL is not set.");
}

const convex = new ConvexReactClient(EXPO_PUBLIC_CONVEX_URL, {
  unsavedChangesWarning: false,
});

// --- Root Layout ---
export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Welcome" }} />
        <Stack.Screen name="(auth)/login" options={{ title: "Login" }} />
        <Stack.Screen name="(auth)/register" options={{ title: "Register" }} />
        <Stack.Screen name="(tabs)" options={{ title: "Main App" }} />
        {/* Add more screens as needed */}
      </Stack>
    </ConvexProvider>
  );
}
