import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import { Colors } from "../constants/Colors";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: Colors.headerBackground,
  },
  logo: {
    width: 75,
    height: 20,
  },
});
