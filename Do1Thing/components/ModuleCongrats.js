import { View, StyleSheet, Image } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons'; 


function ModuleCongrats({navigation, route}) {

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
        <Image style={styles.testIcon} 
        source={link}/>
        <Text style={styles.goalText}>Congratulations!</Text>
        <View style={styles.goalBlock}>
        <Text style={styles.infoText}>{route.params.info}</Text>
        </View>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = "done, button" variant="button" style={{color: 'white'}}>Done</Text>}
          onPress={()=>navigation.navigate('ModulesScreen')}
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
      flex: 1,
      width: '80%',
      marginTop: 40,
      marginBottom: 30,
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
      paddingLeft: '10%',
      paddingRight: '10%',
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