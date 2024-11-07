import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import "../global.css";
import { Slot } from "expo-router";

const Layout = () => {
  return (
    <SafeAreaView className="bg-[#190929] flex-1">
      <Slot />
    </SafeAreaView>
  );
};

export default Layout;
