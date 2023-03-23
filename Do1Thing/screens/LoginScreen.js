import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image } from 'react-native';

import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
} from 'firebase/auth';

import { Button } from '@rneui/themed';
import { getFBAuth, saveAndDispatch } from '../data/DB';
import { createUser, editUser, setLogin, loadUser } from '../data/Actions';

import { useDispatch, useSelector } from 'react-redux';

function SigninBox({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginHeaderText}>Do1Thing!</Text>
      <Text style={styles.loginHeaderText}>Sign in:</Text>
      <View style={styles.loginRow}>
        <View style={styles.loginLabelContainer}>
          <Text style={styles.loginLabelText}>Email: </Text>
        </View>
        <View style={styles.loginInputContainer}>
          <TextInput 
            style={styles.loginInputBox}
            placeholder='Your email address' 
            autoCapitalize='none'
            spellCheck={false}
            onChangeText={text=>setEmail(text)}
            value={email}
          />
        </View>
      </View>
      <View style={styles.loginRow}>
        <View style={styles.loginLabelContainer}>
          <Text style={styles.loginLabelText}>Password: </Text>
        </View>
        <View style={styles.loginInputContainer}>
          <TextInput 
            style={styles.loginInputBox}
            placeholder='Your password' 
            autoCapitalize='none'
            spellCheck={false}
            secureTextEntry={true}
            onChangeText={text=>setPassword(text)}
            value={password}
          />
        </View>
      </View>
      <View style={styles.loginRow}>
        <Button
          onPress={async () => {
            try {
              await signInWithEmailAndPassword(getFBAuth(), email, password);
              dispatch(setLogin(true));
            } catch(error) {
              Alert.alert("Sign In Error", error.message,[{ text: "OK" }])
            }
          }}
        >
          Sign In
        </Button>  
      </View>
      <View style={styles.loginRow}>
        <Button
          onPress={() => {
            navigation.navigate('Home',{screen: 'HomeScreen'})
            // dispatch(loadUser({}));
          }}
        >
          Enter as guest
        </Button>
      </View>
    </View>
  );
}

function SignupBox({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginHeaderText}>Sign Up</Text>
      <View style={styles.loginRow}>
      </View>
      <View style={styles.loginRow}>
        <View style={styles.loginLabelContainer}>
          <Text style={styles.loginLabelText}>Email: </Text>
        </View>
        <View style={styles.loginInputContainer}>
          <TextInput 
            style={styles.loginInputBox}
            placeholder='Enter email address' 
            autoCapitalize='none'
            spellCheck={false}
            onChangeText={text=>setEmail(text)}
            value={email}
          />
        </View>
      </View>

      <View style={styles.loginRow}>
        <View style={styles.loginLabelContainer}>
          <Text style={styles.loginLabelText}>Password: </Text>
        </View>
        <View style={styles.loginInputContainer}>
          <TextInput 
            style={styles.loginInputBox}
            placeholder='Enter a strong password' 
            autoCapitalize='none'
            spellCheck={false}
            secureTextEntry={true}
            onChangeText={text=>setPassword(text)}
            value={password}
          />
        </View>
      </View>
      <View style={styles.loginRow}>
        <Button
          onPress={async () => {
            try {
              const userCred = 
                await createUserWithEmailAndPassword(
                  getFBAuth(), email, password
                );

                saveAndDispatch(createUser({
                  uid: userCred.user.uid,
                  email: userCred.user.email
                }));

                dispatch(setLogin(true));

            } catch(error) {
              Alert.alert("Sign Up Error", error.message,[{ text: "OK" }])
            }
          }}
        >
          Sign Up
        </Button>  
      </View>
    </View>
  );
}


function LoginScreen({navigation}) {
    const [loginMode, setLoginMode] = useState(true);

    useEffect(() => {
      onAuthStateChanged(getFBAuth(), user => {
        if (user) {
          navigation.navigate('Home',{screen: 'HomeScreen'});
        } else {
          // console.log('user is signed out!');
          navigation.navigate('Login');
          setLoginMode(true);
        }
      })
    }, []);

    return (
        <View style={styles.container}>
        <View style={styles.bodyContainer}>
            {loginMode?
            <SigninBox navigation={navigation}/>
            :
            <SignupBox/>
            }
        </View>
        <View styles={styles.modeSwitchContainer}>
            { loginMode ? 
            <Text>
                <Text 
                onPress={()=>{setLoginMode(!loginMode)}} 
                style={{color: 'blue'}}> Sign up </Text> 
                for your own preparedness account!
            </Text>
            :
            <Text>Returning user? 
                <Text 
                onPress={()=>{setLoginMode(!loginMode)}} 
                style={{color: 'blue'}}> Sign in </Text> 
                instead!
            </Text>
            }
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bodyContainer: {
      flex: 0.7,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'tan'
    },
    loginContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      paddingTop: '10%',
      paddingBottom: '10%',
      //backgroundColor: 'lightblue'
    },
    loginHeader: {
      width: '100%',
      padding: '3%',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: 'tan'
    },
    loginHeaderText: {
      fontSize: 24,
      color: 'black',
      paddingBottom: '5%'
    },
    loginRow: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 240,
      // backgroundColor: 'pink',
      padding: '3%'
    },
    loginLabelContainer: {
      // flex: 0.3,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    loginLabelText: {
      fontSize: 18
    },
    loginInputContainer: {
      // flex: 0.5,
      // justifyContent: 'center',
      // alignItems: 'flex-start',
      width: '100%',
      // backgroundColor: 'lightblue'
    },
    loginInputBox: {
      width: '100%',
      borderColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 6,
      fontSize: 18,
      padding: '2%'
    },
    modeSwitchContainer:{
      flex: 0.2,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    loginButtonRow: {
      width: '100%',
      justifyContent: 'center', 
      alignItems: 'center'
    },
    listContainer: {
      flex: 0.7, 
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%', 
    },
  });
  
  export default LoginScreen;