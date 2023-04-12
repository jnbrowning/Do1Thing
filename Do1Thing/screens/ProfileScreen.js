import { Button } from "@rneui/themed";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking
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
          <Text style={styles.usernameText}>Profile</Text>
          <Image source={require("../assets/general/Thumbnail_Logo.png")}
          style={styles.logo}></Image>
        </View>

         
           <Text style={styles.badgeSectionText}>My Badges</Text>
          
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

        <TouchableOpacity style={styles.optionGroup}
        onPress={() => Linking.openURL('https://www.do1thing.com/contact/')}>
        <Image source={require("../assets/general/Help_Icon.png")}
          style={styles.optionImage}></Image>
        <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.optionGroup}
        onPress={async () => {
          signOutFB();
          dispatch(setLogin(false));
      }} >
        <Image source={require("../assets/general/Log_Out_Icon.png")}
          style={styles.optionImage}></Image>
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
          <TouchableOpacity onPress={() => {
                              navigation.navigate('Login',{screen: 'LoginScreen'})
                            }} 
          >
            <Text>Log In</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

    
        }
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  usernameText: {
    fontSize: 36,
    padding: "1%",
    fontFamily: "RobotoBold",
    color: '#1D7DAB',
  },
  badgesSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    padding: '5%',
    flex: .2,
  },
  badge: {
    backgroundColor: "pink",
    width: "18%",
    height: "100%",
    margin: '2%',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%',
    padding: '2%',
  },
  logo : {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
  },
  badgeSectionText: {
    fontFamily: "RobotoBold",
    paddingLeft: '3%',
    paddingBottom: '3%',
    fontSize: 24,
    color: '#1D7DAB',
    paddingTop: '10%',
    marginLeft: '5%'
  },
  optionGroup: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1%',
    margin: '5%',
    flex: .2,
  },
  profileOption: {
display: 'flex',
flexDirection: 'column',
flex: 0.5,
paddingTop: '10%',
  },
  optionText: {
    fontFamily: 'RobotoBold',
    fontSize: 24,
    color: '#1D7DAB',
    paddingLeft: '5%',
  },
  optionImage: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  }
});