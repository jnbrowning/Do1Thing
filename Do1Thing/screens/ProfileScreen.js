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

const auth = getFBAuth();

export default function ProfileScreen({navigation}) {
// What font are we using?
//   let customFonts = {
//     Armalite: require("../assets/fonts/armalite.ttf"),
//     ZenDots: require("../assets/fonts/zendots.ttf"),
//     RobotoMono: require("../assets/fonts/RobotoMono.ttf"),
//   };
//   const [fontsLoaded] = useFonts(customFonts);

//   if (!fontsLoaded) {
//     return <View></View>;
//   } else {
    return (
      <View style={styles.container}>
        {/* <Header navigation={navigation} headingText={""} /> */}

        <View style={styles.profile}>
          <View style={styles.profile_pic}></View>
          <Text style={styles.usernameText}>username</Text>
          <Text style={styles.startDateText}>
            Player since 1/1/2001
          </Text>
        </View>

        <View style={styles.statisticsList}>
          <View style={styles.statisticGroup}>
            <Text style={styles.statisticText}>Modules completed:</Text>
            <Text style={styles.numberText}>0</Text>
          </View>
          <View style={styles.statisticGroup}>
            <Text style={styles.statisticText}>Percent finished:</Text>
            <Text style={styles.numberText}>0%</Text>
          </View>
          </View>

          <Text style={styles.badgeSectionText}>Badges:</Text>
          <View style={styles.badgesSection}>
            <View style={styles.badge}></View>
            <View style={styles.badge}></View>
            <View style={styles.badge}></View>
          </View>

    
      </View>
    );
        }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile_pic: {
    backgroundColor: "darkblue",
    width: "30%",
    height: "60%",
    borderRadius: "100%",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.3,
  },
  usernameText: {
    fontSize: "16pt",
    fontWeight: "bold",
    padding: "1%",
  },
  startDateText: {
    fontSize: "14pt",
  },
  statisticsList: {
    flex: 0.3,
    display: "flex",
    justifyContent: "space-evenly",
  },
  statisticGroup: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  numberText: {
    fontWeight: "bold",
  },
  badgesSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    flex: 0.1,
  },
  badge: {
    backgroundColor: "pink",
    width: "18%",
    height: "100%",
    borderRadius: "100%",
    margin: '2%',
  },
  badgeSectionText: {
    fontWeight: 'bold',
    paddingLeft: '3%',
    paddingBottom: '3%',
    fontSize: '18pt'
  }
});