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
import { findModuleIcon } from '../data/ModuleInfo';
import Module1Locked from '../assets/badge_icons/Make_a_Plan_Icon_Locked.svg'
import Module2Locked from '../assets/badge_icons/Water_Icon_Locked.svg'
import Module3Locked from '../assets/badge_icons/Sheltering_Icon_Locked.svg'
import Module4Locked from '../assets/badge_icons/Food_Icon_Locked.svg'
import Module5Locked from '../assets/badge_icons/Work_School_Community_Icon_Locked.svg'
import Module6Locked from '../assets/badge_icons/Unique_Family_Needs_Icon_Locked.svg'
import Module7Locked from '../assets/badge_icons/Family_Communication_Icon_Locked.svg'
import Module8Locked from '../assets/badge_icons/Get_Involved_Icon_Locked.svg'
import Module9Locked from '../assets/badge_icons/Information_Icon_Locked.svg'
import Module10Locked from '../assets/badge_icons/Power_Icon_Locked.svg'
import Module11Locked from '../assets/badge_icons/Emergency_Supplies_Icon_Locked.svg'
import Module12Locked from '../assets/badge_icons/First_Aid_Icon_Locked.svg'

const auth = getFBAuth();

export default function ProfileScreen({navigation}) {

let customFonts = {
  Roboto: require("../assets/fonts/RobotoRegular.ttf"),
  RobotoBold: require("../assets/fonts/RobotoBold.ttf")
};
const [fontsLoaded] = useFonts(customFonts);
const SvgIcon1 = findModuleIcon(1);
const SvgIcon2 = findModuleIcon(2);
const SvgIcon3 = findModuleIcon(3);
const SvgIcon4 = findModuleIcon(4);
const SvgIcon5 = findModuleIcon(5);
const SvgIcon6 = findModuleIcon(6);
const SvgIcon7 = findModuleIcon(7);
const SvgIcon8 = findModuleIcon(8);
const SvgIcon9 = findModuleIcon(9);
const SvgIcon10 = findModuleIcon(10);
const SvgIcon11 = findModuleIcon(11);
const SvgIcon12 = findModuleIcon(12);


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
          <Text style={styles.usernameText} accessibilityRole="header">Profile</Text>
          <Image accessible={true} accessibilityLabel="do one thing logo" source={require("../assets/general/Thumbnail_Logo.png")}
          style={styles.logo}/>
        </View>

         
           <Text style={styles.badgeSectionText} accessibilityRole="header">My Badges</Text>
          
          <View style={styles.badgesSection}>

      <Image accessible={true} accessibilityLabel="active, sign up badge, image" source={require("../assets/badge_icons/Sign_Up_Icon.png")} style={styles.signUpIcon}/>
      {currentUser.badges.includes(2) ? <SvgIcon1 accessible={true} accessibilityLabel="active, make a plan badge, image" style={styles.badge}/> : <Module1Locked accessible={true} accessibilityLabel="not active, make a plan badge, image" style={styles.badge}/> }
      {currentUser.badges.includes(3) ? <SvgIcon2 accessible={true} accessibilityLabel="active, water badge, image" style={styles.badge}/> : <Module2Locked accessible={true} accessibilityLabel="not active, water badge, image" style={styles.badge}/>  }
      {currentUser.badges.includes(4) ? <SvgIcon3 accessible={true} accessibilityLabel="active, sheltering badge, image" style={styles.badge}/> : <Module3Locked accessible={true} accessibilityLabel="not active, sheltering badge, image" style={styles.badge}/>  }
      {currentUser.badges.includes(5) ? <SvgIcon4 accessible={true} accessibilityLabel="active, food badge, image" style={styles.badge}/> : <Module4Locked accessible={true} accessibilityLabel="not active, food badge, image" style={styles.badge}/>  }
      {currentUser.badges.includes(6) ? <SvgIcon5 accessible={true} accessibilityLabel="active, work, school, and communities badge, image" style={styles.badge}/> : <Module5Locked accessible={true} accessibilityLabel="not active, work, school, and communities badge, image" style={styles.badge}/>  }
      {currentUser.badges.includes(7) ? <SvgIcon6 accessible={true} accessibilityLabel="active, unique needs badge, image" style={styles.badge}/> : <Module6Locked accessible={true} accessibilityLabel="not active, unique needs, image" style={styles.badge}/>  }
      {currentUser.badges.includes(8) ? <SvgIcon7 accessible={true} accessibilityLabel="active, family communication plan badge, image" style={styles.badge}/> : <Module7Locked accessible={true} accessibilityLabel="not active, family communication plan badge, image" style={styles.badge}/>  }
      {currentUser.badges.includes(9) ? <SvgIcon8 accessible={true} accessibilityLabel="active, involved badge, image" style={styles.badge}/> : <Module8Locked accessible={true} accessibilityLabel="not active, involved badge, image" style={styles.badge}/>  }
      {currentUser.badges.includes(10) ? <SvgIcon9 accessible={true} accessibilityLabel="active, informed badge, image" style={styles.badge}/> : <Module9Locked accessible={true} accessibilityLabel="not active, informed badge, image" style={styles.badge}/>  }
      {currentUser.badges.includes(10) ? <SvgIcon10 accessible={true} accessibilityLabel="active, power badge, image" style={styles.badge}/> : <Module10Locked accessible={true} accessibilityLabel="not active, power badge, image" style={styles.badge}/>  }
      {currentUser.badges.includes(11) ? <SvgIcon11 accessible={true} accessibilityLabel="active, emergency supplies badge, image" style={styles.badge}/> : <Module11Locked accessible={true} accessibilityLabel="not active, emergency supplies badge, image" style={styles.badge}/> }
      {currentUser.badges.includes(12) ? <SvgIcon12 accessible={true} accessibilityLabel="active, first aid badge, image" style={styles.badge}/> : <Module12Locked accessible={true} accessibilityLabel="not active, first aid badge, image" style={styles.badge}/>  }

  
          </View>


        <View style={styles.profileOption}>

        <TouchableOpacity style={styles.optionGroup}
        accessibilityRole="button"
        accessibilityLabel="help, links to external do one thing contact web page"
        onPress={() => Linking.openURL('https://www.do1thing.com/contact/')}>
        <Image source={require("../assets/general/Help_Icon.png")}
          style={styles.optionImage}></Image>
        <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        accessibilityRole="button"
        accessibilityLabel="log out"
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
    flex: 1.2,
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
    marginTop: '15%'
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
    paddingLeft: '5%',
    marginLeft: '5%',
    flex: .25,
  },
  profileOption: {
display: 'flex',
flexDirection: 'column',
flex: 1,
marginTop: '35%'
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
    marginRight: '5%',
  },
  badge: {
    width: 80,
    height: 80,
  },
  lockedBadge: {
    width: 80,
    height: 80,
  },
  signUpIcon: {
    width: 45,
    height: 45,
    margin: 20
  }
});