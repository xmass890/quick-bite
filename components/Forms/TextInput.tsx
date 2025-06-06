import { useState } from "react";
import { TextInput as RNTextInput, Text, View } from "react-native";

interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  required?: boolean;
  label: string;
}

export default function TextInput({
  value,
  onChangeText,
  placeholder,
  required,
  label,
}: TextInputProps) {
  const [touched, setTouched] = useState(false);
  const showError = required && touched && value.trim() === "";

  return (
    <View className="w-full mb-4">
      <Text className="text-sm font-medium mb-1">
        {label} {required && <Text className="text-red-500">*</Text>}
      </Text>
      <RNTextInput
        className={`border ${showError ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-2`}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={() => setTouched(true)}
        autoCapitalize="none"
        placeholderTextColor="#888"
      />
      {showError && (
        <Text className="text-xs text-red-500 mt-1">This field is required!</Text>
      )}
    </View>
  );
}
