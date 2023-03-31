import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import { LogBox } from 'react-native';

//Redux imports
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from './data/Reducer';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import ModulesScreen from './screens/ModulesScreen';
import ModuleTitle from './components/ModuleTitle';
import ModuleSectionHead from './components/ModuleSectionHead';
import ModuleContent from './components/ModuleContent';


LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core','Constants.platform.ios.model has been deprecated in favor of']);

export default function App() {

    const Stack = createNativeStackNavigator();

    const store = configureStore({
      reducer: rootReducer
    });

    const MainTabNavigator = () => {
      const Tabs = createBottomTabNavigator();
  
      return (
        <Tabs.Navigator initialRouteName='Checklist' screenOptions={{ headerShown: false}}>
                  <Tabs.Screen
                      name='Checklist' 
                      component={ChecklistTabStack}
                      options={{
                          tabBarIcon: ({focused, color, size}) => {
                              return (
                                  <Icon
                                      name = "list"
                                      type = "font-awesome-5"
                                      color= {color}
                                      size = {size}
                                  />
                              )
                          }}
                      }
                      />
                  <Tabs.Screen 
                      name='Modules' 
                      component={ModulesTabStack}
                      options={{
                          tabBarIcon: ({focused, color, size}) => {
                              return (
                                  <Icon
                                      name = "clock"
                                      type = "font-awesome-5"
                                      color={color}
                                      size = {size}
                                  />
                              )
                          }}
                      }
                  />
                  <Tabs.Screen 
                      name='User' 
                      component={UserTabStack}
                      options={{
                          tabBarIcon: ({focused, color, size}) => {
                              return (
                                  <Icon
                                      name = "cog"
                                      type = "font-awesome-5"
                                      color={color}
                                      size = {size}
                                  />
                              )
                          }}
                      }
                  />
              </Tabs.Navigator>
          )
        }

      const ChecklistTabStack =  () => {
        const stack = createNativeStackNavigator();

        return (
          <Stack.Navigator initialRouteName = 'HomeScreen' screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
            }}>
            <Stack.Screen name = 'HomeScreen' component={HomeScreen} options={{ headerShadowVisible: false}}/>
          </Stack.Navigator>
        )
      }

      const ModulesTabStack =  () => {
        const stack = createNativeStackNavigator();
        
        return (
          <Stack.Navigator initialRouteName = 'ModulesScreen' screenOptions={{
            headerShown: false,
            headerTintColor: '#1D7DAB',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
            }}>
            <Stack.Screen name = 'ModulesScreen' component={ModulesScreen} options={{ title: 'Modules' ,headerShadowVisible: false}}/>
            <Stack.Screen name = 'ModuleTitle' component={ModuleTitle}/>
            <Stack.Screen name = 'ModuleSectionHead' component={ModuleSectionHead}/>
            <Stack.Screen name = 'ModuleContent' component={ModuleContent}/>
          </Stack.Navigator>
        )
      }

      const UserTabStack =  () => {
        const stack = createNativeStackNavigator();
       
        return (
          <Stack.Navigator initialRouteName = 'Profile' screenOptions={{ headerShown: false}}>
            <Stack.Screen name = 'Profile' component={ProfileScreen}/>
          </Stack.Navigator>
        )
        
      }
      
        return(
          <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName = 'Login' screenOptions={{ headerShown: false}}>
                <Stack.Screen name = 'Login' component = {LoginScreen} />
                <Stack.Screen name = 'PasswordReset' component = {PasswordResetScreen} />
                <Stack.Screen name = 'Home' component = {MainTabNavigator} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>

        )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
