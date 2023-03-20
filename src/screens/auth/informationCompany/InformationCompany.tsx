import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Form from '../../../components/Form';
import { Box, Card } from '../../../containers';
import {
  Title,
  Text,
  Ribbon,
  Input,
  Button,
  Icon,
} from '../../../components';
import { theme } from '../../../theme';
import { useAuth } from '../../../context/auth';
import { routes } from '../../../routes';
const InformationCompany = () => {
  const navigation = useNavigation();
  const { colors } = theme;
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Ribbon backDefault={false} rightComponent={<><View style={{flexDirection:'row'}}><Text textAlign="center" color="white">Continuar  mas tarde</Text><Icon style={{justifyContent:'center'}} color="white"  name="chevron-right" /></View></>}/>
      <Box bg={colors.primary} marginTop={-20} marginBottom={0}>
        <Title color="white" bold marginBottom={0} marginTop={-10}>Informacion</Title>
        <Text textAlign="left" color="white" opacity={0.5}>
          Por favor completa tu información necesaria de tu empresa.
        </Text>
      </Box>
      <Card sticky="bottom">
        <Form>
          <Input label="Fecha de creacion" placeholder="dd/mm/yyyy" />
          <Input type="password" secureTextEntry={false} label="Tamaño de la empresa*" placeholder="0-5 empleados" />
          <Input type="password" secureTextEntry={false} label="Selecciona tu sector*" placeholder="Fabricacion" />
          <Input type="textarea" hintAlign="right" hint="maximo 500 caracteres" numberOfLines={3} label="Ingresa tus especialidades*" placeholder="Habilidades de equipo,liderezgo,etc" />
          <Input type="textarea" hintAlign="right" hint="maximo 1000 caracteres" numberOfLines={6} label="Descripcion*" placeholder="Ingresa una descripcion de tu empresa" />
        </Form>
        <Button onPress={()=>{navigation.navigate(routes.preferences);}} type="primary">Siguiente</Button>
      </Card>
    </View>
  );
};
export default InformationCompany;
