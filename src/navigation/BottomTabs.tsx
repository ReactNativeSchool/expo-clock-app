import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WorldClock from "screens/WorldClock";
import Alarm from "screens/Alarm";
import StopWatch from "screens/StopWatch";
import Timer from "src/screens/Timer";

type BottomTabsParamList = {
  WorldClock: undefined;
  Alarm: undefined;
  StopWatch: undefined;
  Timer: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="StopWatch">
      <Tab.Screen name="WorldClock" component={WorldClock} />
      <Tab.Screen name="Alarm" component={Alarm} />
      <Tab.Screen name="StopWatch" component={StopWatch} />
      <Tab.Screen name="Timer" component={Timer} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
