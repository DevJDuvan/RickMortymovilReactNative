import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Box } from '../../../containers';
import {
  Button,
  Title,
  Text,
  Ribbon,
} from '../../../components';
import { theme } from '../../../theme';
import {useSignup} from '../../../context/signup/SignupContext'
import { routes } from '../../../routes';
import {deletDataUser,dataApiRegisterr} from '../../../services/DataApiRegister'
import {getDataRegister} from '../../../services/auth/index'
const SelectTypeAccount = () => {
 const {saveDataApiRegister} = useSignup();
  const navigation = useNavigation();
  const { colors } = theme;
  return (
    
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Ribbon />
      <Box bg={colors.primary}>
        <Title color="white" bold marginBottom={0} marginTop={0}>Tipo de cuenta</Title>
        <Text color="white" opacity={0.5}>
          Selecciona si tu tipo de cuenta es personal o para tu empresa
        </Text>
      </Box>
      <Box marginTop={50}>
        <Button
          height={126}
          type="secondary"
          size="big"
          marginBottom={40}
          onPress={ async () => { 
       const resp =  await getDataRegister(2);
       if(resp.error===0){
    saveDataApiRegister(resp.data);
    deletDataUser(resp.data)
    navigation.navigate(routes.signup,{
      typeAccount: 2 
    });
       }
        }}>
          PERSONAL
        </Button>
        <Button
          height={126}
          type="secondary"
          size="big"
          onPress={ async () => { navigation.navigate(routes.signup,{
            typeAccount: 1 
          });
    
     
        }} >
          EMPRESA
        </Button>
      </Box>
    </View>
    
  );
};

export default SelectTypeAccount;
