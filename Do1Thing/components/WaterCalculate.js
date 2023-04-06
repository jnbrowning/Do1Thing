import { View, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Text, Button, TextInput } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useState, useEffect } from "react";

function WaterCalculate({navigation, route}) {

  const currentPage = route.params.fullModule.currentPage;
  const nextPage = route.params.fullModule.moduleContent[currentPage + 1];
  const pageContent = route.params.fullModule.moduleContent[currentPage];

  const [people, setPeople] = useState(0);
  const [pets, setPets] = useState(0);
  const [neededGallons, setGallons] = useState(0);

    useEffect (()=> {
        if (pets == '' || people == ''){
            setGallons('--')
        }
        else {
            setGallons ((people * 3) + parseInt(pets));
        }

    }, [people, pets])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
        <Text style={styles.goalText}>{pageContent.content.headText}</Text>
        <View style={styles.goalBlock}>
        <TextInput 
            keyboardType="numeric"
            label="# of People"
            accessibilityLabel="Number of people, required"
            variant="outlined"
            style={styles.loginInputBox}
            color='#0E5681'
            onChangeText={text=>setPeople(text)}
            value={people}
        />
        <TextInput 
            keyboardType="numeric"
            label="# of Pets"
            accessibilityLabel="Number of pets, required"
            variant="outlined"
            style={styles.loginInputBox}
            color='#0E5681'
            onChangeText={text=>setPets(text)}
            value={pets}
        />
        <Text style={styles.gallonResult}>= {neededGallons} Gallons</Text>
        </View>
        <Button
          style={styles.startButton}
          variant="contained"
          title={<Text accessibilityLabel = "next, button" variant="button" style={{color: 'white'}}>{pageContent.buttonText}</Text>}
          onPress={()=>{
            route.params.fullModule.currentPage += 1;
            navigation.navigate(nextPage.pageType, {fullModule: route.params.fullModule})}}
          />
      </View>
    </View>
    </TouchableWithoutFeedback>
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
      resizeMode: 'contain',
      height: 200,
      marginTop: 20,
      marginBottom: 30,
      alignSelf: 'center',
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
      backgroundColor: '#2E8540',
      width: '65%',
      padding: '3%',
      alignSelf: 'center',
      position: 'absolute',
      bottom:10,
    },
    goalBlock: {
      justifyContent: 'flex-start',
      flex: 1,
      marginTop: 60,
      marginBottom: 60,
      width: '100%',
    },
    infoText: {
        fontSize: 20,
        color: 'black',
        marginLeft: '10%',
        marginRight: '10%',
    },
    loginInputBox: {
        width: '85%',
        alignSelf: 'center',
        backgroundColor: '#FAFAFA',
        marginBottom: 50,
      },
    gallonResult: {
        color: '#1D7DAB',
        fontSize: 32,
        fontWeight: 'bold',
        paddingLeft: '10%',
      }
  });

  export default WaterCalculate;