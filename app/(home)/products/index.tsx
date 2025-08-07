import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { products } from "@/constants/Products";

export default function ProductsScreen() {
  const navigation = useNavigation();

  const renderProduct = ({ item }: { item: (typeof products)[0] }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => {
        // @ts-ignore
        navigation.navigate("product-detail", { id: item.id });
      }}
    >
      <ThemedView style={styles.productInfo}>
        <ThemedText type="title" style={styles.productName}>
          {item.name}
        </ThemedText>
        <ThemedText style={styles.productPrice}>{item.price}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ThemedSafeAreaView>
      <ThemedView style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </ThemedView>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  listContainer: {
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
  },
  productInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
});
