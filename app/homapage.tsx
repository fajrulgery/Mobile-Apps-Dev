import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5F5F0" }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={{ padding: 20, paddingTop: 60 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <View>
            <Text style={{ fontSize: 16, color: "#999", marginBottom: 5 }}>Hi,</Text>
            <Text style={{ fontSize: 32, fontWeight: "700" }}>Haikal</Text>
          </View>
          <View style={{ position: "relative" }}>
            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "#FF6B4A" }} />
            <View style={{ 
              position: "absolute", 
              bottom: -5, 
              right: -5, 
              width: 24, 
              height: 24, 
              borderRadius: 12, 
              backgroundColor: "#1A1A2E", 
              justifyContent: "center", 
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#F5F5F0"
            }}>
              <Text style={{ color: "white", fontSize: 10, fontWeight: "600" }}>8</Text>
            </View>
          </View>
        </View>

        {/* Banner */}
        <View style={{ 
          backgroundColor: "#FF6B4A", 
          borderRadius: 20, 
          padding: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25
        }}>
          <Text style={{ color: "white", fontSize: 28, fontWeight: "700", flex: 1 }}>
            Plan Your{"\n"}Summer!
          </Text>
          <TouchableOpacity style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: 15,
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{ color: "white", fontSize: 24 }}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15, marginBottom: 25 }}>
          <View style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E8E8E0",
            borderRadius: 15,
            paddingHorizontal: 20,
            paddingVertical: 15
          }}>
            <Text style={{ fontSize: 20, marginRight: 10 }}>🔍</Text>
            <TextInput
              placeholder="Search destination..."
              placeholderTextColor="#999"
              style={{ flex: 1, fontSize: 16 }}
            />
          </View>
          <TouchableOpacity style={{
            backgroundColor: "#1A1A2E",
            width: 50,
            height: 50,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{ color: "white", fontSize: 20 }}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Destination Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Popular Destination</Text>
          <Text style={{ fontSize: 16, color: "#999" }}>View All</Text>
        </View>
      </View>

      {/* Destination Cards */}
      <View style={{ paddingHorizontal: 20, paddingBottom: 30 }}>
        {/* Labuan Bajo Card */}
        <View style={{
          borderRadius: 25,
          overflow: "hidden",
          marginBottom: 20,
          backgroundColor: "white"
        }}>
          <View style={{ position: "relative" }}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
              }}
              style={{ width: "100%", height: 280 }}
            />
            <View style={{
              position: "absolute",
              top: 15,
              right: 15,
              width: 45,
              height: 45,
              borderRadius: 22.5,
              backgroundColor: "rgba(255,255,255,0.9)",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{ fontSize: 20 }}>🤍</Text>
            </View>
            <View style={{
              position: "absolute",
              bottom: 15,
              left: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.9)",
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 12
            }}>
              <Text style={{ fontSize: 14, marginRight: 5 }}>📍</Text>
              <Text style={{ fontSize: 14, fontWeight: "600" }}>Indonesia</Text>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: 22, fontWeight: "700" }}>Labuan Bajo</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 18, marginRight: 5 }}>⭐</Text>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>5.0</Text>
              </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#FF6B4A", marginTop: 5 }}>
              $4.000/pax
            </Text>
          </View>
        </View>

        {/* Italia Card */}
        <View style={{
          borderRadius: 25,
          overflow: "hidden",
          backgroundColor: "white"
        }}>
          <View style={{ position: "relative" }}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800",
              }}
              style={{ width: "100%", height: 280 }}
            />
            <View style={{
              position: "absolute",
              top: 15,
              right: 15,
              width: 45,
              height: 45,
              borderRadius: 22.5,
              backgroundColor: "rgba(255,255,255,0.9)",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{ fontSize: 20 }}>🤍</Text>
            </View>
            <View style={{
              position: "absolute",
              bottom: 15,
              left: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.9)",
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 12
            }}>
              <Text style={{ fontSize: 14, marginRight: 5 }}>📍</Text>
              <Text style={{ fontSize: 14, fontWeight: "600" }}>Italia</Text>
            </View>
            <View style={{
              position: "absolute",
              bottom: 15,
              right: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.9)",
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 12
            }}>
              <Text style={{ fontSize: 18, marginRight: 5 }}>⭐</Text>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>4.7</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={{
        backgroundColor: "#1A1A2E",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 20,
        paddingBottom: 30
      }}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <View style={{ 
            width: 50, 
            height: 50, 
            borderRadius: 25, 
            backgroundColor: "#F5F5F0",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{ fontSize: 24 }}>🏠</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <View style={{ 
            width: 50, 
            height: 50, 
            borderRadius: 25, 
            backgroundColor: "rgba(255,255,255,0.2)",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{ fontSize: 24 }}>🎫</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <View style={{ 
            width: 50, 
            height: 50, 
            borderRadius: 25, 
            backgroundColor: "rgba(255,255,255,0.2)",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{ fontSize: 24 }}>👤</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}