import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { Button } from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import BadgePopup from "./BadgePopup";
import BadgeOverlay from "./BadgeOverlay";
import { subscribeToUsersCollection } from "../data/DB";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actionTypes } from '../data/Actions';
import { saveAndDispatch } from '../data/DB';
import { createRef } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { AccessibilityInfo, findNodeHandle } from "react-native";
import React from "react";

function ModuleCongrats({ navigation, route }) {

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
  const moduleNumber = route.params.fullModule.moduleContent[currentPage].module;
  let hasBadge = null; 
  let allowUserDismiss = null;
  let link = pageContent.content.image;

  useEffect(() => {
    subscribeToUsersCollection(dispatch);
  }, [])

  const userEarnedBadge = useSelector((state) => {
    if (hasBadge == null) {
      hasBadge = state.user.badges
      .includes(moduleNumber)
      allowUserDismiss = !hasBadge;
    }
    
    return hasBadge
  });

  useEffect(() => {
    async function save() {
      if (hasBadge != null && !hasBadge) {
        await saveAndDispatch({ type: actionTypes.ADD_BADGE, payload: { badgeId: moduleNumber } }, dispatch);
      }
    }

    save();
  }, []);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        accessible={headerLoad}
          style={styles.backButton}
          accessibilityRole='button'
          accessibilityLabel="previous page"
          onPress={() => {
            const previousPage = route.params.fullModule.moduleContent[currentPage - 1].pageType;
            route.params.fullModule.currentPage -= 1;
            navigation.navigate(previousPage, { fullModule: route.params.fullModule })
          }}>
          <Ionicons accessible={false} name="chevron-back-circle-sharp" size={35} color='#1D7DAB' />
        </TouchableOpacity>
        <TouchableOpacity 
        accessible={headerLoad}
        accessibilityRole='button'
        accessibilityLabel="close"
        style={styles.backButton} onPress={() => navigation.navigate('ModulesScreen')}>
          <AntDesign accessible={false} name="close" size={30} color="#9D9D9D" />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Image style={styles.testIcon}
          source={link} />
        <Text style={styles.goalText} accessibilityRole="header">Congratulations!</Text>
        <View style={styles.goalBlock}>
          <Text style={styles.infoText}>{pageContent.content.info}</Text>
        </View>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel="done, button" variant="button" style={{ color: 'white', fontFamily: "Roboto", fontSize: 18 }}>Done</Text>}
          onPress={() => navigation.push('ModulesScreen')}
        />
        {allowUserDismiss && <BadgeOverlay moduleNumber={moduleNumber} />}
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
    fontFamily: 'RobotoBold'
  },
  testIcon: {
    flex: 1,
    width: '80%',
    marginTop: 40,
    marginBottom: 30,
    alignSelf: 'center',
    color: 'blue',
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
    fontFamily: "Roboto"
  },
  goalHeader: {
    paddingLeft: '10%',
    color: "#1D7DAB",
    fontSize: 24,
    fontFamily: "RobotoBold"
  },
  goalText: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '5%',
    fontSize: 24,
    color: '#0E5681',
    fontFamily: "RobotoBold"
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
    flex: 0.8,
    marginBottom: 60,
    width: '100%',
  },
  infoText: {
    fontSize: 20,
    color: 'black',
    marginLeft: '10%',
    marginRight: '10%',
    fontFamily: "Roboto"
  }
});

export default ModuleCongrats;