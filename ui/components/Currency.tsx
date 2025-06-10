import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { CurrencyType } from "@/lib/types";
import { fontFamily, fontSize } from "@/constants/Fonts";
import { colors } from "@/constants/Colors";

interface ContainerProps {
  currency: CurrencyType;
}

export default function Currency({ currency }: ContainerProps) {
  return (
    <View style={styles.container}>
      <Image source={currency.icon_url} style={styles.icon} />
      <Text style={styles.currencyID}>{currency.id}</Text>
      <Text style={styles.currencyName}>{currency.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
