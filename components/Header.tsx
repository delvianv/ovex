import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { Color } from "../constants/Color";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.headerBackground,
    padding: 10,
    alignItems: "center",
  },
  logo: {
    width: 75,
    height: 20,
  },
});
