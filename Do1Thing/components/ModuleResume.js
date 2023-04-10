import { View, StyleSheet, Image, Modal } from "react-native";
import { Text, Button } from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import * as Progress from 'react-native-progress';


function ModuleResume({navigation, route}) {

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage];
  const pageContent = route.params.fullModule.moduleContent[0];
  const progressWidth = currentPage / (route.params.fullModule.moduleContent.length - 1);
  console.log(progressWidth);


  let link = pageContent.content.logo;

  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {setVisible(!visible);}

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate('ModulesScreen')}>
          <AntDesign name="close" size={30} color="#9D9D9D"/>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.moduleHeading}>Module {pageContent.content.moduleNum}</Text>
        <Text style={styles.moduleTitle}>{pageContent.content.moduleName}</Text>
        <Image style={styles.icon} source={link}/>
        <Text style={styles.goalHeader}>Goal</Text>
        <Text style={styles.goalText}>{pageContent.content.goal}</Text>
        <Button
          style={styles.resumeButton}
          variant="contained"
          title={<Text accessibilityLabel = "resume, button" variant="button" style={{color: 'white'}}>Resume</Text>}
          onPress={()=>{
            navigation.push(nextPage.pageType, {fullModule: route.params.fullModule})}}
        />
        <Button
            variant="text"
          style={styles.startButton}
          title={<Text accessibilityLabel = "start over, button" variant="button" style={{color: "#9D9D9D"}}>Start Over</Text>}
          onPress={()=>{toggleOverlay();}}
        />
      </View>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.overlayContainer}>
        </View>
            <View style={styles.overlay}>
        <Text style={styles.overlayHeader}>Are you sure you want to start over?</Text>
        <Text style={styles.overlayText}>All progress will be lost if you start over.</Text>
        <View style={styles.overlayButtonContainer}>
        <Button
        style={styles.confirmButton}
          variant="contained"
          title={<Text accessibilityLabel = "confirm, button" variant="button" style={{color: 'white'}}>Confirm</Text>}
          onPress={()=>{
            route.params.fullModule.currentPage = 0;
            toggleOverlay();
            navigation.navigate('ModuleTitle', {fullModule: route.params.fullModule})}}
        />
        <Button
        style={styles.cancelButton}
          variant="contained"
          title={<Text accessibilityLabel = "cancel, button" variant="button" style={{color: "white"}}>Cancel</Text>}
          onPress={()=>{toggleOverlay();}}/>
          </View>
        </View>
      </Modal>
      <Progress.Bar 
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
    overlayContainer: {
        opacity: 0.85,
        backgroundColor: '#A1A1A1',
        width: '100%',
        flex: 1,
    },
    overlay: {
        height: 275,
        width: '80%',
        backgroundColor: 'white',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 275,
        borderRadius: '25%',
        padding: 20,
    },
    overlayHeader: {
        color: '#1D7DAB',
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    overlayText: {
        color: '#7D8488',
        fontSize: 20,
        paddingBottom: 20,
    },
    overlayButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    confirmButton: {
        backgroundColor: '#2E8540',
        width: '45%',
        padding: '3%',
    },
    cancelButton: {
        backgroundColor: '#B7B7B7',
        width: '45%',
        padding: '3%',
    },
    bodyContainer: {
      flex: 0.95,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
    },
    buttonContainer: {
      paddingRight: '5%',
      alignItems: 'flex-end',
      width: '100%',
      marginTop: 35,
    },
    backButton: {
      padding: '3%',
    },
    icon: {
      height: 200,
      width: 200,
      marginTop: 55,
      marginBottom: 55,
      alignSelf: 'center',
    },
    moduleHeading: {
      color: '#12B1C3',
      fontSize: 20,
      paddingLeft: '10%',
    },
    moduleTitle: {
      color: '#0E5681',
      fontSize: 36,
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: 'bold',
      paddingLeft: '10%',
    },
    goalHeader: {
      paddingLeft: '10%',
      color: "#1D7DAB",
      fontWeight: 'bold',
      fontSize: 32,
    },
    goalText: {
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingTop: '3%',
      fontSize: 20,
    },
    startButton: {
      width: '65%',
      padding: '3%',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 5,
    },
    resumeButton: {
        backgroundColor: '#2E8540',
        width: '65%',
        padding: '3%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 60,
    },
  });

  export default ModuleResume;