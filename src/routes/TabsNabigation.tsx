import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home';
import { Profile } from '../screens/account';
import { Notification } from '../screens/notification';
import { theme, heightTab } from '../theme';
import { Icon, Text } from '../components';
import { View, Pressable, StyleSheet } from 'react-native';
import { Box } from '../containers';
import { useVideo } from '../context/video/Video';

const routes = [
  { name: 'Home', title: 'Inicio', component: Home, icon: 'home' },
  { name: 'Search', title: 'Buscar', component: Home, icon: 'magnify' },
  { name: 'Create', title: 'Crear', component: Home, icon: 'plus-box-outline' },
  {
    name: 'Notification',
    title: 'Notificaciones',
    component: Notification,
    icon: 'bell',
  },
  {
    name: 'Profile',
    title: 'Mi Perfil',
    component: Profile,
    icon: 'account',
  },
];

const Tab = createBottomTabNavigator();
const { colors } = theme;

const ButtonCreate: React.FC<{ icon: string, onPress?: () => void }> = ({ icon, onPress }) => (<Pressable onPress={onPress} style={styles.align}>
  <Icon name={icon} size={35} />
</Pressable>);

const TabNavigation = () => {
  const { setOnCreate} = useVideo();
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}

      screenOptions={() => ({
        tabBarActiveTintColor: colors.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#ffffff',
          elevation: 0,
          height: heightTab,
        },
        headerShown: false,
      })}>
      {routes.map((route, i) => (
        <Tab.Screen
          key={i}
          name={route.name}
          component={route.component}

          options={{
            tabBarIcon: ({ color }) => {
              return (<Box paddingHorizontal={0} paddingVertical={0} height="100%" width="100%">
                {route.name === 'Create'
                  ? <ButtonCreate icon={route.icon} onPress={() => setOnCreate && setOnCreate(true)} />
                  : (<View style={styles.align}>
                    <Icon name={route.icon} size={25} color={color} />
                    <Text size="xSmall" color={color}>{route.title}</Text>
                  </View>)}
              </Box>);
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  align: { justifyContent: 'center', alignItems: 'center', height: '100%' },
});

export default TabNavigation;
