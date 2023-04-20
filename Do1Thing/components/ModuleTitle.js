import { View, StyleSheet, Text } from "react-native";
import { Button } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";
import * as Progress from 'react-native-progress';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { findModuleIcon } from '../data/ModuleInfo';
import { createRef } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { AccessibilityInfo, findNodeHandle } from "react-native";
import React from "react";
import { useState } from "react";

const ModuleTitle = ({navigation, route}) => {

    // *********Header Focus*********
    // This allows for the header to take focus, even if it is not the first element in the DOM
    const [headerLoad, setHeaderLoad] = useState(false);
    const inputRef = createRef();
    const AUTO_FOCUS_DELAY = 500;

    const focusOnElement = (elementRef) => {
        const node = findNodeHandle(elementRef);
        if (!node) {
          return;
        }
        AccessibilityInfo.setAccessibilityFocus(node);
      };

    useFocusEffect (
      React.useCallback(() => {
        focusOnElement(inputRef.current);

        const timeoutId = setTimeout(() => {
            focusOnElement(inputRef.current);
            setHeaderLoad(true);
          }, AUTO_FOCUS_DELAY);
          return () => {
            clearTimeout(timeoutId);
          };
        }, [])
    );
    // *********End Header Focus*********

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
  const pageContent = route.params.fullModule.moduleContent[currentPage];
  const progressWidth = currentPage / (route.params.fullModule.moduleContent.length - 1);
  const checklistPage = route.params.fullModule.moduleContent.length - 2;

  const SvgIcon = findModuleIcon(pageContent.content.moduleNum);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
          accessible={headerLoad}
          style={styles.backButton} 
          onPress={()=>navigation.navigate('ModulesScreen')}
          accessibilityRole="button"
          accessibilityLabel="back">
          <Ionicons accessible={false} name="chevron-back-circle-sharp" size={35} color='#1D7DAB'/>
        </TouchableOpacity>
        <TouchableOpacity 
          accessible={headerLoad}
          style={styles.backButton} 
          onPress={() => navigation.push(route.params.fullModule.moduleContent[checklistPage].pageType, {fullModule: route.params.fullModule, skipTo: true})}
          accessibilityRole='button'
          accessibilityLabel="access checklist">
          <MaterialCommunityIcons  accessible={false} name="format-list-checks" size={30} color="white" style={styles.checkButton}/>
          <Text accessible={false} style={{paddingLeft: '3%', alignSelf: 'center', fontSize: 14, fontFamily: 'RobotoBold'}}>{"Access\nChecklist"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.moduleHeading} accessibilityRole='header' ref={inputRef}>Module {pageContent.content.moduleNum}</Text>
        <Text style={styles.moduleTitle} >{pageContent.content.moduleName}</Text>
        <SvgIcon accessible={true} accessibilityLabel="module icon" width={350} height={350} padding={0} margin={-30} style={styles.icon} />
        <Text style={styles.goalHeader} accessibilityRole="header">Goal</Text>
        <Text style={styles.goalText}>{pageContent.content.goal}</Text>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = {pageContent.buttonText + ", button"} variant="button" style={{color: 'white', fontFamily: 'Roboto', fontSize: 18}}>{pageContent.buttonText}</Text>}
          onPress={()=>{
            route.params.fullModule.currentPage += 1;
            navigation.push(nextPage.pageType, {fullModule: route.params.fullModule})}}
        />
      </View>
      <Progress.Bar 
        accessible={true}
        accessibilityLabel={"progress bar, module page " + currentPage + ' of ' + (route.params.fullModule.moduleContent.length - 1)}
        progress={progressWidth} 
        width={null} 
        height={15}
        borderRadius={0}
        color={'#1D7DAB'}
        unfilledColor={"#EDEDED"}
        borderColor={'#fff'}
        style={{position: 'absolute', bottom: 0, width: '100%'}}/>
    </View>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    bodyContainer: {
      flex: 0.95,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
    },
    buttonContainer: {
      paddingRight: '6%',
      paddingLeft: '5%',     
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '100%',
      marginTop: 35,
      marginBottom: 15,
    },
    checkButton: {
      padding: '1%',
      backgroundColor: '#1D7DAB',
      alignContent: 'center',
      overflow: 'hidden',
    },
    backButton: {
      padding: '3%',
      flexDirection: 'row',
    },
    icon: {
      alignSelf: 'center',
    },
    moduleHeading: {
      color: '#12B1C3',
      fontSize: 20,
      paddingLeft: '10%',
      fontFamily: 'Roboto'
    },
    moduleTitle: {
      color: '#0E5681',
      fontSize: 36,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: '10%',
      fontFamily: 'RobotoBold'
    },
    goalHeader: {
      paddingLeft: '10%',
      color: "#1D7DAB",
      fontFamily: 'RobotoBold',
      fontSize: 32,
    },
    goalText: {
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingTop: '3%',
      fontSize: 20,
      fontFamily: 'Roboto',
    },
    startButton: {
      backgroundColor: '#2E8540',
      width: '65%',
      padding: '3%',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 25,
    },
  });

  export default ModuleTitle;