
import React from 'react';
import { useState,useEffect } from 'react';
import {
  ImageBackground,
  Image,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  Text, Icon, Button, SeccionEdit, Selector, TextLink,Ribbon, ItemExprerience, PrevViewVideo,
  Steps
} from '../../components';
import { Box} from '../../containers';
import { theme } from '../../theme';
const { colors } = theme;
import { styles } from './styles';
import Dropdown from '../../components/select/Select';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {SectionApplications} from  '../account/sectionApplications'
const Tab = createMaterialTopTabNavigator();

const image = {
  uri: 'https://previews.123rf.com/images/ammentorp/ammentorp1704/ammentorp170400250/77014787-mujer-haciendo-un-video-para-su-blog-sobre-cosm%C3%A9ticos-joven-con-art%C3%ADculos-cosm%C3%A9ticos-en-la-tabla-de-.jpg',
};
interface Preferences {
  id: number;
  name: string;
}
function ProfileScreen() {
  const [preferencesSelect, setPreferencesSelect] = useState<Array<Preferences>>([]);
  const [datas, setdatas] = useState([
    {
      id: 1,
      name: 'formacion',

    }, {
      id: 2,
      name: 'tomas',

    },
    {
      id: 3,
      name: 'mecatronica',
    },
    {
      id: 4,
      name: 'maquinaria',
    },
    {
      id: 5,
      name: 'formacion',

    }]);
  const [dataUser, setDataUser] = useState([
    {
      'user': {
        'name': 'Wanderley Rodriguez',
        'pronombre': '@Wanderley',
        'email': 'staff.aprilive@yopmail.com',
        'typeAccount': 2,
      },
    }]);
  const [data, setdata] = useState([
    {
      DataExperience: {
        img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        labelNameEntity: 'Microsoft',
      },
      dataInfo: {
        labelOccupation: 'Desarrollador',
        labelDataStart: 'octubre de 2020',
        labelDataEnd: 'actualidadd',
      },
      Presentacion: {
       slogan: 'Puedes agregar tu mision,eslogan,lema, una breve presentacion o tu frase favorita.',
        Ubicacion: 'Tulua-valle del cauca'
      },

      socials: [

      ],
    },
  ]);

  let Data = {
    dataUser:{
      nombre:'string',
      apelidos:'sttring',
      nombreUsuario:'string',
      foto:'string',
      urlperfil:'string',
      type_cuenta:'numero enrtre 0o 1',
      videoPortada:'',
      segudores:23,
      segidos:32,
      otros:50,
     
    
        dataTitular: {
          Tituloprofesional:{ slogan: true, value: 'string'},
          Email:{bolean:true,value:'string'},
          Phone:{bolean:true,value:'string'},
          Sexo:{bolean:true,value:'string'},
          Ubicacion:{bolean:true,value:'string'},
          Fecha_nacimiento:{bolean:true,value:'string'},
          Pretención_salarial:{bolean:true,value:'string'},
          resumen:'string'
        },
        Preferencias:[
          {id:1,value:'string'},
          {id:1,value:'string'},
        ],
    
    socials: [
      {
        icon: 'string',
        url: 'string'
      },
    ],
    socialsotras: [
      {
        icon: 'string',
        url: 'string'
      }
    ],
        DataExperiencia:[
          {
            DataExperience: {
              img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
              labelNameEntity: 'Microsoft',
            },
            dataInfo: {
              labelOccupation: 'Desarrollador',
              labelDataStart: 'octubre de 2020',
              labelDataEnd: 'actualidadd',
            },
            
          },
        
        ],
        DataEducacion:[
          {
            DataEducacion: {
              img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
              labelNameEntity: 'Microsoft',
            },
            dataInfo: {
              Title: 'Desarrollador',
              labelDataStart: 'octubre de 2020',
              labelDataEnd: 'actualidadd',
            },
            
          },
        ]
    },
  } 
  const [typeProfile, setTypeProfile] = useState(1);
  const [selected, setSelected] = useState(undefined);
  const datass = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: 'white', paddingBottom: 10 }}>
      <View style={styles.ContainerVideoUser}>
        <ImageBackground
          style={styles.container}
          source={image}
          resizeMode="cover">
          <Pressable style={styles.PresableButtonPlay} onPress={() => { }}>
            <Image source={require('../../assets/img/imgPorfilevideoplay.png')} />
          </Pressable>
          {/* <Avatar rounded position='relative' size='big' top={150} left={137} img={imageProfile}></Avatar> */}
        </ImageBackground>
      </View>
      <View style={{ alignItems: 'center', marginTop: -100 }}>
        <Pressable onPress={() => { }}>
          <Image style={styles.stretch} source={require('../../assets/img/pngwing.com.png')} />
        </Pressable>
        <Text color={colors.darkText}>{dataUser[0].user.name}</Text>
        <Text size="small" color={colors.gray}>{dataUser[0].user.pronombre}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextLink textAlign="center" fontWeight="semibold" underlineHide size="xxSmall"
            color={colors.primary}>Comparte tu perfil</TextLink><Icon size={16} color={colors.primary} name="share" />
        </View>
      </View>
      <View >
        <View style={styles.ContainerFollowersUser}>
          <View>
            <Text
              color={colors.darkText}
              textAlign="center"
              fontWeight="bold"
              size="normal">
              240
            </Text>
            <Text
              color={colors.gray}
              textAlign="center"
              fontWeight="normal"
              size="xSmall">
              SIGUIENDO
            </Text>
          </View>
          <View >
            <Text
              color={colors.darkText}
              textAlign="center"
              fontWeight="bold"
              size="normal">
              240
            </Text>
            <Text
              color={colors.gray}
              textAlign="center"
              fontWeight="normal"
              size="xSmall">
              SIGUIENDO
            </Text>
          </View>
          <View>
            <Text
              color={colors.darkText}
              textAlign="center"
              fontWeight="bold"
              size="small">
              240
            </Text>
            <Text
              color={colors.gray}
              textAlign="center"
              fontWeight="normal"
              size="xSmall">
              Vistas
            </Text>
          </View>
        </View>
        <View style={styles.containerButtons}>
          <Button marginHorizontal={18} flex={1} type="primary" >{typeProfile === 1 ? 'Editar perfil' : 'Seguir'}</Button>
          {/* buton de pabel*/}
          {typeProfile === 1 ? <View style={{ marginRight: 14, height: 45, width: 45, borderRadius: 50, backgroundColor: colors.primary }} /> :
            <Button marginHorizontal={18} flex={1} type="primary">Contactar</Button>
          }
        </View>
        <View style={styles.containerSeccionEdit} />
        {data[0].Presentacion ?
          <SeccionEdit title="Presentacion">
            <Text marginBottom={8} >{data[0].Presentacion.slogan}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}><Icon name="earth" marginRight={2} color={colors.primary} /><TextLink marginBottom={6} size="small" fontWeight="semibold" underlineHide color={colors.primary}>https://www.microsoftsytemcompany.com/</TextLink></View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}><Icon alignItems="center" name="map-marker-outline" marginRight={2} color={colors.primary} /><Text size="small" fontWeight="semibold" color="#666666">Sede principal: </Text><Text fontWeight="normal" size="small">{data[0].Presentacion.Ubicacion}</Text></View>
            <View style={{ flexDirection: 'row', marginVertical: 8 }}>
              <Pressable><Image style={{ resizeMode: 'stretch', marginRight: 7 }} source={require('../../assets/img/logo-face-2.png')} /></Pressable>
              <Pressable><Image style={{ resizeMode: 'stretch' }} source={require('../../assets/img/logo-instagram.png')} /></Pressable>
            </View>

          </SeccionEdit>
          : undefined

        }
        <View style={{ width: '100%', borderWidth: 2, borderColor: '#C0C0C0', marginTop: 8 }} />
        <SeccionEdit title="AREA DE INFIRMACION PROFESIONAL">
          <Text size="small"><Text fontWeight="semibold" size="small">Titulo profesional:</Text>INGENIERO</Text>
          <Text size="small"><Text fontWeight="semibold" size="small">E-mail:</Text> wanderley@gmail.com</Text>
          <Text size="small"><Text fontWeight="semibold" size="small">Phone:</Text>+11 989 989 989</Text>
          <Text size="small"><Text fontWeight="semibold" size="small">Sexo:</Text> Masculino</Text>
          <Text size="small"><Text fontWeight="semibold" size="small">Ubicacion:</Text> Bogota - Colombia</Text>
          <Text size="small"><Text fontWeight="semibold" size="small">Sexo:</Text> Masculino</Text>
          <Text size="small"><Text fontWeight="semibold" size="small">Fecha nacimiento:</Text>27/10/1997</Text>
          <Text size="small"><Text fontWeight="semibold" size="small">Pretención salarial:</Text>200,000.00 a 300,000.00</Text>
        </SeccionEdit>

        <SeccionEdit onPress={() => console.log('edicion')} functionTextLabel="Editar" title="Mi resumen">
          <Text >'Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.'</Text>
        </SeccionEdit>

        <SeccionEdit title="Links">
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon alignItems="center" size={8} name="circle" marginRight={2} color={colors.primary} />
            <TextLink size="small" underlineHide color={colors.primary} >www.aprilive.com</TextLink>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon alignItems="center" size={8} name="circle" marginRight={2} color={colors.primary} />
            <TextLink fontWeight="normal" size="small" underlineHide color={colors.primary} >www.aprilive.com</TextLink>
          </View>
        </SeccionEdit>

        <SeccionEdit onPress={() => console.log('edicon')} title="Mis preferencias">
          <View style={styles.ContainerScrollView} >
            {datas.map((element, index) => {
              return (
                <Selector key={index}
                typeSelector='secondary'
                  opacity={0.6}
                  colorText="#666666"
                  paddingHorizontal={5}
                  colorbg="#D9D9D9"
                  item={element}
                  data={preferencesSelect}
                  setData={setPreferencesSelect}
                />
              );
            })}
          </View>
        </SeccionEdit>
        <SeccionEdit title="Mi experiencia" functionTextLabel={'Editar'} onPress={() => console.log('Edicon')}>
          {data.map((element, index) => {
            return (
              <ItemExprerience key={index}
                data={element}
              />
            );

          })}
        </SeccionEdit>
        <SeccionEdit onPress={() => console.log('edicon')}>
          {data.map((element, index) => {
            return (
              <ItemExprerience
                optionalFunction
                key={index}
                data={element}

              />
            );

          })}
        </SeccionEdit>
        <SeccionEdit title="Mi educacion" >
        {data.map((element, index) => {
            return (
              <ItemExprerience
                optionalFunction
                key={index}
                data={element}

              />
            );

          })}
        </SeccionEdit >
        <View >
   {/* <Dropdown label="Selecionar" data={datass} onSelect={setSelected} />*/}
       </View>
    {/* <Button onPress={()=>console.log(selected)}>selecionados</Button>*/}
      </View>

    </ScrollView>
  );
}
function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <Box flexDirection='row'>
    <PrevViewVideo size="normal" iconVideo />
    <PrevViewVideo size="normal" />
    <PrevViewVideo size="normal" />
  </Box>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarLabelStyle: { fontSize: 12},
        tabBarIndicatorStyle:{backgroundColor:colors.primary,height:'100%'},
        tabBarStyle: { backgroundColor: '#E9E9E9'},
        tabBarInactiveTintColor:'#565656',

      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Creado' }}
      />
      <Tab.Screen
        name="Feed"
        component={SectionApplications}
        options={{ tabBarLabel: 'Postulaciones' }}
      />
    </Tab.Navigator>
  );
}
const Profile = () => {

  return(
    <View style={{ flex: 1 }}>
      <Ribbon leftComponent={<Icon color='#000000' name='chevron-left' />} backgroundColor={colors.secondary} titleColor='#000000' title='Mi perfil' ></Ribbon>
      <MyTabs />
    </View>

  )
};
export default Profile;
