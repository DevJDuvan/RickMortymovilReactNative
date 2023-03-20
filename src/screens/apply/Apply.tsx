import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Ribbon, Title, Text, TextLink, Checkbox, Button } from '../../components';
import { paddingApp, theme } from '../../theme';
import { CompanyHeader } from '../components';
import { styles } from './styles';
import { info } from '../../constants';
import { Box } from '../../containers';
import { useNavigation } from '@react-navigation/native';
import { ItemCv } from '../components';


const { colors } = theme;

type ApplyProps = StackScreenProps<any, any> & {
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

const Apply: React.FC<ApplyProps> = () => {
  const [follow, setFollow] = useState(false);
  const [isCvPublic, setIsCvPublic] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <Ribbon backDefaultColor={colors.gray} title="Postulación" />
      <ScrollView style={[styles.container]}>
        <CompanyHeader {...{ follow, setFollow }} company={info.business} full theme="light" />
        <Title marginVertical={10} size="small" semiBold textTransform="uppercase">Se solicita desarrollador front end</Title>
        <Text marginBottom={5} size="big" fontWeight="semibold" color={colors.darkText}>Información a enviar</Text>
        {/* Info */}
        <Text fontWeight="semibold">Nombres: <Text>{infoUser.names.name}</Text></Text>
        <Text fontWeight="semibold">Apellidos: <Text>{infoUser.names.lastName}</Text></Text>
        <Text fontWeight="semibold">E-mail: <Text>{infoUser.contact.email}</Text></Text>
        <Text fontWeight="semibold">Celular: <Text>{infoUser.contact.phone}</Text></Text>
        <Text fontWeight="semibold">Ubigeo: <Text> {infoUser.ubigeo.department} - {infoUser.ubigeo.country}</Text></Text>
        <Text fontWeight="semibold">Pretencion Salarial: <Text>{infoUser.salaryExpectation.min} a {infoUser.salaryExpectation.max}</Text></Text>
        {/* Help */}
        <Box paddingHorizontal={10} paddingVertical={10} alignItems="center">
          <Text size="xSmall" color={colors.primary}>* Nota: esta información se enviará a la empresa o empleador</Text>
          <Text size="xSmall">ó</Text>
          <TextLink onPress={() => navigation.navigate('Profile')}>Edita tu información aquí</TextLink>
        </Box>

        {/* CURRICULUM */}
        <Box paddingHorizontal={0} paddingBottom={0}>
          <View style={[stylesCardCv.inLine]}>
            <Text marginBottom={5} size="big" fontWeight="semibold" color={colors.darkText}>Curriculum *</Text>
            <Checkbox
              label="¿Deseas que tu curriculum sea público?"
              value={isCvPublic}
              type="secondary"
              onChangeValue={(value) => { setIsCvPublic(value); }} />
          </View>
          <View style={[{ paddingHorizontal: paddingApp / 2 }]}>
            {infoUser.documents.curriculum.map((item, i) => (
              <ItemCv key={i} item={item} />
            ))}
            <Button size="medium" type="gray" marginTop={20}>Desde drive</Button>
            <Button size="medium" type="gray" marginTop={10}>Desde dropbox</Button>
            <Button size="medium" type="danger" marginTop={10}>Subir desde tu equipo</Button>
          </View>
        </Box>

        {/* CARTA PRESENTACION  */}
        <Box paddingHorizontal={0}>
          <Text marginBottom={5} size="big" fontWeight="semibold" color={colors.darkText}>Carta de Presentación</Text>

          <View style={[{ paddingHorizontal: paddingApp / 2 }]}>
            {infoUser.documents.cartaPresent.map((item, i) => (
              <ItemCv key={i} item={item} />
            ))}
            <Button size="medium" type="gray" marginTop={20}>Desde drive</Button>
            <Button size="medium" type="gray" marginTop={10}>Desde dropbox</Button>
            <Button size="medium" type="danger" marginTop={10}>Subir desde tu equipo</Button>
            <Text size="xSmall" marginTop={15}>Puedes subir un archivo de tipo .doc, .docx, .pdf, .txt (2mb max.) </Text>
          </View>
        </Box>

        {/* APLICAR */}

        <Button marginBottom={50}>Aplicar</Button>



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

export default Apply;
