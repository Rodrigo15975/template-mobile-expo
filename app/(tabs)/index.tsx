import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useFonts } from "expo-font";
import { Button, Pressable, TouchableOpacity } from "react-native";

export default function TabOneScreen() {
  const [fontsLoaded, fontError] = useFonts({
    RobotoSlab: require("../../assets/fonts/RobotoSlab-Light.ttf"),
  });

  return (
    <View>
      <Text
        style={{ fontFamily: "RobotoSlab" }}
        className="text-xl font-extrabold"
      >
        Tab One
      </Text>
      <Text style={{ fontFamily: "RobotoSlab" }} className="text-xl">
        Tab One
      </Text>
      <Text
        style={{ fontFamily: "RobotoSlab" }}
        className="text-3xl font-black"
      >
        hola
      </Text>
      <TouchableOpacity>
        <Text>Hola</Text>
      </TouchableOpacity>
      <Pressable>
        <Text
          style={{ fontFamily: "RobotoSlab" }}
          className="font-extrabold text-2xl bg-black text-white p-2"
        >
          hola
        </Text>
      </Pressable>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
