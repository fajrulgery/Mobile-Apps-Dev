import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F9F9F9" }}
      showsVerticalScrollIndicator={false}
    >
      {/* Tajuk */}
      <View style={{ padding: 20, paddingTop: 60 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <View>
            <Text style={{ fontSize: 16, color: "#999", marginBottom: 5 }}>Hai,</Text>
            <Text style={{ fontSize: 32, fontWeight: "700" }}>Haikal</Text>
          </View>
          
          <View style={{ position: "relative" }}>
            <Image
              source={require("../assets/images/icon-love.png")}
              style={{ width: 32, height: 32, tintColor: '#333' }}
              resizeMode="contain"
            />
            <View style={{
              position: 'absolute',
              top: -5,
              right: -8,
              backgroundColor: '#FF6B4A',
              borderRadius: 10,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#F9F9F9'
            }}>
              <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>8</Text>
            </View>
          </View>
        </View>

        {/* Spanduk */}
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
            Rencanakan{"\n"}Musim Panasmu!
          </Text>
          <TouchableOpacity style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: 15,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{ color: "white", fontSize: 24 }}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Bilah Pencarian */}
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
              placeholder="Cari destinasi..."
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
              <Image
                source={require("../assets/images/filter-icon.png")}
                style={{ width: 28, height: 28 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
        </View>

        {/* Tajuk Destinasi Populer */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
          <Text style={{ fontSize: 22, fontWeight: "700" }}>Destinasi Populer</Text>
          <Text style={{ fontSize: 16, color: "#999" }}>Lihat Semua</Text>
        </View>
      </View>

      {/* Kartu Destinasi */}
      <View style={{ paddingHorizontal: 20, paddingBottom: 30 }}>
        
        {/* Kartu Bali */}
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
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
            }} />

            <View style={{
              position: "absolute",
              top: 15,
              right: 15,
              width: 45,
              height: 45,
              borderRadius: 22.5,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Image
                source={require("../assets/images/fav-icon.png")}
                style={{ width: 45, height: 45 }}
                resizeMode="contain"
              />
            </View>
            
            <View style={{
              position: "absolute",
              bottom: 20,
              left: 20,
            }}>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
                <Text style={{ fontSize: 14, marginRight: 5 }}>📍</Text>
                <Text style={{ fontSize: 16, fontWeight: "600", color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.7)', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 2 }}>
                  Indonesia
                </Text>
              </View>
              <Text style={{ fontSize: 22, fontWeight: "700", color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.7)', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 2 }}>
                Bali
              </Text>
            </View>

            <View style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              alignItems: 'flex-end'
            }}>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
                <Text style={{ fontSize: 18, marginRight: 5 }}>⭐</Text>
                <Text style={{ fontSize: 18, fontWeight: "600", color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.7)', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 2 }}>
                  5.0
                </Text>
              </View>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "white", textShadowColor: 'rgba(0, 0, 0, 0.7)', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 2 }}>
                Rp 100.000/pax
              </Text>
            </View>
          </View>
        </View>

        {/* Kartu Sukabumi */}
        <View style={{
          borderRadius: 25,
          overflow: "hidden",
          backgroundColor: "white"
        }}>
          <View style={{ position: "relative" }}>
            <Image
              source={{
                uri: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/02/28/FotoJet-84-1077648917.jpg",
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
              <Image
                source={require("../assets/images/fav-icon.png")} 
                style={{ width: 22, height: 22, tintColor: '#333' }} 
                resizeMode="contain"
              />
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
              <Text style={{ fontSize: 14, fontWeight: "600" }}>Sukabumi</Text>
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
      
      {/* Navigasi Bawah */}
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
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Image 
              source={require("../assets/images/home-icon.png")}
              style={{ width: 24, height: 24, tintColor: '#1A1A2E' }}
              resizeMode="contain"
            />
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
            <Image 
              source={require("../assets/images/ticket-icon.png")}
              style={{ width: 24, height: 24, tintColor: 'rgba(255,255,255,0.7)' }}
              resizeMode="contain"
            />
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
             <Image 
              source={require("../assets/images/profile-icon.png")}
              style={{ width: 24, height: 24, tintColor: 'rgba(255,255,255,0.7)' }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}