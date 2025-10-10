import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="start" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{headerShown: false}}/>
      <Stack.Screen name="product/[id]" options={{ title: "Product Details" }} />
      <Stack.Screen name="screens/login" options={{ title: "Login" }} />
    </Stack>
  );
}
