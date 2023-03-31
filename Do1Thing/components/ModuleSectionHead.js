import { View, StyleSheet, Image } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons'; 


function ModuleSectionHead({navigation, route}) {

  let link = route.params.image;
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
        <Text style={styles.moduleHeading}>{route.params.mod}</Text>
        <Image style={styles.testIcon} 
        source={link}/>
        <View style={styles.goalBlock}>
          <Text style={styles.goalHeader}>Section {route.params.sectionNum}</Text>
          <Text style={styles.goalText}>{route.params.sectionTitle}</Text>
        </View>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = "let's go, button" variant="button" style={{color: 'white'}}>Let's Go</Text>}
          onPress={()=>navigation.navigate('ModuleContent', 
          {mod: 'Module 1 - Make a Plan',
          headText: 'Choose two emergency meeting places',
          sectionTitle: 'Plan what to do if you have to evacuate',
          image: require('../assets/test_assets/img3.jpg'),
          info: 'The other should be outside of your neighborhood, in case you cannot return home or are asked to evacuate.',
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
      height: 300,
      width: 300,
      marginTop: 50,
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
      fontSize: 24,
      paddingLeft: '10%',
   
    },
    goalHeader: {
      paddingLeft: '10%',
      color: "#1D7DAB",
      fontSize: '24',
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
      backgroundColor: '#1D7DAB',
      width: '65%',
      padding: '3%',
      alignSelf: 'center',
      position: 'absolute',
      bottom:10,
    },
    goalBlock: {
      justifyContent: 'center',
      flex: 1,
      marginBottom: 60,
      width: '100%',
    }
  });

  export default ModuleSectionHead;