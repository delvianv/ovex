import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/Colors";
import Body from "@/ui/containers/Body";
import Header from "@/ui/containers/Header";
import Title from "@/ui/components/Title";

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
      <Title />
      <Body />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
