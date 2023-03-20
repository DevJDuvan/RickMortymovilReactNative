import React, { useState } from 'react';
import { View, Image, Pressable,ToastAndroid } from 'react-native';
import { styles } from './styles';
import Form from '../../../components/Form';
import { useNavigation } from '@react-navigation/native';
import { Box, Card, Modal } from '../../../containers';
import {signin,GetDataUserSignin} from '../../../services/auth';
import EncryptedStorage from 'react-native-encrypted-storage';
import {Tabs} from '../../../routes/index'
import {
  Button,
  Separator,
  Input,
  Title,
  Text,
  TextLink,
  Ribbon,
  Checkbox,
} from '../../../components';
import { theme } from '../../../theme';
import { useAuth } from '../../../context/auth';
import { routes } from '../../../routes';
import { Formik, FormikProps } from 'formik';
import { loginValidationSchema } from './validate';
const logoFb = require('../../../assets/img/logo-fb.png');
const logoGoogle = require('../../../assets/img/logo-google.png');
async function storeUserSession(Token:any) {
  try {
      await EncryptedStorage.setItem(
          "user_TEncryption",
          JSON.stringify({
              token : Token,  
          })
      );

      // Congrats! You've just stored your first value!
  } catch (error) {
      // There was an error on the native side
  }
}
const SignIn = () => {
  const { signing,saveData,isAuthenticated,dataUser } = useAuth();
  const navigation = useNavigation();
 
  const [modalVisible, setModalVisible] = useState(false);
  const [rememberLogin, setRememberLogin] = useState(false);
  const { colors } = theme;
  interface FormValues {
    username: string,
    password: string
  }
  const values = {
    username: '',
    password: ''
  }
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Ribbon />
      <Box bg={colors.primary} paddingBottom={40}>
        <Title color="white" bold marginBottom={0} marginTop={0}>Welcome back,</Title>
        <Text color="white" opacity={0.5}>
          Sign in to continue
        </Text>
      </Box>

      <Card sticky="bottom">
      <Formik
          validationSchema={loginValidationSchema}
          initialValues={values}
          onSubmit={ async (val) => {
            console.log('entro')
          const resp = await signin(val);
          if(resp.token){
            storeUserSession(resp.token);
            signing;
            ToastAndroid.show('sesion iniciada', ToastAndroid.SHORT);
          const respDataUser = await GetDataUserSignin({uuid:'0c160ae0-9794-45bb-8c29-fd24d8d63920'});
          console.log('first'+JSON.stringify(respDataUser))
          //  saveData(respDataUser) 
            navigation.navigate('profile')
          }
          else{
            ToastAndroid.show('Tenemos problemas,intentalo nuevamente', ToastAndroid.SHORT); 
         console.log('mal'+JSON.stringify(resp)) 
          }
         
          }
          }>
          {(props: FormikProps<FormValues>) => (
        <Form
        //  {...{register, setValue, errors}}
        >
          <Input
         label="Email o Celular"
         placeholder="Email@gmail.com"
         onChangeText={props.handleChange('username')}
         onBlur={props.handleBlur('username')}
         value={props.values.username}
         keyboardType="email-address"
          />
          <Text> {(props.errors.username && props.touched.username) &&
                <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.username}</Text>
              }</Text>
          <Input
              label="Password"
              type="password"
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
          />
          <TextLink
            color={colors.primary}
            fontWeight="semibold"
            underlineHide
            textAlign="right"
            onPress={() => console.log(dataUser)}
            size="small">Forgot Password?</TextLink>
          <Box paddingHorizontal={0} marginTop={20} alignItems="center" flexDirection="row">
            <Checkbox
              value={rememberLogin}
              type="secondary"
              labelColor={colors.text}
              label="Remember me and keep me logged in"
              onChangeValue={(value) => { setRememberLogin(value); }} />
          </Box>
          <Button  type="primary" onPress={() => props.handleSubmit()}>
            Sign In
          </Button>
        </Form>
 )}

 </Formik>

        <Separator marginVertical={30}>Or</Separator>
        {/* LOGIN FB AND GOOGLE */}
        <Box style={{ flexDirection: 'row', justifyContent: 'center' }} marginBottom={50}>
          <Pressable onPress={() => { setModalVisible(true); }} style={{ marginRight: 15 }}>
            <Image source={logoFb} />
          </Pressable>
          <Pressable onPress={() => { console.log('LOGIN CON GOOGLE'); }}>
            <Image source={logoGoogle} />
          </Pressable>
        </Box>

        <Text textAlign="center"> Don't haven an account?{' '}
          <TextLink
            size="normal"
            underlineHide
            fontWeight="semibold"
            color={colors.primary}
            onPress={() => navigation.navigate(routes.signup)} >
            Sign Up
          </TextLink>
        </Text>
      </Card>
      <Modal
        sticky="bottom"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
         
        </View>
      </Modal>
    </View>

  );
};

export default SignIn;
