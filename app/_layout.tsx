import { useColorScheme } from "@/hooks/useColorScheme";
import { DrawerParamList } from "@/types/drawer";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeLayout from "./(home)/_layout";
import OrdersLayout from "./(orders)/_layout";

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawerContent = (props: any) => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Gerald Challenge</Text>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
};

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
          initialRouteName="(home)"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerActiveBackgroundColor: "#000000",
            drawerActiveTintColor: "#ffffff",
            overlayColor: "transparent",
            drawerStyle: {
              backgroundColor: "#154c79",
              width: "40%",
              height: "100%",
            },
            sceneStyle: {
              backgroundColor: "#154c79",
            },
            headerShown: false,
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

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#154c79",
  },
  headerContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 5,
  },
});
