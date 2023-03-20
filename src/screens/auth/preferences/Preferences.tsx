import React, { useState,useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { Box } from '../../../containers';
import {
  Button,
  Title,
  Text,
  Ribbon,
  Selector,
  Icon,
} from '../../../components';
import {useSignup} from '../../../context/signup/SignupContext'
import { theme } from '../../../theme';
import {useNavigation } from '@react-navigation/native';
import { routes } from '../../../routes';
import {GetDataItemsPreferences} from '../../../services/auth/index'
interface Preferences {
  uuid: number;
  name: string;

}

const Preferences = () => {
  const {dataApiRegister,dataSignupRegister} = useSignup();
  const  navigation  = useNavigation();

  const [preferencesSelect, setPreferencesSelect] = useState<Array<Preferences>>([]);
  const [itemsPreferences, setitemsPreferences] = useState<Array<Preferences>>([]);
const datas= [{uuid:0,name:'uno'},{uuid:1,name:'dos'}];
 
  const { colors } = theme;
  const add = (a: string) => {
    return a;
  };
  const delet = (a: any) => {
    return a;
  };
    // call api,get Departaments
    useEffect(() => {
      const dataProvincias = async () => {
        const data = await GetDataItemsPreferences()
        if (data) {
          setitemsPreferences(data)
        } else { console.log(data) };
      }
      dataProvincias();
    })
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Ribbon backDefault={false} rightComponent={<><View style={{ flexDirection: 'row' }}><Text textAlign="center" color="white">Lo ingresaré mas tarde</Text><Icon style={{ justifyContent: 'center' }} color="white" name="chevron-right" /></View></>} />
      <Box bg={colors.primary} marginTop={-22} marginBottom={-30}>
        <Title color="white" bold marginBottom={0} marginTop={0}>Preferencias</Title>
        <Text color="white" opacity={0.5}>
          Selecciona las categorias que mas te interesan, Elije y sigue los temas que más te interesan para ver
          mejor el contenido en tu feed.
        </Text>
      </Box>
      <Box marginTop={5} bg={colors.primary}>
        <View style={{ height: 255 }}>
          <ScrollView
            contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {itemsPreferences.map((element:Preferences, index:number) => {
              return (
                <Selector key={index}
                  item={element}

                  data={preferencesSelect}
                  setData={setPreferencesSelect} onPress={() => preferencesSelect ? add('i') : delet(1)}
                />
              );

            })}
          </ScrollView>
        </View>
        <Button marginTop={14} type="secondary" onPress={() => {
          console.log(preferencesSelect)
          dataSignupRegister.preference=preferencesSelect
          console.log(dataSignupRegister)
          navigation.navigate(routes.addVideoPhoto)
        }
        }>Siguiente</Button>
      </Box>
    </View>
  );
};

export default Preferences;
