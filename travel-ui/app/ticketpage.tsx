import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function TicketsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Aircraft");
  const [selectedDate, setSelectedDate] = useState(23);

  const categories = ["Hotel", "Aircraft", "Villa", "Attraction"];
  const dates = [
    { day: "S", date: 22 },
    { day: "M", date: 23 },
    { day: "T", date: 24 },
    { day: "W", date: 25 },
    { day: "T", date: 26 },
    { day: "F", date: 27 },
    { day: "S", date: 28 }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F0" }}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 60,
          paddingBottom: 20
        }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 24 }}>←</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Tickets</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 24 }}>⋮</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          {/* Current Location */}
          <Text style={{ fontSize: 14, color: "#999", marginBottom: 5 }}>Current locations</Text>
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginBottom: 25 }}>
            <Text style={{ fontSize: 32, fontWeight: "700", marginRight: 10 }}>Netherlands</Text>
            <Text style={{ fontSize: 20 }}>∨</Text>
          </TouchableOpacity>

          {/* Category Tabs */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 25 }}
          >
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedCategory(category)}
                style={{
                  backgroundColor: selectedCategory === category ? "#FF6B4A" : "#E8E8E0",
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                  borderRadius: 25,
                  marginRight: 10
                }}
              >
                <Text style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: selectedCategory === category ? "white" : "#333"
                }}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Date Selection */}
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
            <Text style={{ fontSize: 24, fontWeight: "700", marginRight: 10 }}>June, 2025</Text>
            <Text style={{ fontSize: 18 }}>∨</Text>
          </TouchableOpacity>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 25 }}
          >
            {dates.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDate(item.date)}
                style={{
                  backgroundColor: selectedDate === item.date ? "#FF6B4A" : "#E8E8E0",
                  width: 70,
                  height: 80,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10
                }}
              >
                <Text style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: selectedDate === item.date ? "white" : "#666",
                  marginBottom: 5
                }}>
                  {item.day}
                </Text>
                <Text style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: selectedDate === item.date ? "white" : "#333"
                }}>
                  {item.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Tickets Found */}
          <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>4 Tickets Found</Text>
        </View>

        {/* Flight Cards */}
        <View style={{ paddingHorizontal: 20, paddingBottom: 100 }}>
          {/* Flight Card 1 */}
          <View style={{
            backgroundColor: "white",
            borderRadius: 20,
            overflow: "hidden",
            marginBottom: 15,
            flexDirection: "row"
          }}>
            <View style={{
              width: 100,
              backgroundColor: "#FF6B4A",
              justifyContent: "center",
              alignItems: "center",
              position: "relative"
            }}>
              <Text style={{
                color: "white",
                fontSize: 14,
                fontWeight: "700",
                transform: [{ rotate: "-90deg" }],
                width: 100,
                textAlign: "center"
              }}>
                AIRLINES
              </Text>
              <View style={{
                position: "absolute",
                bottom: 20,
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#1A1A2E",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Text style={{ fontSize: 24 }}>✈️</Text>
              </View>
            </View>

            <View style={{ flex: 1, padding: 20 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                <View>
                  <Text style={{ fontSize: 32, fontWeight: "700" }}>NL</Text>
                  <Text style={{ fontSize: 14, color: "#666" }}>Rotterdam</Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ fontSize: 24 }}>✈️</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 32, fontWeight: "700" }}>IDN</Text>
                  <Text style={{ fontSize: 14, color: "#666" }}>Labuan Bajo</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>5:30pm</Text>
                  <Text style={{ fontSize: 13, color: "#666" }}>Mon, 23 Jun</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>3:30am</Text>
                  <Text style={{ fontSize: 13, color: "#666" }}>Tue, 24 Jun</Text>
                </View>
              </View>

              <Text style={{ fontSize: 24, fontWeight: "700" }}>$1.700</Text>
            </View>
          </View>

          {/* Flight Card 2 */}
          <View style={{
            backgroundColor: "white",
            borderRadius: 20,
            overflow: "hidden",
            flexDirection: "row"
          }}>
            <View style={{
              width: 100,
              backgroundColor: "#FF6B4A",
              justifyContent: "center",
              alignItems: "center",
              position: "relative"
            }}>
              <Text style={{
                color: "white",
                fontSize: 14,
                fontWeight: "700",
                transform: [{ rotate: "-90deg" }],
                width: 100,
                textAlign: "center"
              }}>
                AIR LINES
              </Text>
              <View style={{
                position: "absolute",
                bottom: 20,
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#1A1A2E",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Text style={{ fontSize: 24 }}>✈️</Text>
              </View>
            </View>

            <View style={{ flex: 1, padding: 20 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                <View>
                  <Text style={{ fontSize: 32, fontWeight: "700" }}>NL</Text>
                  <Text style={{ fontSize: 14, color: "#666" }}>Rotterdam</Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ fontSize: 24 }}>✈️</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 32, fontWeight: "700" }}>IDN</Text>
                  <Text style={{ fontSize: 14, color: "#666" }}>Labuan Bajo</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>5:30pm</Text>
                  <Text style={{ fontSize: 13, color: "#666" }}>Mon, 23 Jun</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>3:30am</Text>
                  <Text style={{ fontSize: 13, color: "#666" }}>Tue, 24 Jun</Text>
                </View>
              </View>

              <Text style={{ fontSize: 24, fontWeight: "700" }}>$1.700</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
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
            backgroundColor: "rgba(255,255,255,0.2)",
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
            backgroundColor: "#F5F5F0",
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
    </View>
  );
}