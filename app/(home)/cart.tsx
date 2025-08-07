import { HelloWave } from "@/components/HelloWave";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function CartScreen() {
  return (
    <ThemedSafeAreaView>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Shopping Cart
        </ThemedText>
        <HelloWave />
      </ThemedView>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
  },
});
