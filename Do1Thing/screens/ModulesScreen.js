import { useEffect, useState, createRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { HStack } from "@react-native-material/core";
import ModuleButton from '../components/ModuleButton';


export default function ModuleScreen(props){

    const {navigation} = props;
  
    return(
            <ScrollView contentContainerStyle={styles.bodyContainer}>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={1} navigation={navigation} />
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={2} navigation={navigation}/>
                    </View>
                </HStack>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={3} navigation={navigation}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={4} navigation={navigation}/>
                    </View>
                </HStack>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={5} navigation={navigation}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={6} navigation={navigation}/>
                    </View>
                </HStack>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={7} navigation={navigation}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={8} navigation={navigation}/>
                    </View>
                </HStack>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={9} navigation={navigation}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={10} navigation={navigation}/>
                    </View>
                </HStack>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={11} navigation={navigation}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={12} navigation={navigation}/>
                    </View>
                </HStack>
            </ScrollView>
    )
}


const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   width: '100%',
    // },
    bodyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    //   backgroundColor: 'tan',
    },
    heading: {
      fontSize: 24,
      color: 'black',
      paddingBottom: '5%',
      paddingTop: '5%',
      fontWeight: 'bold'
    },
    moduleContainer: {
      width: '45%',
      height: 150,
    //   backgroundColor: '#FCCFFF'
    }
  });