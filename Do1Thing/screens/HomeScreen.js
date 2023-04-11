import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, Overlay } from '@rneui/themed';
import { signOutFB, subscribeToUsersCollection, getFBAuth } from '../data/DB';
import { setLogin } from '../data/Actions';
import { useFonts } from "expo-font";
import BadgePopup from "../components/BadgePopup";
import { HStack } from "@react-native-material/core";
import { useDispatch, useSelector } from 'react-redux';
import ModuleButton from '../components/ModuleButton';
// import { style } from '@mui/system';

function HomeScreen({navigation, route}) {

    const dispatch = useDispatch();

    const returningUser = route.params.returningUser;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    console.log("returning user: " + returningUser);

    const loggedIn = useSelector((state) => {
        if (state !== undefined){
            return state.loggedIn;
        }
    })

    let customFonts = {
      Roboto: require("../assets/fonts/RobotoRegular.ttf"),
      RobotoBold: require("../assets/fonts/RobotoBold.ttf")
    };
    const [fontsLoaded] = useFonts(customFonts);

    console.log('Returning User:' + returningUser)

    useEffect(() => {
        subscribeToUsersCollection(dispatch);
    },[])

    const currentUser = useSelector(state => {
        if (state !== undefined){
            return state.user;
        }
        else {console.log('Cannot find state users yet');}
    })

    if (!fontsLoaded) {
      return <View></View>;
    } else {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Do1Thing</Text>
            <Text style={styles.subheading}>Small steps towards being prepared for an emergency</Text>

            <View style={styles.actionButton}>
              <Image source={require("../assets/general/Thumbnail_Logo.png")}
          style={styles.logo}></Image>
              <View style={styles.actionButtonText}>
                <Text style={styles.actionHeading}>Let's Go Do1Thing</Text>
                <Text style={styles.actionSubheading}>for the month of {months[new Date().getMonth()]}</Text>
              </View>
              <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('Modules',{screen: 'ModulesScreen'})
                            }} >
                <Image source={require("../assets/general/Forward_Arrow_Icon.png")}
                style={styles.arrow}></Image>
                </TouchableOpacity>
            </View>

      <View style={styles.subbuttonContainer}>
            <TouchableOpacity 
            style={styles.subbutton}
            onPress={() => {
              navigation.navigate('Modules',{screen: 'ModulesScreen'})
            }} >
              <Image source={require("../assets/general/Grid_Icon.png")}
          style={styles.subbuttonImage}></Image>
              <Text style={styles.subbuttonText}>View Modules</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.subbutton}
             onPress={() => Linking.openURL('https://www.paypal.com/donate?hosted_button_id=P6NUL4NVKM4HC')}>
              <Image source={require("../assets/general/Donate_Icon.png")}
          style={styles.subbuttonImage}></Image>
              <Text style={styles.subbuttonText}>Donate</Text>
            </TouchableOpacity>
        </View>

            <Text style={styles.popularModules}>Popular Modules</Text>
            <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={1} navigation={navigation} />
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={9} navigation={navigation} />
                    </View>
                    </HStack>
                    <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={6} navigation={navigation} />
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={7} navigation={navigation} />
                    </View>
                    </HStack>
{/* {returningUser ? <BadgePopup badgeID={1}>
</BadgePopup> : <View/>} */}


        </View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  buttonText: {
        textAlign: "center",
        top: "25%",
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
      },
      overlayView: {
        height: "20%",
        width: "60%",
      },
      overlayText: {
        margin: "10%",
      },
      okayButton: {
        width: "50%",
        height: "30%",
        backgroundColor: "black",
        margin: "auto",
        // borderRadius: "70%",
        left: "25%",
      },
      heading: {
        color: '#1D7DAB',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'RobotoBold'
      },
      subheading: {
        color: '#77B169',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Roboto'
      },
      actionButton: {
        borderRadius: 15,
        backgroundColor: 'white',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        padding: '5%',
        alignSelf: 'center',
        marginTop: '5%',
        height: '15%',
        alignItems: 'center',
        shadowColor: '#1d7dab',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      actionHeading: {
        color: '#1D7DAB',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'RobotoBold'
      },
      actionSubheading: {
        color: '#1D7DAB',
        fontSize: 12,
        fontFamily: 'Roboto'
      },
      actionButtonText: {
        display: 'flex',
        flexDirection: 'column',
      },
      popularModules: {
        fontWeight: 'bold',
        color: '#1D7DAB',
        fontSize: 24,
        marginLeft: '5%',
        fontFamily: 'RobotoBold',
        marginTop: '5%'
      },
      subbuttonText: {
        fontWeight: 'bold',
        color: '#1D7DAB',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'RobotoBold'
      },
      subbutton: {
        borderRadius: 15,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        margin: '5%',
        shadowColor: '#1d7dab',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 20,
        height: '80%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      subbuttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      moduleContainer: {
        width: '45%',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '2%',
        height: 160,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        shadowColor: '#1d7dab',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 40,
      },
      subbuttonImage: {
      width: 40,
      height: 40,
      resizeMode: 'stretch',
      },
      logo: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
        marginRight: '5%',
      },
      arrow: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        marginLeft: '25%',
      }
})

export default HomeScreen;