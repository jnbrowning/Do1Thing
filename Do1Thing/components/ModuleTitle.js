import { View, StyleSheet, Image } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons'; 


function ModuleTitle({navigation, route}) {

//   const modules = [
//     {currentPage: 0,
//     moduleContent: [
//         {pageType: 'ModuleTitle',
//         content: {moduleNum: '1', 
//                 moduleName: 'Make a Plan', 
//                 logo: require('../assets/test_assets/img1.jpg'), 
//                 goal: 'Understand what puts you at risk from disasters and take steps to lower your risk.',
//                 },
//         buttonText: 'Start'},
//     ]
//     }
// ]

//   function goToModule(mod) {
//       console.log(modules[mod].currentPage);
//       const modulePage = modules[mod].moduleContent[modules[mod].currentPage];
//       console.log(modulePage.buttonText);
//       modules[mod].currentPage += 1;
//       console.log(modules[mod].currentPage);
//       navigation.navigate(modulePage.pageType, {module: modulePage.content, fullModule: modules[mod]});
//     }

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
  const pageContent = route.params.fullModule.moduleContent[currentPage];

  let link = pageContent.content.logo;

  return (
    <View style={styles.container}>
      <Button
      style={styles.backButton}
      variant='text'
      title={<Ionicons name="chevron-back-circle-sharp" size={35} color='#1D7DAB' />}
      onPress={()=>navigation.goBack()}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.moduleHeading}>Module {pageContent.content.moduleNum}</Text>
        <Text style={styles.moduleTitle}>{pageContent.content.moduleName}</Text>
        <Image style={styles.testIcon} 
        source={link}/>
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
      height: 200,
      width: 200,
      marginTop: 55,
      marginBottom: 55,
      alignSelf: 'center',
      color: 'blue',
    },
    backButton: {
      height: 70,
      paddingLeft: '5%',
      justifyContent: 'center',
      marginTop: 25,
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