import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
  return (
    <View>
      <Text>Modal</Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/modal.tsx" />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
