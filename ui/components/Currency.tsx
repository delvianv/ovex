import { Image } from "expo-image";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/constants/Colors";
import { fontFamily, fontSize } from "@/constants/Fonts";
import { CurrencyContext } from "@/lib/CurrencyProvider";

interface ContainerProps {
  currencyID: string;
}

export default function Currency({ currencyID }: ContainerProps) {
  const currencies = useContext(CurrencyContext);
  const currency = currencies.find((currency) => currency.id === currencyID);

  return (
    <>
      {currency && (
        <View style={styles.container}>
          <Image source={currency.icon_url} style={styles.icon} />
          <Text style={styles.currencyID}>{currency.id}</Text>
          <Text style={styles.currencyName}>{currency.name}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 16,
    height: 16,
  },
  currencyID: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.currency,
    color: colors.text,
    textTransform: "uppercase",
    marginHorizontal: 8, // gap on container cuts letters off for some reason
  },
  currencyName: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.currency,
    color: colors.label,
  },
});
