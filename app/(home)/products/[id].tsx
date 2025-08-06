import { ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { products } from "@/constants/Products";
import { ProductDetailRouteProp } from "@/types/product";

export default function ProductDetailScreen({
  route,
}: {
  route: ProductDetailRouteProp;
}) {
  const { id } = route.params;

  const product = products.find((p) => p.id === id);

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.productName}>
          {product?.name}
        </ThemedText>
        <ThemedText style={styles.price}>{product?.price}</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 12,
  },
  productName: {
    fontSize: 28,
    fontWeight: "bold",
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#007AFF",
    lineHeight: 40,
  },
});
