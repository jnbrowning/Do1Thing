import { View, Text, Image, StyleSheet, FlatList, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, Overlay } from '@rneui/themed';
import { signOutFB, subscribeToUsersCollection, getFBAuth } from '../data/DB';
import { setLogin } from '../data/Actions';
import { useFonts } from "expo-font";

import { useDispatch, useSelector } from 'react-redux';
import { style } from '@mui/system';

export default function HomeScreen(props) {

    const dispatch = useDispatch();
    const {navigation, returningUser} = props;
    const [overlayVisible, setOverlayVisible] = useState(false);

    const loggedIn = useSelector((state) => {
        if (state !== undefined){
            return state.loggedIn;
        }
    })

    let customFonts = {
      // Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
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
            <TouchableOpacity>
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
            {/* <Text>Current user email: {currentUser.email? currentUser.email : "Guest Mode"}</Text>
            { loggedIn ? 
                <Button title='Sign out' onPress={async () => {
                    signOutFB();
                    dispatch(setLogin(false));
                }}>
                </Button> 
            : 
                <Button title='Back to sign in page' onPress={async () => {
                    navigation.navigate('Login');
                }}></Button>
            } */}

<Overlay
          isVisible={overlayVisible}
          onBackdropPress={() => setOverlayVisible(false)}
          overlayStyle={styles.overlayView}
        >
          <Text style={styles.overlayText}>
            You earned a badge!
          </Text>
          <TouchableOpacity
            style={styles.okayButton}
            onPress={() => {
              setOverlayVisible(false);
            }}
          >
            <Text style={styles.buttonText}>Okay</Text>
          </TouchableOpacity>
        </Overlay>

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
      },
      subheading: {
        color: '#77B169',
        fontSize: '14pt',
        textAlign: 'center'
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
      },
      actionSubheading: {
        color: '#1D7DAB',
        fontSize: '12pt',
      },
      actionButtonText: {
        display: 'flex',
        flexDirection: 'vertical',
      },
      popularModules: {
        fontWeight: 'bold',
        color: '#1D7DAB',
        fontSize: '24pt',
        margin: '2%',
      },
      subbuttonText: {
        fontWeight: 'bold',
        color: '#1D7DAB',
        fontSize: '16pt',
        textAlign: 'center',
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
      }
})