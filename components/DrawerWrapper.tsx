import { useDrawerProgress } from "@react-navigation/drawer";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const DrawerWrapper = ({ children }: { children: React.ReactNode }) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(progress.value, [0, 1], [1, 1], "clamp") },
      {
        rotate: `${interpolate(progress.value, [0, 1], [0, -10])}deg` as const,
      },
      {
        translateX: interpolate(progress.value, [0, 1], [0, 70]),
      },
      {
        translateY: interpolate(progress.value, [0, 1], [0, 100]),
      },
    ],
    borderRadius: 20,
    overflow: "hidden",
  }));

  return (
    <Animated.View style={[animatedStyle, { flex: 1 }]}>
      {children}
    </Animated.View>
  );
};

export default DrawerWrapper;
