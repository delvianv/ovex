import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Title from "./components/Title";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Gilroy-Regular": require("./assets/fonts/gilroy/Gilroy-Regular.ttf"),
    "Gilroy-Bold": require("./assets/fonts/gilroy/Gilroy-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Title />
      <Inputs />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E9F0",
  },
});
