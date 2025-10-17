import React from "react";
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#FAF9F7]">
      <ScrollView showsVerticalScrollIndicator={false} className="px-5">
        {/* Header */}
        <View className="flex-row justify-between items-center mt-2">
          <View>
            <Text className="text-gray-600 text-base">Hi,</Text>
            <Text className="text-xl font-semibold text-black">Haikal</Text>
          </View>
          <TouchableOpacity className="bg-orange-200 p-2 rounded-full">
            <Ionicons name="heart" size={22} color="#FF5722" />
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View className="bg-orange-400 rounded-2xl p-5 mt-5">
          <Text className="text-white text-2xl font-semibold">Plan Your{"\n"}Summer!</Text>
          <TouchableOpacity className="bg-white rounded-xl mt-4 w-10 h-10 justify-center items-center">
            <Ionicons name="arrow-forward" size={20} color="#FF5722" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center mt-5 bg-[#EFEDEB] rounded-xl px-4 py-2">
          <Ionicons name="search" size={18} color="gray" />
          <TextInput
            placeholder="Search destination..."
            placeholderTextColor="#aaa"
            className="flex-1 ml-2 text-gray-700"
          />
          <TouchableOpacity className="bg-[#1E293B] p-2 rounded-xl">
            <Ionicons name="options-outline" size={18} color="white" />
          </TouchableOpacity>
        </View>

        {/* Popular Destination */}
        <View className="flex-row justify-between items-center mt-6 mb-3">
          <Text className="text-lg font-semibold text-gray-800">Popular Destination</Text>
          <Text className="text-sm text-gray-500">View All</Text>
        </View>

        {/* Destination Cards */}
        <View className="space-y-4 mb-6">
          {/* Card 1 */}
          <TouchableOpacity className="rounded-2xl overflow-hidden bg-white shadow">
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1602526216436-6f0f772c3a0d" }}
              className="w-full h-48"
            />
            <View className="absolute top-2 right-2 bg-white/70 rounded-full p-2">
              <Ionicons name="heart-outline" size={20} color="#FF5722" />
            </View>
            <View className="p-4">
              <Text className="text-gray-600 text-sm">🇮🇩 Indonesia</Text>
              <Text className="text-lg font-semibold">Labuan Bajo</Text>
              <View className="flex-row justify-between items-center mt-2">
                <View className="flex-row items-center">
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text className="text-gray-700 ml-1">5.0</Text>
                </View>
                <Text className="text-gray-800 font-semibold">$4.000/pax</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity className="rounded-2xl overflow-hidden bg-white shadow">
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad" }}
              className="w-full h-48"
            />
            <View className="absolute top-2 right-2 bg-white/70 rounded-full p-2">
              <Ionicons name="heart-outline" size={20} color="#FF5722" />
            </View>
            <View className="p-4">
              <Text className="text-gray-600 text-sm">🇮🇹 Italia</Text>
              <Text className="text-lg font-semibold">Venezia</Text>
              <View className="flex-row justify-between items-center mt-2">
                <View className="flex-row items-center">
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text className="text-gray-700 ml-1">4.7</Text>
                </View>
                <Text className="text-gray-800 font-semibold">$3.200/pax</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navbar */}
      <View className="flex-row justify-around items-center py-3 bg-[#1E293B] rounded-t-3xl">
        <Ionicons name="home" size={24} color="white" />
        <Ionicons name="search" size={24} color="#CBD5E1" />
        <Ionicons name="person" size={24} color="#CBD5E1" />
      </View>
    </SafeAreaView>
  );
}
