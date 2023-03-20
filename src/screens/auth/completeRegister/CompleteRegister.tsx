import React, { useState,useEffect } from 'react';
import { ScrollView, View,Pressable, ToastAndroid } from 'react-native';
import { styles } from './styles';
import Form from '../../../components/Form';
import Dropdown from '../../../components/select/Select';
import { Box, Card,Modal } from '../../../containers';
import DatePicker from 'react-native-date-picker'
import moment  from  'moment'
import {
  Title,
  Text,
  Ribbon,
  Input,
  Button,
  Icon,
} from '../../../components';
import { theme } from '../../../theme';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../../routes';
import {getDepartaments,getCities,getValidUsernamelExist} from '../../../services/auth/index'
import { Formik, FormikProps } from 'formik';
import { signupValidationSchema } from './validate'
import { useSignup } from '../../../context/signup/SignupContext';
const URLapri = 'https://www.aprilive.co/';
const CompleteRegister = () => {
  const navigation = useNavigation();
  const [typeUser, setTypeUser] = useState(0);
  const [data, setdata] = useState([
    {
      label1: 'Fecha Nacimiento',
      labelplaceholder1: 'dd/mm/yyyy',
      label2: 'Usuario',
      labelplaceholder2: ' Ingrese su nombre de usuario',
      hint1: 'https://www.aprivile.co/',
      Titleubicacion: 'Ubicacion',
      label3: 'Pais',
      labelplaceholder3: 'Ingrese su pais',
      label4: 'Provincia o estado',
      labelplaceholder4: 'ingrese su estado',
      label5: 'Ciudad',
      labelplaceholder5: 'ingrese su ciudad',
      titlecontacto: 'Contacto',
      labelindicativo: 'Cod',
      labelplaceholderindicativo: '+ 57',
      labeltelefono: 'Telefono',
      labelplaceholdertelefono: '000 000 000',

    },
    {
      labeltext: 'Esta información podrá ser actualizada, posteriomente en tu perfil.',
      label1: 'Nombre Publico',
      labelplaceholder1: 'Ingrese un nombre de usuario',
      label2: 'Sitio Web',
      labelplaceholder2: 'https://www.miempresa.com',
      Titleubicacion: 'Sede central',
      label3: 'Pais',
      labelplaceholder3: 'Ingrese su pais',
      label4: 'Provincia o estado',
      labelplaceholder4: 'ingrese su estado',
      label5: 'Ciudad',
      labelplaceholder5: 'ingrese su ciudad',
      labeltelefono: 'Telefono',
      labelplaceholdertelefono: '000 000 000',
    },
  ]);
  // hooks para la fechas
  const [date, setDate] = useState(new Date())
  const [ModalStatus,setModalStatus] = useState(false)
  // const navigation = useNavigation();
  const { colors } = theme;
  const {dataApiRegister,dataSignupRegister} = useSignup();
  // data de la api para listado de paises
  const [selectedCountry, setCountrySelected] = useState({"id":0,"name":"indefinido"});
  const [selectedProvincia, setProvinciaSelected] = useState({"id":0,"name":"indefinido"});
  const dataSelectCountries = dataApiRegister.countries;
  const [dataProvincias, setDataProvincias] = useState({"id":0,"name":"indefinido"});
  const [dataCities, setDataCities] = useState({"id":0,"name":"indefinido"});
  const [selectedCity, setCitySelected] = useState({"id":0,"name":"indefinido"});
  const [dataIndicatives, setDataIndicatives] = useState([{"id":0,"name":"indefinido"}]);
  const [selectIndicativo,setSelectedIndicativo] = useState({name:'00'}) 
  const [userNamebolean, setuserNamebolean,] = useState(false);
  function buscar(id: any) {
    let n = 0
    while (id != dataApiRegister.countries[n].id) {
      console.log('funciona');
      n++
    }
    return [{
      id: 0,
      name: dataApiRegister.countries[n].indicative
    }];
  }
   // FUNCTION THAT CALL API FOR KNOW IF THE username IS DISPONIBLE
   const validUsername = async (email:string) => {
    const data = await getValidUsernamelExist(email)
    if (data.error === 0) {
      console.log(data)
      setuserNamebolean(false)
      return true
    } else { console.log(data)
      setuserNamebolean(true)
    
    };
  }
  // call api,get Departaments
  useEffect(() => {
    const dataProvincias = async () => {
      const data = await getDepartaments(selectedCountry.id)
      if (data.error === 0) {
        console.log(data.name)
        setDataProvincias(data.data)
        console.log('lllll')
      setDataIndicatives(buscar(selectedCountry.id))
      } else { console.log(data) };
    }
    dataProvincias();
  }, [selectedCountry])
  // call api,get cities when the countyr is selected
  useEffect(() => {
    const dataCities = async () => {
      const data = await getCities(selectedProvincia.id)
      if (data.error === 0)
        console.log(data.name)
      setDataCities(data.data)
    };
    dataCities();
  }, [selectedProvincia])

  interface FormValues {
    UserName: string,
    Web: string,
    Phone: string,
 }
          const values = {
            UserName: '',
            Web:'',
            Phone: '',
          }
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <ScrollView>
        <Ribbon backDefault={false} rightComponent={<><View style={{ flexDirection: 'row' }}><Text textAlign="center" color="white">Continuar mas tarde</Text><Icon style={{ justifyContent: 'center' }} color="white" name="chevron-right" /></View></>} />
        <Box bg={colors.primary} >
          <Title color="white" bold marginBottom={0} marginTop={0}>Completa tu registro</Title>
          <Text textAlign="left" color="white" opacity={0.5}>
            Por favor completa tu información, recuerda esta información es muy importante, ya que, nos permitirá conocerte mejor y mostrarte las  mejores oferta que se adecuen a tus preferencias.
          </Text>
        </Box>

        <Card sticky="bottom">
        <Formik
          validationSchema={signupValidationSchema}
          initialValues={values}
          onSubmit={(val) =>{ console.log(val)
            if(typeUser===0){
              dataSignupRegister.user.username=val.UserName;
              dataSignupRegister.user.typeAccount=2;
              dataSignupRegister.userData.countrieId=selectedCountry.id;
              dataSignupRegister.userData.departmentId=selectedProvincia.id;
             dataSignupRegister.userData.phone=val.Phone;  
           dataSignupRegister.userData.birthday= moment(date).format('L')
             navigation.navigate(routes.preferences)    
          }
           }
           }>
          {(props: FormikProps<FormValues>) => (
          <Form>
            {typeUser === 0 ? 
            <>
             <Button  onPress={() => console.log(moment(date).format('L'))}>open</Button>
             <Modal visible={ModalStatus} onRequestClose={()=>setModalStatus(false)}>
             <DatePicker 
             locale='es'
             mode='date'
             onConfirm={(date) => {
              setModalStatus(false)
              setDate(date)
            }}
            onCancel={() => {
              setModalStatus(false)
            }}
             date={date} onDateChange={setDate} />
             </Modal>
            <Text textAlign="left" size="xSmall">{data[typeUser].labeltext}</Text>
            <Pressable onPress={()=>setModalStatus(true)}>
            <Input label={data[typeUser].label1} placeholder={moment(date).format('L')} 
            />
            </Pressable>
            <Input label={data[typeUser].label2} placeholder={data[typeUser].labelplaceholder2}
               onChangeText={props.handleChange('UserName')}
               
               onBlur={props.handleBlur('UserName')}
               value={props.values.UserName}
              hint={<><View style={[styles.StylesHint]}><Text size="xSmall">{URLapri}
                <Text size="xSmall"
                  color={colors.primary}>
                  orlando/empresa</Text>
              </Text>
                <Text size="xSmall">0/25</Text></View></>
              }
            />
             {props.errors.UserName && props.touched.UserName? 
        <Text size='xxSmall' color='red' marginTop={-4}>{props.errors.UserName}</Text>
        :userNamebolean?<Text size='xxSmall' color='red' marginTop={-6}>email not disponible</Text>: <></>}
            </>
            :<>
            <Input label={data[typeUser].label1} placeholder={data[typeUser].labelplaceholder1}
               onChangeText={props.handleChange('UserName')}
               onBlur={props.handleBlur('UserName')}
               value={props.values.UserName}
              hint={<><View style={[styles.StylesHint]}><Text size="xSmall">{URLapri}
                <Text size="xSmall"
                  color={colors.primary}>
                  orlando/empresa</Text>
              </Text>
                <Text size="xSmall">0/25</Text></View></>
              }
            />
            {props.errors.UserName && props.touched.UserName? 
        <Text size='xxSmall' color='red' marginTop={-4}>{props.errors.UserName}</Text>
       : <></>}
             <Input label={data[typeUser].label2} placeholder={data[typeUser].labelplaceholder2}
               onChangeText={props.handleChange('Web')}
               onBlur={props.handleBlur('Web')}
               value={props.values.Web}
              hint={<><View style={[styles.StylesHint]}><Text size="xSmall">{URLapri}
                <Text size="xSmall"
                  color={colors.primary}>
                  orlando/empresa</Text>
              </Text>
                <Text size="xSmall">0/25</Text></View></>
              }
            />
             {props.errors.Web && props.touched.Web? 
        <Text size='xxSmall' color='red' marginTop={-4}>{props.errors.Web}</Text>
       : <></>}
            
            </>}          
            <Text size="xSmall">{data[typeUser].Titleubicacion}</Text>
           <Dropdown label="Pais*" data={dataSelectCountries} onSelect={setCountrySelected} />
            <Dropdown label="Provincia o estado*" data={dataProvincias} onSelect={setProvinciaSelected} />
            <Dropdown label="Ciudad*" data={dataCities} onSelect={setCitySelected} />
            {/*<Input label={data[typeUser].label5} placeholder={data[typeUser].labelplaceholder5} />*/}
            <Text size="xSmall">Contacto</Text>
            {typeUser === 0 ? <View style={{ flexDirection: 'row' }}>
              <View style={{ marginRight: '5%', flex: 0.3 }}>
              <Dropdown label="Cod*"  data={dataIndicatives} onSelect={setCitySelected} />
               {/* <Input label="Cod*" placeholder="+ 57" />*/}
              </View>
              <View style={{ flex: 1 }}>
                <Input label="Telefono*" placeholder="000 000 000" 
                 onChangeText={props.handleChange('Phone')}
                 onBlur={props.handleBlur('Phone')}
                 value={props.values.Phone}
                 />
                   {props.errors.Phone && props.touched.Phone? 
                     <Text size='xxSmall' color='red' marginTop={-4}>{props.errors.Phone}</Text>
       : <></>}
                 </View>
                  
            </View> :
              <View><Input label="Telefono*" placeholder="000 000 000" 
              onChangeText={props.handleChange('Phone')}
              onBlur={props.handleBlur('UserName')}
              value={props.values.Phone}/>
                {props.errors.Phone && props.touched.Phone? 
        <Text size='xxSmall' color='red' marginTop={-4}>{props.errors.Phone}</Text>
       : <></>}
              </View>
              
            }
           <Button type="primary" disabled={!props.isValid} onPress={() =>{
       if (selectedCountry.name!='indefinido'&&selectedProvincia.name!='indefinido'&&selectedCity.name!='indefinido'){
      props.handleSubmit()
      }
      else{ ToastAndroid.show('complete todos los campos por favor', ToastAndroid.SHORT)}
          }}>Siguiente</Button>
           <Button type="primary" onPress={async () => { 
      
      console.log(dataSignupRegister.user)
      }}>show</Button>

          </Form>
          
           )}

           </Formik>
         
        </Card>
      </ScrollView>
    </View>
  );
};

export default CompleteRegister;
