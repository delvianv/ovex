import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header";
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";
import { Color } from "./constants/Color";
import { FontSize } from "./constants/FontSize";

SplashScreen.preventAutoHideAsync();

export interface Currency {
  id: string;
  name: string;
  type: string;
  icon_url: string;
  symbol: string;
  display_precision: number;
}

export default function App() {
  const [loaded, error] = useFonts({
    "Gilroy-Regular": require("./assets/fonts/gilroy/Gilroy-Regular.ttf"),
    "Gilroy-Bold": require("./assets/fonts/gilroy/Gilroy-Bold.ttf"),
  });
  const [amount, setAmount] = useState(0);
  const [sourceCurrency, setSourceCurrency] = useState<Currency | undefined>();
  const [destCurrency, setDestCurrency] = useState<Currency | undefined>();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Convert Currency</Text>
      <View style={styles.ioContainer}>
        <InputContainer
          amount={amount}
          setAmount={setAmount}
          sourceCurrency={sourceCurrency}
          setSourceCurrency={setSourceCurrency}
          destCurrency={destCurrency}
          setDestCurrency={setDestCurrency}
        />
        {sourceCurrency && destCurrency && (
          <OutputContainer
            amount={amount}
            sourceCurrency={sourceCurrency}
            destCurrency={destCurrency}
          />
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.appBackground,
  },
  ioContainer: {
    backgroundColor: Color.ioContainer,
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 7,
    gap: 42,
  },
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.appTitle,
    color: Color.appTitle,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 25,
  },
});
