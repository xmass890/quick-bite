import { api } from "@/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [author] = useState("User " + Math.floor(Math.random() * 10000));
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const generateUploadUrl = useMutation(api.generateUploadUrl.generateUploadUrl);
  const sendImage = useMutation(api.message.sendImage);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      return Alert.alert("Permission required", "Please allow access to your gallery.");
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!imageUri) return Alert.alert("No Image", "Please pick an image first.");
    setUploading(true);
    try {
      const postUrl = await generateUploadUrl();
      const resp = await fetch(imageUri);
      const blob = await resp.blob();
      const res = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": blob.type },
        body: blob,
      });
      if (!res.ok) throw new Error("Upload failed");
      const { storageId } = await res.json();

      await sendImage({ storageId, author });
      Alert.alert("Success", "Image uploaded!");
      setImageUri(null);
    } catch (err: any) {
      console.error(err);
      Alert.alert("Upload failed", err.message || "Something went wrong.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <TouchableOpacity
        onPress={pickImage}
        className="w-48 h-48 mb-4 bg-gray-200 rounded-lg items-center justify-center overflow-hidden"
      >
        {imageUri ? (
          <Image source={{ uri: imageUri }} className="w-full h-full" resizeMode="cover" />
        ) : (
          <Ionicons name="camera" size={48} color="#888" />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={uploadImage}
        disabled={!imageUri || uploading}
        className={`py-3 px-6 rounded-xl ${
          !imageUri || uploading ? "bg-gray-400" : "bg-blue-600"
        }`}
      >
        <Text className="text-white font-semibold">
          {uploading ? "Uploading..." : "Upload Image"}
        </Text>
      </TouchableOpacity>

      <Text className="mt-4 text-gray-600">Author: {author}</Text>
    </View>
  );
}
