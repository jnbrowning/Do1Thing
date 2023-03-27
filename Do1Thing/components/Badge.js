import { Button } from "@rneui/themed";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useFonts } from "expo-font";
import { getFBAuth, saveAndDispatch } from "../data/DB";

export default function Badge(badgeID) {

  function determineBadgeIcon() {
    if (badgeID === 1) {
      return require("../assets/badge_icons/Sign_Up_Icon.png");
    } 
  }

    return (
          <Image
          source={determineBadgeIcon()}
          style={styles.badge}>
          </Image>
    )
}

const styles = StyleSheet.create({
    badge: {
        width: "18%",
        height: "100%",
        borderRadius: "100%",
        margin: '2%',
      },
    })