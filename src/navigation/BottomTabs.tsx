import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WorldClock from "screens/WorldClock";
import Alarm from "screens/Alarm";
import StopWatch from "screens/StopWatch";
import Timer from "src/screens/Timer";

import { useThemeColors } from "hooks/useThemeColors";

type TabBarIconProps = {
  color: string;
  size: number;
  name: keyof typeof Ionicons.glyphMap;
};

const TabBarIcon = ({ color, size, name }: TabBarIconProps) => (
  <Ionicons name={name} size={size} color={color} />
);

type BottomTabsParamList = {
  WorldClock: undefined;
  Alarm: undefined;
  StopWatch: undefined;
  Timer: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabs = () => {
  const { colors } = useThemeColors();

  return (
    <Tab.Navigator
      initialRouteName="StopWatch"
      screenOptions={{
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarActiveTintColor: colors.tabBarActive,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="WorldClock"
        component={WorldClock}
        options={{
          title: "World Clock",
          tabBarIcon: (props) => <TabBarIcon name="globe" {...props} />,
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={Alarm}
        options={{
          title: "Alarm",
          tabBarIcon: (props) => <TabBarIcon name="alarm" {...props} />,
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="StopWatch"
        component={StopWatch}
        options={{
          title: "Stopwatch",
          tabBarIcon: (props) => <TabBarIcon name="stopwatch" {...props} />,
        }}
      />
      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          title: "Timer",
          tabBarIcon: (props) => <TabBarIcon name="timer-outline" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
