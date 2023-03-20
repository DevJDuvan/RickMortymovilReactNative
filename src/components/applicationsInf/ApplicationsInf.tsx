import React from 'react';
import { View, Image } from 'react-native';
import { Text, Badge, Icon, Button, Steps } from '../../components';
import { theme } from '../../theme';
const { colors } = theme;
interface Data {
  DataApplications: {
    img?: any | string,
    labelNameJob: string
    labelNameEntity?: string,
    dataApplication?: string,
    statusAppliations?: number
  },
  dataInfo: {
    stepActually?: number,
  },

}
type ApplicationsInfprops = {
  data?: Data
  onPress?: () => void

};
const ApplicationsInf: React.FC<ApplicationsInfprops> = ({ data, onPress }) => {
  return (
    <View style={{ borderBottomColor: '#D9D9D9', borderBottomWidth: 2, paddingBottom: 8,marginBottom:8 }} >
      <View style={{ flexDirection: 'row' }}>

        <Image style={{ height: 45, width: 45, marginTop: 5 }} source={{ uri: data?.DataApplications.img }} ></Image>
        <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 6 }}>
          <Text size='small' textTransform='uppercase' color="#525252">{data?.DataApplications.labelNameJob}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch' }}><Text size='xSmall' color='#000000'>{data?.DataApplications.labelNameEntity} <Badge label='A' color={'#D96098'}></Badge></Text><Button  type='primary' height={18} width={78} ><Text textTransform='uppercase' color='white' size='xxSmall'>Seguir</Text></Button></View>
          <Text size="xSmall" onPress={onPress} color='#000000'>aplicado: <Text size='xSmall' color={colors.darkText}>{data?.DataApplications.dataApplication}</Text></Text>
        </View>

      </View>
      <View style={{ flexDirection: 'row', marginBottom: 4 }}>
        <Text textAlign='left' size='xSmall' color={data?.DataApplications.statusAppliations === 0 ? '#0C8F09' : 'red'} style={{ flex: 1 }}>
          {data?.DataApplications.statusAppliations === 0 ?
            'publicacion en vigencia' : 'publicacion cerrada'}
        </Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'stretch' }}>
          <Text size='xSmall' color= '#979797' >
           
              'Actividad del videojob' 
          </Text>
          <Icon size={17} color='#979797' name='chevron-down'></Icon>
        </View>
      </View>
      {data?.DataApplications.statusAppliations === 0 ? <Steps step={3} totalSteps={4}></Steps> : undefined}
    </View>

  );
};

export default ApplicationsInf;
