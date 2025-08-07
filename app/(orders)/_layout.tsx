import DrawerWrapper from "@/components/DrawerWrapper";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";

export default function OrdersLayout() {
  return (
    <DrawerWrapper>
      <ThemedSafeAreaView>
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>
            Orders
          </ThemedText>
          <Slot />
        </ThemedView>
      </ThemedSafeAreaView>
    </DrawerWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 20,
  },
});
