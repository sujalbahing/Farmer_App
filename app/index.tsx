import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-primary-100" edges={["top"]}>
      <View className="h-[200px] bg-primary-100" />
      <View className="flex-1 bg-primary-200" />
    </SafeAreaView>
  );
}
