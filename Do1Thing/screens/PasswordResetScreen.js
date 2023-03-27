import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getFBAuth } from '../data/DB';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Snackbar, Button, TextInput } from 'react-native-paper';

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
      <Image 
        style={styles.logoExtended} 
        source={require('../assets/logoExtend.jpg')}
        accessibilityRole="image"
        accessibilityLabel="Logo"
        />
      <Text accessibilityRole="header" style={styles.heading}>Forgot Password</Text>
      <Text style={styles.label}>Email:</Text>
      <TextInput 
        mode="outlined"
        style={styles.loginInputBox}
        outlineColor='#DDDDDD'
        activeOutlineColor='#0E5681'
        accessibilityLabel="Enter Email, required"
        autoCapitalize='none'
        spellCheck={false}
        onChangeText={text=>setEmail(text)}
        value={email}
      />
      <Button
        style={styles.navyButton}
        mode='contained'
        onPress={()=>{handleSubmit()}}>
          Submit
        </Button>
      <Button
        textColor='#0E5681'
        onPress={()=>{navigation.goBack()}}
      >Back</Button>
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
    flex: 0.8,
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
});

export default PasswordResetScreen;