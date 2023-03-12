import { View, Text, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, Overlay } from '@rneui/themed';
import { signOutFB, subscribeToUsersCollection, getFBAuth } from '../data/DB';
import { setLogin } from '../data/Actions';

import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen({navigation}) {

    const dispatch = useDispatch();

    const loggedIn = useSelector((state) => {
        if (state !== undefined){
            return state.loggedIn;
        }
    })

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
        </View>
    )
}