import { useEffect, useState, createRef } from 'react';
import { View, StyleSheet, Alert, Image, TouchableWithoutFeedback, Keyboard  } from 'react-native';

import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged,
  onIdTokenChanged
} from 'firebase/auth';

import { Text, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { getFBAuth, saveAndDispatch } from '../data/DB';
import { createUser, editUser, setLogin, loadUser } from '../data/Actions';

import { useDispatch, useSelector } from 'react-redux';
import { getAuth, sendEmailVerification } from "firebase/auth";

function SigninBox({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //refs are for focus on elements for accessibility
  const emailRef = createRef();
  const passwordRef = createRef();

  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.loginContainer}>
      <Image 
        alt="logo"
        style={styles.logoExtended} 
        source={require('../assets/logoExtend.jpg')}
      />
      <Text accessibilityRole="header" style={styles.heading}>Sign In</Text>
      <View style={styles.loginRow}>
        <View style={styles.loginInputContainer}>
          <TextInput 
            color='#0E5681'
            label={<Text accessible={false}>Email</Text>}
            ref={emailRef}
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
        </View>
      </View>
      <View style={styles.loginRow}>
        <View style={styles.loginInputContainer}>
          <TextInput 
            ref={passwordRef}
            label="Password"
            accessibilityLabel="Enter Password, required"
            variant="outlined"
            leading={props => <Icon accessible={false} name="form-textbox-password" {...props} />}
            style={styles.loginInputBox}
            color='#0E5681'
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
          variant="contained"
          title={<Text accessibilityLabel = "sign in, button" variant="button" style={{color: 'white'}}>Sign In</Text>}
          onPress={async () => {
            try {
              const userCred = await signInWithEmailAndPassword(getFBAuth(), email, password);
              if (userCred.user.emailVerified) {
                dispatch(setLogin(true)); 
                navigation.navigate('Main',{screen: 'HomeScreen', newUser: false,})
              } else {
                Alert.alert("Sign In Error", 'Please verify your email address before signing in.', [{text: 'OK'}])
              }
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
        />
        <Button
          variant="text"
          title={<Text accessibilityLabel="forgot password, button"
          variant='button' style={{color: '#0E5681'}}
          >Forgot password?</Text>}
          onPress={() => {navigation.navigate('PasswordReset')}}
        />
      </View>
      <View style={styles.loginRow}>
        <Button
        style={styles.tealButton}
          variant="contained"
          title={<Text accessibilityLabel="enter as guest, button"
          variant='button' style={{color: 'white'}}
          >Enter as guest</Text>}
          onPress={() => {
            navigation.navigate('Main',{screen: 'HomeScreen', newUser: false,})
            // dispatch(loadUser({}));
          }}
        />
      </View>
    </View>
    </TouchableWithoutFeedback>
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
        alt="logo"
        style={styles.logoExtended} 
        source={require('../assets/logoExtend.jpg')}
        />
      <Text accessibilityRole="header" style={styles.heading}>Sign Up</Text>
      <View style={styles.loginRow}>
        <View style={styles.loginInputContainer}>
          <TextInput 
            color='#0E5681'
            label={<Text accessible={false}>Email</Text>}
            ref={emailRef}
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
        </View>
      </View>

      <View style={styles.loginRow}>
        <View style={styles.loginInputContainer}>
          <TextInput 
            ref={passwordRef}
            label="Password"
            accessibilityLabel="Enter Password, required"
            variant="outlined"
            leading={props => <Icon accessible={false} name="form-textbox-password" {...props} />}
            style={styles.loginInputBox}
            color='#0E5681'
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
          variant="contained"
          title={<Text accessibilityLabel = "sign up, button" variant="button" style={{color: 'white'}}>Sign Up</Text>}
          style={styles.navyButton}
          onPress={async () => {
            try {
              const userCred = 
                await createUserWithEmailAndPassword(
                  getFBAuth(), email, password
                );
  
              await sendEmailVerification(userCred.user)
              
              saveAndDispatch(createUser({
                uid: userCred.user.uid,
                email: userCred.user.email
              }));
              
              Alert.alert("Sign Up Success", 'Please check your email for a verification link.', [{text: 'OK'}]);
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
        />
  
      </View>
    </View>
  );
}

function LoginScreen({navigation}) {
    const [loginMode, setLoginMode] = useState(true);

    useEffect(() => {
      onAuthStateChanged(getFBAuth(), user => {
        if (user) {
          navigation.navigate('Main',
          {screen: 'HomeScreen', 
          returningUser: true,
        });
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
            variant ="text"
            color='black'
            title={<Text accessibilityLabel="Sign up for your own preparedness account, button"><Text 
                style={{color: '#0E5681'}}> Sign up </Text> 
                for your own preparedness account!</Text>}
            onPress={()=>{setLoginMode(!loginMode)}}/>
            :
            <Button 
            variant="text" 
            color='black' 
            title={<Text accessibilityLabel="Returning user? Sign in instead, button">Returning user? 
              <Text style={{color: '#0E5681'}}> Sign in </Text>instead!</Text>}
            onPress={()=>{setLoginMode(!loginMode)}}/>
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