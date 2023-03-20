import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles'
import { theme } from '../../theme';
import { Box } from '../../containers';
import { ScrollView } from 'react-native';
import {
  Ribbon,
  ItemNotification,
  Icon,
  Button,
  Text
} from '../../components';
const Notification = () => {
  const [tp, settp] = useState(0)
  const [data, setdata] = useState([
    {
      company: {
        img: 'https://img.lovepik.com/free-png/20211225/lovepik-head-portrait-png-image_400320827_wh860.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',

      }
    },
    {
      company: {
        img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
    {
      company: {
        img: 'https://img.lovepik.com/free-png/20211225/lovepik-head-portrait-png-image_400320827_wh860.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
    {
      company: {
        img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
    {
      company: {
        img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
    {
      company: {
        img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
    {
      company: {
        img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
    {
      company: {
        img: 'https://img.lovepik.com/free-png/20211225/lovepik-head-portrait-png-image_400320827_wh860.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
    {
      company: {
        img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
    {
      company: {
        img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
    {
      company: {
        img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
    {
      company: {
        img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        username: 'Microsoft',
      },
      dataNotification: {
        typeNotificacion: 'Te siguieron',
        text1: 'Desarrollador web- ha empezado a seguirte',
        text2: 'crea mas contenido para tus seguidores',
      }
    },
  
  ])
const { colors } = theme;
return (
  <View>
    <Ribbon  leftComponent={<Icon color='#000000' name='chevron-left' />} backgroundColor={colors.secondary} titleColor='#000000' title='Notificaciones' ></Ribbon>
      <View style={{borderTopColor:'#CCCCCC',borderTopWidth:2,paddingBottom:120}}>
      <ScrollView>
      <Box marginTop={-20} bg={colors.secondary}>
        {data.map((element, index) => {
          return (
            <ItemNotification key={index}
              labeltipodenotifiacion={element.dataNotification.typeNotificacion}
              imgs={{ uri: element.company.img }}
              labelnombreusuario={element.company.username}
              labeldescription={element.dataNotification.text1}
              labelotro={element.dataNotification.text2}
              ButtonLeft={<Button size='small' outline  height={18}  type='primary'>perfil</Button>}
              ButtonRight={<Button size='small' outline  height={18} type='primary'>publicacion</Button>}
            ></ItemNotification>
          );
       
        })}
          </Box>
      </ScrollView>
      </View>
  

  </View>
);
};

export default Notification;
