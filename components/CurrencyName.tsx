import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { Color } from "../constants/Color";
import { FontSize } from "../constants/FontSize";

interface NameProps {
  id: string;
  name: string;
  icon: string;
  style: string;
}

export default function CurrencyName({ id, name, icon, style }: NameProps) {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={style === "main" ? styles.icon : styles.iconModal}
      />
      <View style={styles.nameContainer}>
        <Text
          style={style === "main" ? styles.id : [styles.id, styles.idModal]}
        >
          {id}
        </Text>
        <Text
          style={
            style === "main" ? styles.name : [styles.name, styles.nameModal]
          }
        >
          {name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "baseline",
  },
  id: {
    fontFamily: "Gilroy-Bold",
    fontSize: FontSize.default,
    color: Color.currencyID,
    textTransform: "uppercase",
  },
  idModal: {
    fontFamily: "Gilroy-Regular",
  },
  name: {
    fontFamily: "Gilroy-Regular",
    fontSize: FontSize.default,
    color: Color.currencyName,
  },
  nameModal: {
    fontSize: FontSize.small,
  },
  icon: {
    width: 16,
    height: 16,
  },
  iconModal: {
    width: 20,
    height: 20,
  },
});
