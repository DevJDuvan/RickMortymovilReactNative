import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {AuthProvider} from '../context/auth'
import {SignupProvider} from '../context/signup/SignupContext'
// COMPONENTs

import Forgot from '../screens/account/Forgot';
import InitialScreen from '../screens/auth/InitialScreen';

import {routes} from '.';
import {
  SignIn,
  SignUp,
  SelectTypeAccount,
  CompleteRegister,
  InformationCompany,
  AddVideoPhoto,
  Notification,
  Preferences,
  Profile,
  Home
  
} from '../screens/auth';
import {SectionApplications} from '../screens/account/sectionApplications'
import {CreatePostVideo} from '../screens/CreatePostVideo'
import {CreatePostVideoJob} from '../screens/CreatePostVideoJob'
export default function Account() {
  return (
    <AuthProvider>
      <SignupProvider>
    <Stack.Navigator initialRouteName={routes.home}>
      <Stack.Screen
        name={routes.initial}
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.signin}
        component={SignIn}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name={routes.notificacion}
        component={Notification}
        options={{headerShown: false}}
      />
  
      <Stack.Screen
        name={routes.profile}
        component={Profile}
        options={{headerShown: false}}
      />
  
     
      <Stack.Screen
        name={routes.home}
        component={Home}
        options={{headerShown: false}}
      />
    
    </Stack.Navigator>
    </SignupProvider>
    </AuthProvider>
  );
}
