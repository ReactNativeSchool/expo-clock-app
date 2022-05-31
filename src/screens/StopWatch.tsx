import { Text, View, StatusBar } from "components/themed";

const StopWatch = () => {
  return (
    <>
      <StatusBar />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 50 }}>00:00:00</Text>
      </View>
    </>
  );
};

export default StopWatch;
