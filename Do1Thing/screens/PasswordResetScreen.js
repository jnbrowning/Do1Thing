import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { getFBAuth } from '../data/DB';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Snackbar } from 'react-native-paper';
import { Text, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons';


const PasswordResetScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openErrorSnackBar, setOpenErrorSnackBar] = useState(false);

  const handleSubmit = async () => {
    console.log(`Submitting email: ${email}`);

    // Handle password reset request through Firebase
    const auth = getFBAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password email sent');
        setOpenSnackBar(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setOpenErrorSnackBar(true);
        console.log('Error encountered while entering email')
      });
  };

  const onDismissSnackBar = () => {
    setOpenSnackBar(false);
    setOpenErrorSnackBar(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
      <Button
        style={styles.backButton}
        variant="text"
        title={<Text accessibilityLabel="back, button"
          variant='button' style={{color: '#0E5681'}}
          ><Ionicons name="md-chevron-back" size={16} color="#492C7A" /> Back</Text>}
        onPress={()=>{navigation.goBack()}}
      />
      <Text accessibilityRole="header" style={styles.heading}>Forgot Password</Text>
      <TextInput 
        color='#0E5681'
        label={<Text accessible={false}>Email</Text>}
        variant="outlined"
        leading={props => <Icon name="email" {...props} accessible={false}/>}
        style={styles.loginInputBox}
        accessibilityLabel="Enter Email, required"
        autoCapitalize='none'
        spellCheck={false}
        onChangeText={text=>setEmail(text)}
        value={email}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        blurOnSubmit={false}
      />
      <Button
        style={styles.navyButton}
        title={<Text accessibilityLabel = "submit, button" variant="button" style={{color: 'white'}}>Submit</Text>}
        mode='contained'
        onPress={()=>{handleSubmit()}}/>
      <Snackbar
        visible={openSnackBar}
        onDismiss={onDismissSnackBar}
        duration={6000}
        >
        We have sent you an email to reset your password!
      </Snackbar>
      <Snackbar
        visible={openErrorSnackBar}
        onDismiss={onDismissSnackBar}
        duration={6000}
        style={styles.snackBarWrapper}
        >
        Error when sending email. Please check your email address or try again later.
      </Snackbar>
      </View>
    </View>
  );

  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 0.9,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'tan',
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  snackBarWrapper: {
    backgroundColor: 'crimson',
  },
  loginInputBox: {
    width: '80%',
    backgroundColor: '#FAFAFA',
  },
  logoExtended: {
    width: '85%',
    height: 70,
    marginBottom: '7%'
  },
  heading: {
    fontSize: 24,
    color: 'black',
    paddingBottom: '5%',
    paddingTop: '5%',
    fontWeight: 'bold'
  },
  navyButton: {
    backgroundColor: '#0E5681',
    width: '80%',
    padding: '2%',
    margin: '7%'
  },
  backButton: {
    flexDirection: 'row',
    width: '100%',
    padding: '3%'
  },
});

export default PasswordResetScreen;