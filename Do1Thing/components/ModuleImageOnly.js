import { View, StyleSheet, Image } from "react-native";
import { Text, Button } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons'; 

function ModuleImageOnly({navigation, route}) {

    const nextPage = {pageType: 'ModuleTextOnly',
    content: {mod: 'Module 1 - Make a Plan',
            headText: 'Great!',
            info: 'Now that you know what disasters could happen in your community, there are things you can do to lower your risk of injury or property damage. Here are some suggestions.',
            },
    buttonText: 'See Suggestions'}


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
        <Text style={styles.goalText}>{route.params.headText}</Text>
        <Image style={styles.testIcon} 
        source={link}/>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = "next, button" variant="button" style={{color: 'white'}}>{nextPage.buttonText}</Text>}
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
      flex: 0.90,
      width: '90%',
      marginTop: 30,
      marginBottom: 40,
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
      flex: 1,
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

  export default ModuleImageOnly;