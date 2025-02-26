import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header";
import InputContainer from "./components/InputContainer";
import { Colors } from "./constants/Colors";
import { FontSize } from "./constants/FontSize";

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
      <Text style={styles.title}>Convert Currency</Text>
      <InputContainer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.appTitle,
    color: Colors.appTitle,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 25,
  },
});
