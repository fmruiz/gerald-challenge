import DrawerWrapper from "@/components/DrawerWrapper";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "./cart";
import FavouritesScreen from "./favourites";
import HomeScreen from "./index";

const Tabs = createBottomTabNavigator();

export default function HomeLayout() {
  return (
    <DrawerWrapper>
      <Tabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderTopWidth: 1,
            borderTopColor: "#E5E5EA",
          },
          headerShown: false,
        }}
        initialRouteName="index"
      >
        <Tabs.Screen
          name="index"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          component={CartScreen}
          options={{
            title: "Cart",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favourites"
          component={FavouritesScreen}
          options={{
            title: "Favourites",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" size={size} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </DrawerWrapper>
  );
}
