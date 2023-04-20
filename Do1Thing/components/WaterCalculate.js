import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useState, useEffect } from "react";
import * as Progress from 'react-native-progress';
import { createRef } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { AccessibilityInfo, findNodeHandle } from "react-native";
import React from "react";

function WaterCalculate({navigation, route}) {

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
          clearTimeout(timeoutId);
        };
      }, [])
  );
  // *********End Header Focus*********

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
  const pageContent = route.params.fullModule.moduleContent[currentPage];
  const progressWidth = currentPage / (route.params.fullModule.moduleContent.length - 1);

  const [people, setPeople] = useState(0);
  const [pets, setPets] = useState(0);
  const [neededGallons, setGallons] = useState(0);

  useEffect (()=> {
    if (pets == '' || people == ''){
        setGallons('--')
    }
    else {
        setGallons ((people * 3) + parseInt(pets));
    }
  }, [people, pets])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        accessible={headerLoad}
        style={styles.backButton}
        onPress={()=>{
          const previousPage = route.params.fullModule.moduleContent[currentPage - 1].pageType;
          route.params.fullModule.currentPage -= 1;
          navigation.navigate(previousPage, {fullModule: route.params.fullModule})}}>
          <Ionicons accessible={false} name="chevron-back-circle-sharp" size={35} color='#1D7DAB'/>
        </TouchableOpacity>
        <TouchableOpacity 
        accessible={headerLoad}
        style={styles.backButton} onPress={()=>navigation.navigate('ModulesScreen')}>
          <AntDesign accessible={false} name="close" size={30} color="#9D9D9D"/>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.moduleHeading} accessibilityRole="header" ref={inputRef}>{pageContent.content.mod}</Text>
        <Text style={styles.goalText}>{pageContent.content.headText}</Text>
        <View style={styles.goalBlock}>
        <TextInput 
            keyboardType="numeric"
            label="# of People"
            accessibilityLabel="Number of people, required"
            variant="outlined"
            style={styles.loginInputBox}
            color='#0E5681'
            onChangeText={text=>setPeople(text)}
            value={people}
        />
        <TextInput 
            keyboardType="numeric"
            label="# of Pets"
            accessibilityLabel="Number of pets, required"
            variant="outlined"
            style={styles.loginInputBox}
            color='#0E5681'
            onChangeText={text=>setPets(text)}
            value={pets}
        />
        <Text style={styles.gallonResult}>{'Water Needed:\n' + neededGallons + ' Gallons'}</Text>
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
    </TouchableWithoutFeedback>
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
      justifyContent: 'flex-start',
      flex: 1,
      marginTop: 60,
      marginBottom: 60,
      width: '100%',
    },
    loginInputBox: {
        width: '85%',
        alignSelf: 'center',
        backgroundColor: '#FAFAFA',
        marginBottom: 50,
        fontFamily: "Roboto"
      },
    gallonResult: {
        color: '#1D7DAB',
        fontSize: 32,
        paddingLeft: '10%',
        fontFamily: "RobotoBold"
      }
  });

  export default WaterCalculate;