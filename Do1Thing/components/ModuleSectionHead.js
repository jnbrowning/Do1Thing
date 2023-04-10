import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, Button } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import * as Progress from 'react-native-progress';

function ModuleSectionHead({navigation, route}) {

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
  const pageContent = route.params.fullModule.moduleContent[currentPage];
  const progressWidth = currentPage / (route.params.fullModule.moduleContent.length - 1);
  console.log(progressWidth);

  let link = pageContent.content.image;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.backButton}
        onPress={()=>{
          const previousPage = route.params.fullModule.moduleContent[currentPage - 1].pageType;
          route.params.fullModule.currentPage -= 1;
          navigation.navigate(previousPage, {fullModule: route.params.fullModule})}}>
          <Ionicons name="chevron-back-circle-sharp" size={35} color='#1D7DAB'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate('ModulesScreen')}>
          <AntDesign name="close" size={30} color="#9D9D9D"/>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.moduleHeading}>{pageContent.content.mod}</Text>
        <Image style={styles.picture} 
        source={link}/>
        <View style={styles.goalBlock}>
          <Text style={styles.goalHeader}>Section {pageContent.content.sectionNum}</Text>
          <Text style={styles.goalText}>{pageContent.content.sectionTitle}</Text>
        </View>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = "let's go, button" variant="button" style={{color: 'white'}}>{pageContent.buttonText}</Text>}
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
    },
    goalHeader: {
      paddingLeft: '10%',
      color: "#1D7DAB",
      fontSize: 24,
      fontWeight: 'bold',
    },
    goalText: {
      paddingLeft: '15%',
      paddingRight: '15%',
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
      flex: 1,
      marginBottom: 60,
      width: '100%',
    }
  });

  export default ModuleSectionHead;