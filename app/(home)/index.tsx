import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsScreen from "./products";
import ProductDetailScreen from "./products/[id]";

const HomeStack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="products"
        component={ProductsScreen}
        options={{
          title: "Products",
        }}
      />
      <HomeStack.Screen
        name="product-detail"
        component={(props: any) => <ProductDetailScreen {...props} />}
        options={{
          title: "Product Detail",
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>
  );
}
