import { View, Text, StyleSheet, FlatList, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, Overlay } from '@rneui/themed';
import { signOutFB, subscribeToUsersCollection, getFBAuth } from '../data/DB';
import { setLogin } from '../data/Actions';

import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen(props) {

    const dispatch = useDispatch();
    const {navigation, loginMode} = props;
    const [overlayVisible, setOverlayVisible] = useState(false);

    const loggedIn = useSelector((state) => {
        if (state !== undefined){
            return state.loggedIn;
        }
    })

    if (loginMode === true) {
      console.log("login mode false")
    }
    else {
      console.log("login mode true")
    }

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

  


    return(
        <View>
            <Text>Welcome to the app!</Text>
            <Text>Current user email: {currentUser.email? currentUser.email : "Guest Mode"}</Text>
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
            }

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

const styles = StyleSheet.create({
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
})