import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface Option {
  label: string;
  value: string;
}

interface RadioButtonInputProps {
  label: string;
  options: Option[];
  selected: string | undefined;
  onSelect: (value: string) => void;
  error?: string;
  required?: boolean;
}

export default function RadioButtonInput({
  label,
  options,
  selected,
  onSelect,
  error,
  required,
}: RadioButtonInputProps) {
  return (
    <View className="w-full mb-4">
      <Text className="text-sm font-medium">
        {label} {required && <Text className="text-red-500">*</Text>}
      </Text>

      <View className="flex-row space-x-2 mt-2">
        {options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <TouchableOpacity
              key={opt.value}
              onPress={() => onSelect(opt.value)}
              className={`border ${
                isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
              } rounded-full px-4 py-2`}
            >
              <Text
                className={`text-base ${
                  isSelected ? 'text-white' : 'text-gray-800'
                }`}
              >
                {opt.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {error && <Text className="text-xs text-red-500 mt-1">{error}</Text>}
    </View>
  );
}
