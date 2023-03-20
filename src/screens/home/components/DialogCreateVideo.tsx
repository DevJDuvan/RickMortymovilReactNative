import React from 'react';
import { View, Pressable } from 'react-native';
import { Icon, Text } from '../../../components';
import { Box } from '../../../containers';
import { theme } from '../../../theme';
import { marginApp } from '../../../theme/index';

const dataCreateVideo = [
  {
    label: 'Crea un Video job',
    icon: 'video-wireless',
    helpText: 'Describe brevemente tu empleo e invita a los candidatos a postularse. En este tipo de video, los usuarios podrán postularse, y se te notificará la información de tus postulantes.',
    durationMax: '40 seg.',
  },
  {
    icon: 'video-outline',
    label: 'Crea un Video',
    helpText: 'Comparte tus ideas creativas o añade contenido a tu proyecto',
    durationMax: '20 seg.',
  },
];

const { colors } = theme;
const DialogCreateVideo = () => {


  return (
    <View>
      <Text textAlign="center" fontWeight="semibold">Crear Publicación</Text>
      {dataCreateVideo.map((data) => (
        <Pressable onPress={() => console.log('CREAR VIDEO')}>
          <Box flexDirection="row" paddingHorizontal={0} paddingBottom={10}>
            <Icon size={26} name={data.icon} marginEnd={marginApp / 2} />
            <View style={{flex:1}}>
              <View style={{ flexDirection:'row', justifyContent:'space-between' }} >
                <Text>{data.label}</Text>
                <Text fontWeight="semibold">{data.durationMax}</Text>
              </View>
                <Text size="xSmall" color={colors.placeholder}>{data.helpText}</Text>
            </View>
          </Box>
        </Pressable>
      ))
      }

    </View>
  );
};

export default DialogCreateVideo;
