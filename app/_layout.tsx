import { useColorScheme } from "@/hooks/useColorScheme";
import { DrawerParamList } from "@/types/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeLayout from "./(home)/_layout";
import OrdersLayout from "./(orders)/_layout";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer.Navigator
          screenOptions={{
            headerShown: true,
            drawerActiveBackgroundColor: "#000000",
            drawerActiveTintColor: "#ffffff",
            drawerStatusBarAnimation: "slide",
            drawerType: "back",
          }}
        >
          <Drawer.Screen
            name="(home)"
            options={{
              drawerLabel: "Home",
              title: "Home",
            }}
            component={HomeLayout}
          />
          <Drawer.Screen
            name="(orders)"
            options={{
              drawerLabel: "Orders",
              title: "Orders",
            }}
            component={OrdersLayout}
          />
        </Drawer.Navigator>
      </GestureHandlerRootView>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
