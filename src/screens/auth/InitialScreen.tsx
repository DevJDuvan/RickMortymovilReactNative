import React from 'react';
import {Box} from '../../containers';
import {theme} from '../../theme';
import {Button, Title} from '../../components';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../routes';

const InitialScreen = () => {
  const {navigate} = useNavigation();
  const {colors} = theme;
  return (
    <Box bg={colors.primary} justifyContent="center" flex={1}>
      <View>
        <Image
          source={require('../../assets/img/logo.jpg')}
          style={{alignSelf: 'center', marginBottom: 60}}
        />
        <Title position="center" size="big" color="white" textTransform="uppercase" marginVertical={40} >Aprilive</Title>
        <Button size="big" type="secondary" onPress={() => navigate(routes.signin)}>
          Login
        </Button>
        <Button
          marginTop={20}
          size="big"
          type="secondary"
          outline
          onPress={() => navigate(routes.typeAccount)}>
          Sign up
        </Button>
      </View>
    </Box>
  );
};

export default InitialScreen;
