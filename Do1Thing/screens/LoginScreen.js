import { useEffect, useState, createRef } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';

import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged
} from 'firebase/auth';

import { TextInput, Button } from 'react-native-paper';

import { getFBAuth, saveAndDispatch } from '../data/DB';
import { createUser, setLogin, loadUser } from '../data/Actions';

import { useDispatch, useSelector } from 'react-redux';

function SigninBox({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //refs are for focus on elements for accessibility
  const emailRef = createRef();
  const passwordRef = createRef();

  const dispatch = useDispatch();

  return (
    <View style={styles.loginContainer}>
      <Image 
        style={styles.logoExtended} 
        source={require('../assets/logoExtend.jpg')}
        accessibilityRole="image"
        accessibilityLabel="Logo"
        />
      <Text accessibilityRole="header" style={styles.heading}>Sign In</Text>
      <View style={styles.loginRow}>
        <View style={styles.loginLabelContainer}>
          <Text style={styles.loginLabelText}>Email: </Text>
        </View>
        <View style={styles.loginInputContainer}>
          <TextInput 
            ref={emailRef}
            mode="outlined"
            style={styles.loginInputBox}
            outlineColor='#DDDDDD'
            activeOutlineColor='#0E5681'
            accessibilityLabel="Enter Email, required"
            autoCapitalize='none'
            spellCheck={false}
            onChangeText={text=>setEmail(text)}
            value={email}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
        </View>
      </View>
      <View style={styles.loginRow}>
        <View style={styles.loginLabelContainer}>
          <Text style={styles.loginLabelText}>Password: </Text>
        </View>
        <View style={styles.loginInputContainer}>
          <TextInput 
            ref={passwordRef}
            accessibilityLabel="Enter Password, required"
            mode="outlined"
            style={styles.loginInputBox}
            outlineColor='#DDDDDD'
            activeOutlineColor='#0E5681'
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
          style={styles.navyButton}
          mode="contained"
          onPress={async () => {
            try {
              await signInWithEmailAndPassword(getFBAuth(), email, password);
              dispatch(setLogin(true));
            } catch(error) {
              console.log(error);
              if (error == 'FirebaseError: Firebase: Error (auth/invalid-email).') {
                Alert.alert("Sign In Error", 'Invalid Email', [{text: 'OK'}]);
                emailRef.current.focus();
              }
              else if (error == 'FirebaseError: Firebase: Error (auth/wrong-password).') {
                Alert.alert("Sign In Error", 'Incorrect Password', [{text: 'OK'}])
                passwordRef.current.focus();
              }
              else if (error == 'FirebaseError: Firebase: Error (auth/internal-error).') {
                Alert.alert("Sign In Error", 'Email and Password Required for Sign In', [{text: 'OK'}])
                emailRef.current.focus();
              }
              else if (error == 'FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
                Alert.alert("Sign In Error", 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.', [{text: 'OK'}])
                emailRef.current.focus();
              }
              else {
                Alert.alert("Sign In Error", error.message,[{ text: "OK" }])
              }
            }
          }}
        >
          SIGN IN
        </Button>
        <Button
          mode="text"
          textColor='#0E5681'
          onPress={() => {navigation.navigate('PasswordReset')}}
        >Forgot password?</Button>
      </View>
      <View style={styles.loginRow}>
        <Button
        style={styles.tealButton}
          mode="contained"
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

  const emailRef = createRef();
  const passwordRef = createRef();

  return (
    <View style={styles.loginContainer}>
      <Image 
        style={styles.logoExtended} 
        source={require('../assets/logoExtend.jpg')}
        accessibilityRole="image"
        accessibilityLabel="Logo"
        />
      <Text accessibilityRole="header" style={styles.heading}>Sign Up</Text>
      
      <View style={styles.loginRow}>
      </View>
      <View style={styles.loginRow}>
        <View style={styles.loginLabelContainer}>
          <Text style={styles.loginLabelText}>Email: </Text>
        </View>
        <View style={styles.loginInputContainer}>
          <TextInput 
            ref={emailRef}
            accessibilityLabel="Enter Email, required"
            mode="outlined"
            style={styles.loginInputBox}
            outlineColor='#DDDDDD'
            activeOutlineColor='#0E5681'
            autoCapitalize='none'
            spellCheck={false}
            onChangeText={text=>setEmail(text)}
            value={email}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
        </View>
      </View>

      <View style={styles.loginRow}>
        <View style={styles.loginLabelContainer}>
          <Text style={styles.loginLabelText}>Password: </Text>
        </View>
        <View style={styles.loginInputContainer}>
          <TextInput 
            ref={passwordRef}
            mode="outlined"
            style={styles.loginInputBox}
            outlineColor='#DDDDDD'
            activeOutlineColor='#0E5681'
            accessibilityLabel="Enter Password, required"
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
          mode="contained"
          style={styles.navyButton}
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
              console.log(error);
              if (error == 'FirebaseError: Firebase: Error (auth/invalid-email).') {
                Alert.alert("Sign In Error", 'Invalid Email', [{text: 'OK'}]);
                emailRef.current.focus();
              }
              else if (error == 'FirebaseError: Firebase: Error (auth/wrong-password).') {
                Alert.alert("Sign In Error", 'Incorrect Password', [{text: 'OK'}])
                passwordRef.current.focus();
              }
              else if (error == 'FirebaseError: Firebase: Error (auth/internal-error).') {
                Alert.alert("Sign In Error", 'Email and Password Required for Sign In', [{text: 'OK'}])
                emailRef.current.focus();
              }
              else if (error == 'FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).') {
                Alert.alert("Sign In Error", 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.', [{text: 'OK'}])
                emailRef.current.focus();
              }
              else {
                Alert.alert("Sign In Error", error.message,[{ text: "OK" }])
              }
            }
          }}
        >
          SIGN UP
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
            <Button
            mode="text"
            textColor='black'
            onPress={()=>{setLoginMode(!loginMode)}}>
                <Text 
                style={{color: '#0E5681'}}> Sign up </Text> 
                for your own preparedness account!
            </Button>
            :
            <Button mode="text" textColor='black' onPress={()=>{setLoginMode(!loginMode)}}>Returning user? 
                <Text 
                 
                style={{color: '#0E5681'}}> Sign in </Text> 
                instead!
            </Button>
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
      flex: 0.8,
      justifyContent: 'flex-start',
      alignItems: 'center',
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
    loginRow: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '80%',
      // backgroundColor: 'pink',
      padding: '3%',
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
      backgroundColor: '#FAFAFA',

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
    tealButton: {
      backgroundColor: '#1D7DAB',
      width: '70%',
      marginTop: '5%',
    },
    navyButton: {
      backgroundColor: '#0E5681',
      width: '100%',
      padding: '2%'
    },
    logoExtended: {
      width: '85%',
      height: 70,
      marginBottom: '7%',
    }
  });
  
  export default LoginScreen;