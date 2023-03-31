import { View, StyleSheet, Image } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons'; 


function ModuleTitle({navigation, route}) {

  // TO ADD TO MODULES PAGE WHEN COMPLETED
//   const modules = [
//     {moduleNum: '1', moduleName: 'Make a Plan', logo: '', goal: 'Understand what puts you at risk from disasters and take steps to lower your risk.'}, 
//     {moduleNum: '2', moduleName: 'Water', logo: '', goal: 'Have 72 hours (3 days) worth of water stored for your household.'},
// ]

//   function goToModule(mod) {
//       console.log(modules[mod]);
//       navigation.navigate('ModuleTitle', {module: modules[mod]});
//   }

  let link = route.params.module.logo;
  console.log(route.params);

  return (
    <View style={styles.container}>
      <Button
      style={styles.backButton}
      variant='text'
      title={<Ionicons name="chevron-back-circle-sharp" size={35} color='#1D7DAB' />}
      onPress={()=>navigation.goBack()}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.moduleHeading}>Module {route.params.module.moduleNum}</Text>
        <Text style={styles.moduleTitle}>{route.params.module.moduleName}</Text>
        <Image style={styles.testIcon} 
        source={link}/>
        <Text style={styles.goalHeader}>Goal</Text>
        <Text style={styles.goalText}>{route.params.module.goal}</Text>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = "start, button" variant="button" style={{color: 'white'}}>Start</Text>}
          onPress={()=>navigation.navigate('ModuleSectionHead', 
          {mod: 'Module 1 - Make a Plan',
          sectionNum: '1',
          sectionTitle: 'Plan what to do if you have to evacuate',
          image: require('../assets/test_assets/img2.jpg'),
          })}
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
      backgroundColor: '#1D7DAB',
      width: '65%',
      padding: '3%',
      alignSelf: 'center',
      position: 'absolute',
      bottom:10,
    },
  });

  export default ModuleTitle;