import { View, StyleSheet, Image } from "react-native";
import { Text, Button } from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";

function ModuleTitle({navigation, route}) {

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
  const pageContent = route.params.fullModule.moduleContent[currentPage];

  let link = pageContent.content.logo;

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
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = "start, button" variant="button" style={{color: 'white'}}>{pageContent.buttonText}</Text>}
          onPress={()=>{
            route.params.fullModule.currentPage += 1;
            navigation.navigate(nextPage.pageType, {fullModule: route.params.fullModule})}}
        />
      </View>
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
      fontSize: '32',
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
      bottom:10,
    },
  });

  export default ModuleTitle;