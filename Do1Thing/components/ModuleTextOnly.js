import { View, StyleSheet, Image } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons'; 


function ModuleTextOnly({navigation, route}) {

  let link = route.params.image;
  console.log(route.params);

  const nextPage = {pageType: 'ModuleCongrats',
  content: {
    info: 'You went through all the materials for Module 1, hopefully you learned a bit more about how to make a plan.',
    image: require('../assets/test_assets/img5.jpg'),
    },
  buttonText: 'Done'}

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
        <View style={styles.goalBlock}>
            <Text style={styles.goalText}>{route.params.headText}</Text>
            <Text style={styles.infoText}>{route.params.info}</Text>
        </View>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = "next, button" variant="button" style={{color: 'white'}}>Next</Text>}
          onPress={()=>navigation.navigate(nextPage.pageType, nextPage.content)}
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
      width: '100%',
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
      fontSize: 32,
      fontWeight: 'bold',
      color: '#1D7DAB',

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
      justifyContent: 'space-evenly',
      flex: 0.8,
      width: '100%',
    },
    infoText: {
        fontSize: 20,
        color: 'black',
        marginLeft: '10%',
        marginRight: '10%',
    }
  });

  export default ModuleTextOnly;