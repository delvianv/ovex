import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E222C",
    padding: 8,
    alignItems: "center",
  },
  logo: {
    width: 75,
    height: 20,
  },
});
