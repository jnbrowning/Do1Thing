import { useEffect, useState, createRef } from 'react';
import { View, StyleSheet, Alert, Image, ScrollView } from 'react-native';

import { Text, TextInput, Button, HStack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export default function ModuleScreen(props){

    const modulesLinks = [];


    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.bodyContainer}>
                <HStack m={4} spacing={20}>
                    <View style={styles.moduleContainer} />
                    <View style={styles.moduleContainer} />
                </HStack>
                <HStack m={4} spacing={20}>
                    <View style={styles.moduleContainer} />
                    <View style={styles.moduleContainer} />
                </HStack>
                <HStack m={4} spacing={20}>
                    <View style={styles.moduleContainer} />
                    <View style={styles.moduleContainer} />
                </HStack>
                <HStack m={4} spacing={20}>
                    <View style={styles.moduleContainer} />
                    <View style={styles.moduleContainer} />
                </HStack>
                <HStack m={4} spacing={20}>
                    <View style={styles.moduleContainer} />
                    <View style={styles.moduleContainer} />
                </HStack>
                <HStack m={4} spacing={20}>
                    <View style={styles.moduleContainer} />
                    <View style={styles.moduleContainer} />
                </HStack>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    bodyContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '90%',
      backgroundColor: 'tan',
    },
    heading: {
      fontSize: 24,
      color: 'black',
      paddingBottom: '5%',
      paddingTop: '5%',
      fontWeight: 'bold'
    },
    moduleContainer: {
      width: '48%',
      height: 150,
      backgroundColor: '#FFFFFF'
    }
  });