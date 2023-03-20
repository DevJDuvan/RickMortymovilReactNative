import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from '../context/auth';
import { VideoProvider } from '../context/video/Video';

import Account from './Account';
import { RootStackScreen } from './RootNavigation';

const MainNavigator = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? (
    <Account />
  ) : (
    <VideoProvider>
        <RootStackScreen />
    </VideoProvider>
  );
};

export const AppNavigator = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};
