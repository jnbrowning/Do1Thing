import { Button } from "@rneui/themed";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useFonts } from "expo-font";
import { getFBAuth, saveAndDispatch } from "../data/DB";

export default function Badge() {

    return (
        <View style={styles.badge}></View>
    )
}

const styles = StyleSheet.create({
    badge: {
        backgroundColor: "pink",
        width: "18%",
        height: "100%",
        borderRadius: "100%",
        margin: '2%',
      },
    })