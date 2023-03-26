import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '@rneui/themed';
import { getFBAuth } from '../data/DB';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Snackbar } from 'react-native-paper';

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
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        title='Submit'
        onPress={()=>{handleSubmit()}}
      />
      <Button
        title='Back'
        onPress={()=>{navigation.goBack()}}
      />
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
  );

  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
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
  }
});

export default PasswordResetScreen;