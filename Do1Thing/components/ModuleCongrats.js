import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import BadgePopup from "./BadgePopup";
import { subscribeToUsersCollection } from "../data/DB";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actionTypes } from '../data/Actions';
import { saveAndDispatch } from '../data/DB';


function ModuleCongrats({ navigation, route }) {

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
  const pageContent = route.params.fullModule.moduleContent[currentPage];
  const progressWidth = currentPage / (route.params.fullModule.moduleContent.length - 1);
  const moduleNumber = route.params.fullModule.moduleContent[currentPage].module;
  let hasBadge = null; 
  let showEarnedBadgeAlert = null;
  let link = pageContent.content.image;

  useEffect(() => {
    subscribeToUsersCollection(dispatch);
  }, [])

  const userEarnedBadge = useSelector((state) => {
    if (hasBadge == null) {
      hasBadge = state.user.badges
      .includes(moduleNumber)
      showEarnedBadgeAlert = !hasBadge;
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
          style={styles.backButton}
          onPress={() => {
            const previousPage = route.params.fullModule.moduleContent[currentPage - 1].pageType;
            route.params.fullModule.currentPage -= 1;
            navigation.navigate(previousPage, { fullModule: route.params.fullModule })
          }}>
          <Ionicons name="chevron-back-circle-sharp" size={35} color='#1D7DAB' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('ModulesScreen')}>
          <AntDesign name="close" size={30} color="#9D9D9D" />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Image style={styles.testIcon}
          source={link} />
        <Text style={styles.goalText}>Congratulations!</Text>
        <View style={styles.goalBlock}>
          <Text style={styles.infoText}>{pageContent.content.info}</Text>
        </View>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel="done, button" variant="button" style={{ color: 'white' }}>Done</Text>}
          onPress={() => navigation.push('ModulesScreen')}
        />
        {showEarnedBadgeAlert && <BadgePopup badgeID={moduleNumber}> </BadgePopup>}
      </View>
      
      <Progress.Bar
        progress={progressWidth}
        width={null}
        height={15}
        borderRadius={0}
        color={'#1D7DAB'}
        unfilledColor={"#EDEDED"}
        borderColor={'#fff'}
        style={{ position: 'absolute', bottom: 0, width: '100%' }} />
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

  },
  goalHeader: {
    paddingLeft: '10%',
    color: "#1D7DAB",
    fontSize: 24,
    fontWeight: 'bold',
  },
  goalText: {
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '5%',
    fontSize: 24,
    fontWeight: 'bold',
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
    flex: 0.8,
    marginBottom: 60,
    width: '100%',
  },
  infoText: {
    fontSize: 20,
    color: 'black',
    marginLeft: '10%',
    marginRight: '10%',
  }
});

export default ModuleCongrats;