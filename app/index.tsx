import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { fontFamily } from "@/constants/Fonts";
import Body from "@/containers/Body";
import Header from "@/containers/Header";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loadedFonts, error] = useFonts({ Nunito_700Bold, Nunito_400Regular });

  useEffect(() => {
    if (loadedFonts || error) {
      SplashScreen.hideAsync();
    }
  }, [loadedFonts, error]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.title}>Convert Currency</Text>
      <Body />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E9F0",
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 36,
    textAlign: "center",
    marginTop: 48,
  },
});
