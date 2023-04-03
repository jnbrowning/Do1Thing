import { useEffect, useState, createRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { HStack } from "@react-native-material/core";
import ModuleButton from '../components/ModuleButton';


export default function ModuleScreen(props){

    const {navigation} = props;
    const modulesLinks = [];

  

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.bodyContainer}>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={1}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={2}/>
                    </View>
                </HStack>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={3}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={4}/>
                    </View>
                </HStack>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={5}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={6}/>
                    </View>
                </HStack>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={7}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={8}/>
                    </View>
                </HStack>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={9}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={10}/>
                    </View>
                </HStack>
                <HStack m={8} spacing={20}>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={11}/>
                    </View>
                    <View style={styles.moduleContainer} >
                        <ModuleButton moduleNumber={12}/>
                    </View>
                </HStack>
            </ScrollView>
            <Button
            title='Module Template Test'
            onPress={()=>goToModule(0)}
            />
            
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
      backgroundColor: '#FCCFFF'
    }
  });