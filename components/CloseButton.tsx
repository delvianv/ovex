import { Image } from "expo-image";
import { Pressable, StyleSheet, View } from "react-native";

interface ButtonProps {
  hideModal: () => void;
}

export default function CloseButton({ hideModal }: ButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={hideModal}>
        <Image
          source={require("../assets/icons/close.svg")}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
