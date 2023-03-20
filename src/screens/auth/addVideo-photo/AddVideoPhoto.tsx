import React,{ useState} from 'react';
import { View, ImageBackground, Pressable} from 'react-native';
import { styles } from './styles';
import DocumentPickerOptions from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';
import { Box} from '../../../containers';
import {
  Title,
  Text,
  Ribbon,
  Button,
  Icon,
  TextLink,
} from '../../../components';
import { theme } from '../../../theme';
import {routes} from '../../.././routes';
import { useAuth } from '../../../context/auth/Auth';
var Parrafo2 = 'Agrega un video de portada de mácimo 1 minuto,para que las personas puedan asociar facilmente contigo, muestra tu cultura organizacional y lo mas relevante de tu empresa';
const AddVideoPhoto = () => {
  
  const { navigate } = useNavigation();
  const {signing} = useAuth();
   const [fileResponse, setFileResponse] = useState();
  const { colors} = theme;
 const handleDocumentSelection = async () => {
    try {
      const response = await DocumentPickerOptions.pick({
        type: [DocumentPickerOptions.types.allFiles],
        presentationStyle: 'fullScreen',
      });
     console.log(response);
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Ribbon backgroundColor="#B5B5B5" backDefault={false} rightComponent={<><TextLink underlineHide={false} onPress={()=>console.log('hjhhj')} color="white">Continuar mas tarde</TextLink><Icon color="white" name="chevron-right" /></>}  />
      <Box bg="#B5B5B5" style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Pressable onPress={() => {
        handleDocumentSelection();
        }}>
          <ImageBackground style={styles.logoVideo} source={require('../../../assets/img/Vector1.png')}>
            <Text color="#B5B5B5" textAlign="center">PRESIONA AQUI</Text>
          </ImageBackground>
        </Pressable>
      </Box>
      <ImageBackground style={styles.imageLogoPhoto}
        source={require('../../../assets/img/pngwing.com.png')}>
        <Pressable onPress={() => { console.log('photo'); }}>
          <ImageBackground
            style={styles.logoUp}
            source={require('../../../assets/img/vector.png')} />
        </Pressable>
        <Text
          size="xSmall"
          color={colors.secondary}
          textAlign="center">PRESIONA AQUI</Text>
      </ImageBackground>
      <Box style={{ flex: 1 }}>
        <View style={{ marginTop: -140, marginBottom: 16 }}>
          <Title size="small" color={colors.secondary}  >
            Microsoft System
          </Title>
          <Title color="white" bold marginBottom={0} marginTop={-12}>
            Sube tu video de portada y foto de perfil
          </Title>
          <Text color={colors.secondary} size="xSmall" opacity={0.5}>
            Agrega un video de portada,máximo 1 minuto, muestra al mundo quien eres y mas...
          </Text>
          <Text color={colors.secondary} size="xSmall" opacity={0.5}>
            {Parrafo2}
          </Text>
        </View>
        <Button onPress={signing} type="secondary">FINALIZAR REGISTRO</Button>
      </Box>
    </View>
 
  );
};

export default AddVideoPhoto;
