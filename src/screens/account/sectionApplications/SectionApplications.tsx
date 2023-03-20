import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
//import { styles } from './styles';
import { Box } from '../../../containers';
import {
  Ribbon,
ApplicationsInf,
  Icon,
} from '../../../components';
import { theme } from '../../../theme';

const SectionApplications = () => {
  const [data, setdata] = useState([
    {
        DataApplications: {
        img: 'https://elcomercio.pe/resizer/jNCpa33Il7p1UN9X60AXaNlsCQ8=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Z42PI3LJHRH3BLJF7SV65SDGH4.jpg',
      labelNameJob: 'DESARROLLADOR FRON-END',
      labelNameEntity :'microsoft',
        dataApplication:'03/09/2022',
        statusAppliations:0
      },
      dataInfo: {
        stepActually:1,
      },

    },
    {
      DataApplications: {
      img: 'https://elcomercio.pe/resizer/jNCpa33Il7p1UN9X60AXaNlsCQ8=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Z42PI3LJHRH3BLJF7SV65SDGH4.jpg',
    labelNameJob: 'DESARROLLADOR FRON-END',
    labelNameEntity :'microsoft',
      dataApplication:'03/09/2022',
      statusAppliations:1
    },
    dataInfo: {
      stepActually:1,
    },

  },

  ]);
  const { colors } = theme;
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      {/*<Ribbon  leftComponent={<Icon color='#000000' name='chevron-left' />} backgroundColor={colors.secondary} titleColor='#000000' title='Mi perfil' ></Ribbon>*/}
        <View style={{paddingBottom:120}}>
        <ScrollView>
        <Box marginTop={-15} bg={colors.secondary}>
          {data.map((element, index) => {
            return (
             <ApplicationsInf
             key={index}
            data={element}
             ></ApplicationsInf>
            );
         
          })}
            </Box>
        </ScrollView>
        </View>
    
  
    </View>
  );
 
};

export default SectionApplications;
