import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { Button } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import * as Progress from 'react-native-progress';
import { createRef } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { AccessibilityInfo, findNodeHandle } from "react-native";
import React from "react";
import { useState } from "react";

function ModuleSectionHead({navigation, route}) {

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
  const pageContent = route.params.fullModule.moduleContent[currentPage];
  const progressWidth = currentPage / (route.params.fullModule.moduleContent.length - 1);
  console.log(progressWidth);

  let link = pageContent.content.image;

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
        console.log('hi');
        focusOnElement(inputRef.current);

        const timeoutId = setTimeout(() => {
            focusOnElement(inputRef.current);
            setHeaderLoad(true);
          }, AUTO_FOCUS_DELAY);
          return () => {
            console.log('header load: ', headerLoad)
            clearTimeout(timeoutId);
          };
        }, [])
    );
    // *********End Header Focus*********

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          accessible={headerLoad}
          accessibilityRole='button'
          accessibilityLabel="previous page"
          style={styles.backButton}
          onPress={()=>{
          const previousPage = route.params.fullModule.moduleContent[currentPage - 1].pageType;
          route.params.fullModule.currentPage -= 1;
          navigation.navigate(previousPage, {fullModule: route.params.fullModule})}}>
          <Ionicons accessible={false} name="chevron-back-circle-sharp" size={35} color='#1D7DAB'/>
        </TouchableOpacity>
        <TouchableOpacity 
          accessible={headerLoad}
          style={styles.backButton} 
          onPress={()=>navigation.navigate('ModulesScreen')}
          accessibilityRole="button"
          accessibilityLabel="close">
          <AntDesign accessible={false} name="close" size={30} color="#9D9D9D"/>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.moduleHeading} ref={inputRef} accessibilityRole="header">{pageContent.content.mod}</Text>
        <Image 
        style={styles.picture} 
        source={link}
        accessibilityRole="image"
        accessibilityLabel={pageContent.content.altText}
        accessible={true}
        />
        <View style={styles.goalBlock}>
          <Text style={styles.goalHeader} accessibilityRole="header">Section {pageContent.content.sectionNum}</Text>
          <Text style={styles.goalText}>{pageContent.content.sectionTitle}</Text>
        </View>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = {pageContent.buttonText + ", button"} variant="button" style={{color: 'white', fontFamily: "Roboto", fontSize: 18 }}>{pageContent.buttonText}</Text>}
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
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    bodyContainer: {
      flex: 0.95,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 25,
    },
    backButton: {
      padding: '7%',
      justifyContent: 'center',
    },
    picture: {
      height: 275,
      width: 275,
      marginTop: 50,
      alignSelf: 'center',
      color: 'blue',
    },
    moduleHeading: {
      color: '#12B1C3',
      fontSize: 24,
      paddingLeft: '10%',
      fontFamily: "Roboto"
    },
    goalHeader: {
      paddingLeft: '10%',
      color: "#1D7DAB",
      fontSize: 24,
      fontFamily: 'RobotoBold'
    },
    goalText: {
      paddingLeft: '15%',
      paddingRight: '15%',
      paddingTop: '5%',
      fontSize: 24,
      fontFamily: 'RobotoBold',
      color: '#0E5681',
    },
    startButton: {
      backgroundColor: '#2E8540',
      width: '65%',
      padding: '3%',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 25,
    },
    goalBlock: {
      justifyContent: 'center',
      flex: 1,
      marginBottom: 60,
      width: '100%',
    }
  });

  export default ModuleSectionHead;