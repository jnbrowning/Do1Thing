import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, Overlay } from '@rneui/themed';
import { signOutFB, subscribeToUsersCollection, getFBAuth } from '../data/DB';
import { setLogin } from '../data/Actions';
import { useFonts } from "expo-font";
import { HStack } from "@react-native-material/core";
import BadgePopup from "../components/BadgePopup";

import { useDispatch, useSelector } from 'react-redux';
// import { style } from '@mui/system';

export default function HomeScreen(props) {

    const dispatch = useDispatch();
    const {navigation, returningUser} = props;

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

    console.log(returningUser)

    // if (newUser === 'true') {
    //   console.log("new user")
    // }
    // else {
    //   console.log("returning user")
    // }

    // if (!loginMode) {
    //   setOverlayVisible(true)
    // }
    // else { 
    //   setOverlayVisible(false)
    // }

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
              <Image></Image>
              <View style={styles.actionButtonText}>
                <Text style={styles.actionHeading}>Let's Go Do1Thing</Text>
                <Text style={styles.actionSubheading}>for the month of April</Text>
                <Image></Image>
              </View>
            </View>

      <View style={styles.subbuttonContainer}>
          <View style={styles.subbutton}>
            <TouchableOpacity >
              <Image></Image>
              <Text style={styles.subbuttonText}>View Modules</Text>
            </TouchableOpacity>
            </View>

          <View style={styles.subbutton}>
            <TouchableOpacity>
              <Image></Image>
              <Text style={styles.subbuttonText}>Donate</Text>
            </TouchableOpacity>
            </View>   
        </View>

            <Text style={styles.popularModules}>Popular Modules</Text>
            <HStack m={4} spacing={20}>
                    <View style={styles.moduleContainer} />
                    <View style={styles.moduleContainer} />
                </HStack>
                <HStack m={4} spacing={20}>
                    <View style={styles.moduleContainer} />
                    <View style={styles.moduleContainer} />
                </HStack>
{/* If user has just signed up */}
<BadgePopup
badge={1}>
</BadgePopup>

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
        fontSize: "18pt",
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
        borderRadius: "70%",
        left: "25%",
      },
      heading: {
        color: '#1D7DAB',
        fontSize: '32pt',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'RobotoBold'
      },
      subheading: {
        color: '#77B169',
        fontSize: '14pt',
        textAlign: 'center',
        fontFamily: 'Roboto'
      },
      actionButton: {
        borderRadius: '15px',
        backgroundColor: 'white',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        padding: '5%',
        alignSelf: 'center',
        margin: '5%',
        height: '15%',
        alignItems: 'center',
        shadowColor: '#1d7dab',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      actionHeading: {
        color: '#1D7DAB',
        fontSize: '20pt',
        fontWeight: 'bold',
        fontFamily: 'RobotoBold'
      },
      actionSubheading: {
        color: '#1D7DAB',
        fontSize: '12pt',
        fontFamily: 'Roboto'
      },
      actionButtonText: {
        display: 'flex',
        flexDirection: 'vertical',
      },
      popularModules: {
        fontWeight: 'bold',
        color: '#1D7DAB',
        fontSize: '24pt',
        marginLeft: '5%',
        marginTop: '5%',
        fontFamily: 'RobotoBold'
      },
      subbuttonText: {
        fontWeight: 'bold',
        color: '#1D7DAB',
        fontSize: '16pt',
        textAlign: 'center',
        fontFamily: 'RobotoBold'
      },
      subbutton: {
        borderRadius: '15px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        padding: '5%',
        margin: '5%',
        justifyContent: 'center',
        shadowColor: '#1d7dab',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 20,
        height: '80%',
        flex: 1,
        alignItems: 'center',
      },
      subbuttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      },
      moduleContainer: {
        width: '45%',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '2%',
        height: 160,
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        shadowColor: '#1d7dab',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 40,
      }
})
