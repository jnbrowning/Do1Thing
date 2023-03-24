import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '@rneui/themed';
import { getFBAuth } from '../data/DB';
import { sendPasswordResetEmail } from 'firebase/auth';

const PasswordResetScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    console.log(`Submitting email: ${email}`);

    // Handle password reset request through Firebase
    const auth = getFBAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password email sent')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

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
});

export default PasswordResetScreen;