import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useFonts } from "expo-font";

export default function TabTwoScreen() {
  const [fontsLoaded, fontError] = useFonts({
    "Roboto": require("../../assets/fonts/RobotoSlab-Regular.ttf"),
  });

  return (
    <View>
      <Text style={{ fontFamily: "Roboto" }}>Tasdab Two</Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
