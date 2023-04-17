import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { Button } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import * as Progress from 'react-native-progress';
import { createRef } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { AccessibilityInfo, findNodeHandle } from "react-native";
import React from "react";


function ModuleContent({navigation, route}) {

    // *********Header Focus*********
    // This allows for the header to take focus, even if it is not the first element in the DOM
    const inputRef = createRef();
    const AUTO_FOCUS_DELAY = 50;

    const focusOnElement = (elementRef) => {
        const node = findNodeHandle(elementRef);
        if (!node) {
          return;
        }
        AccessibilityInfo.setAccessibilityFocus(node);
      };

      useFocusEffect (
        React.useCallback(() => {
          function delay(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
          }    
          async function setFocus() {
             await delay(30);
             await focusOnElement(inputRef.current);
            }
          setFocus();
          }, [])
      );
    // *********End Header Focus*********

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
  const pageContent = route.params.fullModule.moduleContent[currentPage];
  const progressWidth = currentPage / (route.params.fullModule.moduleContent.length - 1);

  let link = pageContent.content.image;



  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        accessibilityRole='button'
        accessibilityLabel="previous page"
        style={styles.backButton}
        onPress={()=>{
          const previousPage = route.params.fullModule.moduleContent[currentPage - 1].pageType;
          route.params.fullModule.currentPage -= 1;
          navigation.navigate(previousPage, {fullModule: route.params.fullModule})}}>
          <Ionicons name="chevron-back-circle-sharp" size={35} color='#1D7DAB'/>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.backButton} 
        accessibilityRole="button"
        accessibilityLabel="close"
        onPress={()=>navigation.navigate('ModulesScreen')}>
          <AntDesign name="close" size={30} color="#9D9D9D"/>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.moduleHeading} accessibilityRole="header" ref={inputRef}>{pageContent.content.mod}</Text>
        {pageContent.content.headText === '' ? <View style={styles.goalText}/> : 
        <Text style={styles.goalText} accessibilityRole="header">{pageContent.content.headText}</Text>}
        <View style={styles.goalBlock}>
        <Image 
        style={styles.testIcon} 
        accessibilityRole="image"
        accessibilityLabel={pageContent.content.altText}
        accessible={true}
        source={link}/>
        <Text style={styles.infoText}>{pageContent.content.info}</Text>
        </View>
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
        accessibilityLabel={"progress bar, on module page " + currentPage + ' of ' + (route.params.fullModule.moduleContent.length - 1)}
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
      // backgroundColor: 'tan',
      width: '100%',
    },
    heading: {
      fontSize: 24,
      color: 'black',
      paddingBottom: '5%',
      paddingTop: '5%',
      fontWeight: 'bold'
    },
    testIcon: {
      resizeMode: 'contain',
      height: 225,
      marginTop: 10,
      marginBottom: 10,
      alignSelf: 'center',
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
    moduleHeading: {
      color: '#12B1C3',
      fontSize: 24,
      paddingLeft: '10%',
      fontFamily: 'Roboto'
    },
    goalHeader: {
      paddingLeft: '10%',
      color: "#1D7DAB",
      fontSize: 24,
      fontFamily: 'RobotoBold',
    },
    goalText: {
      paddingLeft: '10%',
      paddingRight: '10%',
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
      justifyContent: 'space-evenly',
      flex: 1,
      marginBottom: 60,
      width: '100%',
    },
    infoText: {
        fontSize: 20,
        color: 'black',
        marginLeft: '10%',
        marginRight: '10%',
        fontFamily: 'Roboto'
    }
  });

  export default ModuleContent;