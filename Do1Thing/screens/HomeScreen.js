import { View, Text, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, Overlay } from '@rneui/themed';
import { signOutFB } from '../data/DB';

export default function HomeScreen({navigation}) {
    return(
        <View>
            <Text>Welcome to the app!</Text>
            <Button title='Sign out' onPress={async () => {
                signOutFB();
            }}></Button>
        </View>
    )
}