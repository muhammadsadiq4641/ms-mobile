import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="bg-blue-50">
        <Text className="text-4xl">Index</Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;
