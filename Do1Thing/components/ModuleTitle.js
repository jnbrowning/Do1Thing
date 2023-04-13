import { View, StyleSheet, Image } from "react-native";
import { Text, Button } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";
import * as Progress from 'react-native-progress';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { findModuleIcon } from '../data/ModuleInfo';

function ModuleTitle({navigation, route}) {

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
  const pageContent = route.params.fullModule.moduleContent[currentPage];
  const progressWidth = currentPage / (route.params.fullModule.moduleContent.length - 1);
  const checklistPage = route.params.fullModule.moduleContent.length - 2;
  console.log(progressWidth);

  const SvgIcon = findModuleIcon(pageContent.content.moduleNum);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate('ModulesScreen')}>
      <Ionicons name="chevron-back-circle-sharp" size={35} color='#1D7DAB'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} 
        onPress={() => navigation.push(route.params.fullModule.moduleContent[checklistPage].pageType, {fullModule: route.params.fullModule, skipTo: true})}>
          <MaterialCommunityIcons name="format-list-checks" size={30} color="white" style={styles.checkButton}/>
          <Text style={{paddingLeft: '3%', fontWeight: 'bold', alignSelf: 'center', fontSize: 14}}>{"Access\nChecklist"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.moduleHeading}>Module {pageContent.content.moduleNum}</Text>
        <Text style={styles.moduleTitle}>{pageContent.content.moduleName}</Text>
        <SvgIcon width={350} height={350} padding={0} margin={-30} style={styles.icon} />
        <Text style={styles.goalHeader}>Goal</Text>
        <Text style={styles.goalText}>{pageContent.content.goal}</Text>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = "start, button" variant="button" style={{color: 'white'}}>{pageContent.buttonText}</Text>}
          onPress={()=>{
            route.params.fullModule.currentPage += 1;
            navigation.push(nextPage.pageType, {fullModule: route.params.fullModule})}}
        />
      </View>
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
    bodyContainer: {
      flex: 0.95,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '100%',
    },
    buttonContainer: {
      paddingRight: '6%',
      paddingLeft: '5%'
,     justifyContent: 'space-between',
      flexDirection: 'row',
      width: '100%',
      marginTop: 35,
      marginBottom: 15,
    },
    checkButton: {
      padding: '1%',
      backgroundColor: '#1D7DAB',
      alignContent: 'center',
      borderRadius: '10%',
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
      backgroundColor: '#2E8540',
      width: '65%',
      padding: '3%',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 25,
    },
  });

  export default ModuleTitle;