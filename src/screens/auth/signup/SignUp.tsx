import React, { useState } from 'react';
import {
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import { Box, Card } from '../../../containers';
import { Button, Input, Separator, Text, TextLink, Title, Ribbon, Checkbox } from '../../../components';
import Dropdown from '../../../components/select/Select';
import { theme } from '../../../theme';
import { stylesSignup } from './styles';
import {useNavigation } from '@react-navigation/native';
import { routes } from '../../../routes';
import Form from '../../../components/Form';
import { Formik, FormikProps } from 'formik';
import { signupValidationSchema } from './validate'
import {getValidEmailExist} from '../../../services/auth/index'
const logoFb = require('../../../assets/img/logo-fb.png');
const logoGoogle = require('../../../assets/img/logo-google.png');
const { colors } = theme;
import { useSignup } from '../../../context/signup/SignupContext'

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [emailBoleano, setemailBolean] = useState(true);
  const [typeUser, setTypeUser] = useState(0);
  const {dataSignupRegister,dataApiRegister} = useSignup();
  const [selected, setSelected] = useState({"id":4,"name":"indefinido"});
  const dataSelectGender = dataApiRegister.genders;
  const [data, setdata] = useState([
    {
      label1: 'Nombres*',
      labelplaceholder1: 'Ingrese sus nombres',
      label2: 'Apellidos*',
      labelplaceholder2: ' Ingrese sus apelidos',
      hintMaxcaracter: '0/15',
      label3: 'Email*',
      labelplaceholder3: 'Email@gmail.com',
      label4: 'Password*',
      labelplaceholder4: '....................',
      label5: 'Confirm Password',
      labelplaceholder5: '....................',
    },
    {
      label1: 'Nombre Empresa*',
      labelplaceholder1: 'Empresa / startup / marca u organización',
      label2: 'Email',
      labelplaceholder2: 'email@gmail.com',
      label4: 'Password*',
      labelplaceholder4: '....................',
      label5: 'Confirm Password',
      labelplaceholder5: '....................',

    },
  ]);
  // FUNCTION THAT CALL API FOR KNOW IF THE EMAIL IS DISPONIBLE
  const validEmail = async (email:string) => {
    const data = await getValidEmailExist(email)
    if (data.error === 0) {
      console.log(data)
      setemailBolean(true)
      return true
    } else { console.log(data)
      setemailBolean(false)
    
    };
  }
  interface FormValues {
    names: string,
    surname: string,
    email: string,
    password: string,
    repetPassword: string,
  }
  const values = {
    names: '',
    surname: '',
    email:'',
    password: '',
    repetPassword: '',
  }
  
  return (
    <View style={[stylesSignup.container, { backgroundColor: colors.primary }]}>
      <Ribbon />
      <ScrollView>
        <Box bg={colors.primary}>
          <Title color="white" bold marginBottom={0} marginTop={0}>Welcome</Title>
          <Text color="white" opacity={0.5}>
            Sign up to continue
          </Text>
        </Box>
        <Card sticky="bottom">
        <Formik
          validationSchema={signupValidationSchema}
          initialValues={values}
          onSubmit={(val) =>{ console.log(val)
            if(typeUser===0){
              dataSignupRegister.userData.names=val.names;
              dataSignupRegister.userData.lastnames=val.surname;
              dataSignupRegister.user.email=val.email;
              dataSignupRegister.user.password=val.password
              dataSignupRegister.user.confirPassword=val.repetPassword
              dataSignupRegister.user.typeAccount=2
              dataSignupRegister.userData.genderId= selected.id//parseInt(selected.value)   
              navigation.navigate(routes.completeRegister)     
          }}
           }>
          {(props: FormikProps<FormValues>) => (
            <Form>
          <Input label={data[typeUser].label1}
            placeholder={data[typeUser].labelplaceholder1}
            hintAlign="right"
            onChangeText={props.handleChange('names')}
            onBlur={props.handleBlur('names')}
            value={props.values.names}
            hint={<Text textAlign="right" size="xSmall">0/25</Text>}
          />
          {props.errors.names && props.touched.names? 
        <Text size='xxSmall' color='red' marginTop={-18}>{props.errors.names}</Text>
       : <></>}
          {typeUser === 0 ?
           <><Input label={data[typeUser].label2}
          placeholder={data[typeUser].labelplaceholder2}
           hintAlign="right"
          onChangeText={props.handleChange('surname')}
          onChange={()=>{console.log('jhj')}}
          onBlur={props.handleBlur('surname')}
          value={props.values.surname}
           hint={<Text textAlign="right" size="xSmall">0/25</Text>}
          />
      {props.errors.surname && props.touched.surname? 
        <Text size='xxSmall' color='red' marginTop={-18}>{props.errors.surname}</Text>
       : <></>}
         <Dropdown label="Gender*" data={dataSelectGender} onSelect={setSelected} />
            </>:<></>
            }
            <Input label="Correo*"
              placeholder="Email@gmail.com"
              onChangeText={props.handleChange('email')}
              onChange={()=>{console.log(validEmail(props.values.email))}}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
            />
                   {props.errors.email && props.touched.email? 
        <Text size='xxSmall' color='red' marginTop={-6}>{props.errors.email}</Text>
       :!emailBoleano?<Text size='xxSmall' color='red' marginTop={-6}> not disponible</Text>: <></>}
          <Input label="Contraseña*"
            type="password"
            onChangeText={props.handleChange('password')}
            onBlur={props.handleBlur('password')}
            value={props.values.password}
          />
           {props.errors.password && props.touched.password? 
        <Text size='xxSmall' color='red' marginTop={-4}>{props.errors.password}</Text>
       : <></>}
          <Input label="Confirmar contraseña*"
            onChangeText={props.handleChange('repetPassword')}
            onBlur={props.handleBlur('repetPassword')}
            value={props.values.repetPassword}
            type="password"
          />
            {props.errors.repetPassword && props.touched.repetPassword? 
        <Text size='xxSmall' color='red' marginTop={-4}>{props.errors.repetPassword}</Text>
       : <></>}
       
          <Box justifyContent="center" paddingHorizontal={0} alignItems="center" flexDirection="row">
            <Checkbox
              value={acceptTerm}
              type="secondary"
              onChangeValue={(value) => { setAcceptTerm(value); }}
              label={<Text size="small" color="#667372" >I  accept the
                <TextLink color={colors.primary}
                  fontWeight="semibold"
                  underlineHide
                  onPress={() => console.log('terminos')}
                  size="small" >Terms of use</TextLink> y
                <TextLink color={colors.primary}
                  fontWeight="semibold"
                  underlineHide
                  onPress={() => console.log('politicas')}
                  size="small"> Privacy Policy</TextLink></Text>}
            />

          </Box>
          <Button disabled={!props.isValid} onPress={()=>{if(acceptTerm&&emailBoleano){
            console.log(acceptTerm)
           props.handleSubmit()
          }
        else{console.log('falta algo') ;  console.log(acceptTerm);console.log(emailBoleano)}
        }} type="primary" >sign up</Button>
          <Button onPress={()=>console.log(props.isValid)} type="primary" >data</Button>
          </Form>
          )}

          </Formik>
          <Separator marginVertical={30}>Or</Separator>

          <Box flexDirection="row" justifyContent="center" marginBottom={50}>
            <Pressable onPress={() => { console.log('LOGIN CON FB'); }} style={{ marginRight: 15 }}>
              <Image source={logoFb} />
            </Pressable>
            <Pressable onPress={() => { console.log('LOGIN CON GOOGLE'); }}>
              <Image source={logoGoogle} />
            </Pressable>
          </Box>
          <Text textAlign="center">haven an account?{' '}
            <TextLink
              size="normal"
              underlineHide
              fontWeight="semibold"
              color={colors.primary}
              >
              Sign In
            </TextLink>
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
};


export default SignUp;
