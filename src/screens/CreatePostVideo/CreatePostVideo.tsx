import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Text as TextRN, Switch } from 'react-native';
import { Ribbon, Title, Text, TextLink, Checkbox, Button,Input, Avatar,Icon} from '../../components';
import { paddingApp, theme } from '../../theme';
import { CompanyHeader } from '../components';
import { styles } from './styles';
import { info } from '../../constants';
import { Box } from '../../containers';
import { useNavigation } from '@react-navigation/native';
import { ItemCv } from '../components';


const { colors } = theme;
const imageAvatar ='data:image/jpeg;base64,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'
type CreateVideoProps = StackScreenProps<any, any> & {
}

const infoUser = {
  names: { name: 'Wanderley', lastName: 'Rodriguez' },
  contact: { email: 'wanderley@gmail.com', phone: '+11 989 989 989' },
  ubigeo: { country: 'Colombia', department: 'Bogota', city: '' },
  salaryExpectation: { min: '200,000.00', max: '300,000.00' },
  documents: {
    curriculum: [
      { name: 'CV-2020.docx', date: '12/10/2020', active: true },
      { name: 'CV-2021.docx', date: '12/10/2021', active: true },
    ],
    cartaPresent: [
      { name: 'Carte-2020.docx', date: '12/10/2020', active: true },
      { name: 'Carta-2021.docx', date: '12/10/2021', active: true },
    ],
  },
};

const CreatePostVideo: React.FC<CreateVideoProps> = () => {
  const [follow, setFollow] = useState(false);
  const [isCvPublic, setIsCvPublic] = useState(false);
  const [comments, setComments] = useState(false);
  const toggleSwitch = () => setComments(previousState => !previousState);
  const navigation = useNavigation();
  return (
    <>
      <Ribbon backgroundColor='white' backDefaultColor={colors.gray} title="Publicar" />
      <ScrollView style={[styles.container]}>
        <Title bold position='center' size='small'>Publica tu video</Title>
       <Box style={[stylesCardCv.inLine]}>
        <Input type='textarea' label='Descripcion' placeholder='Agrega una descripcion'></Input>
      <Image style={{height:'100%',width:"40%"}}
       source={{uri:imageAvatar}}></Image>

        </Box>
        <Input label='hashtags'></Input>
        
        <Input label='Etiquetas'></Input>
        <Text color={colors.danger} size="small">Ejemplo:</Text><Text  size="xSmall" color={colors.primary}>interfaz de usuario, animacion,ui marca,aplicacion,diseño web,moda,arquitectura</Text>

        <View style={[stylesCardCv.inLine,{marginBottom:5,marginTop:8}]}>
        <View style={{flexDirection:'row'}}>
           <Icon size={20}  style={{marginHorizontal:10}} name='lock'/>
            <Text >Quien puede ver este video</Text>
            </View>
            {/*SELECION*/ }
          </View>
          <View style={[stylesCardCv.inLine]}>
          <View style={{flexDirection:'row'}}>
           <Icon size={20}  style={{marginHorizontal:10}} name='comment'/>
            <Text>Permitir comentarios</Text>
            </View>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        value={comments}
        onValueChange={toggleSwitch}
      />
          </View>
          <View style={[stylesCardCv.inLine]}>
            {/*icono*/ }
            <Text>Agregar ubicacion</Text>
            {/*SELECION*/ }
          </View>

        {/* APLICAR */}

        <Button marginVertical={18} marginBottom={50}>Publicar</Button>
      </ScrollView>
    </>
  );
};

const stylesCardCv = StyleSheet.create({
  inLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CreatePostVideo;
