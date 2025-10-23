import React from "react";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const StartScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.safe}>
      <ImageBackground
        source={require("../assets/images/bali.jpg")}
        style={styles.background}
        imageStyle={styles.image}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.3)", "transparent"]}
          style={styles.gradient}
        />

        <View style={styles.content}>
          <Text style={styles.title}>Jadilah petualang yang berkelana</Text>
          <Text style={styles.subtitle}>
            Agar tahu isi dunia, kita harus menjelajahi bumi
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/homapage')}
          >
            <Text style={styles.buttonText}>Mulai Sekarang</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    resizeMode: "cover",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    paddingHorizontal: 25,
    paddingBottom: 70,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.9)",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#2ed573",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    width: "65%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
