import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import { app } from './data/DB';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';


export default function App() {

    const Stack = createNativeStackNavigator();

    const MainTabNavigator = () => {
      const Tabs = createBottomTabNavigator();
  
      return (
        <Tabs.Navigator initialRouteName='Checklist'>
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
                      name='Calendar' 
                      component={CalendarTabStack}
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
          <Stack.Navigator initialRouteName = 'HomeScreen' screenOptions={{ headerShown: false}}>
            <Stack.Screen name = 'HomeScreen' component={HomeScreen}/>
          </Stack.Navigator>
        )
      }

      const CalendarTabStack =  () => {
        const stack = createNativeStackNavigator();
        // Add code
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
          <NavigationContainer>
            <Stack.Navigator initialRouteName = 'Login' screenOptions={{ headerShown: false}}>
              <Stack.Screen name = 'Login' component = {LoginScreen} />
              <Stack.Screen name = 'Home' component = {MainTabNavigator} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
          </NavigationContainer>
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
