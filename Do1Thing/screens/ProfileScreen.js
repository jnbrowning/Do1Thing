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
import { getFBAuth, saveAndDispatch, signOutFB } from "../data/DB";
import Badge from "../components/Badge";

const auth = getFBAuth();

export default function ProfileScreen({navigation}) {

let customFonts = {
  Roboto: require("../assets/fonts/RobotoRegular.ttf"),
  RobotoBold: require("../assets/fonts/RobotoBold.ttf")
};
const [fontsLoaded] = useFonts(customFonts);

  const loggedIn = useSelector((state) => {
      if (state !== undefined){
          return state.loggedIn;
      }
  })

  const currentUser = useSelector(state => {
    if (state !== undefined){
        return state.user;
    }
    else {console.log('Cannot find state users yet');}
  })

  if (!fontsLoaded) {
    return <View></View>;
  } else {

  if (loggedIn) {
    return (
      <View style={styles.container}>

        <View style={styles.profile}>
          <Text style={styles.usernameText}>{currentUser.email}</Text>
        </View>

         
           <Text style={styles.badgeSectionText}>Badges Completed: {currentUser.badges.length.toString()}</Text>
          
          <View style={styles.badgesSection}>
         {currentUser.badges.map((badge, index) => {
          return (
            <Badge
              badge={badge}
              key={index}
            />
          );
        })} 
          </View>


        <View style={styles.profileOption}>
        <TouchableOpacity style={styles.optionGroup}>
        <Image></Image>
        <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionGroup}>
        <Image></Image>
        <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.optionGroup}
        onPress={async () => {
          signOutFB();
          dispatch(setLogin(false));
      }} >
        <Image></Image>
        <Text style={styles.optionText}>Log Out</Text>
        </TouchableOpacity >
        </View>

      </View>
    );
  }
  
  else {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Text> Guest mode </Text>
            <TouchableOpacity 
          style={styles.optionGroup}
          onPress={() => {
            navigation.navigate('Login');
        }} >
          <Image></Image>
          <Text style={styles.optionText}>Sign in</Text>
          </TouchableOpacity >
        </View>
      </View>
    );
  }

    
        }
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.3,
  },
  usernameText: {
    fontSize: "24pt",
    padding: "1%",
    fontFamily: "RobotoBold",
    color: '#1D7DAB',
  },
  badgesSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "start",
    padding: '5%',
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
    fontFamily: "RobotoBold",
    paddingLeft: '3%',
    paddingBottom: '3%',
    fontSize: '24pt',
    color: '#1D7DAB',
  },
  optionGroup: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    flex: .2,
  },
  profileOption: {
display: 'flex',
flexDirection: 'column',
flex: 0.3,
  },
  optionText: {
    fontFamily: 'RobotoBold',
    fontSize: '24pt',
    color: '#1D7DAB',
    paddingLeft: '5%',
  }
});