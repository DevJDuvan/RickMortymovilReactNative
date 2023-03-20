import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Apply} from '../screens/apply/';
import TabNavigation from './TabsNabigation';

type RootStackParamList = {
  'ApplyJob': undefined
  'TabScreen': undefined
}

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackScreen: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="TabScreen"

      screenOptions={{
        headerShown: false, cardStyle: {
        backgroundColor:'white',
      }  }} >
      <RootStack.Screen name="TabScreen" component={TabNavigation}  />
      <RootStack.Screen name="ApplyJob" component={Apply}  />
    </RootStack.Navigator>
  );
};
