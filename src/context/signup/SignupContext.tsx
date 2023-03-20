import React, {createContext} from 'react';
import {TodoContextType,DataApiRegister,DataSignupRegister} from './types'

const SignupContext  = createContext<TodoContextType>({} as TodoContextType);
export const SignupProvider: React.FC<{children: JSX.Element}> = ({children})  => {
    const [dataApiRegister, setDataApiRegister] = React.useState<DataApiRegister>()
    const [dataSignupRegister, setDataSignupRegister] = React.useState<DataSignupRegister>({
      user: {
          email: "",
          password:"",
          confirPassword: "",
          typeAccount: 0,
          username:""
      },
      userData: {
          names: "",
          lastnames: "",
          phone: "",
          genderId: 0,
          countrieId: 0,
          departmentId:0
      },
      userDataOrganization: {
          name: "",
          typeOrganizationId: 0,
          phone: ""
      },
      preference: [
          {
              id: 0
          },
         
      ]
  })
  const saveDataApiRegister = (Data: DataApiRegister) => {
    setDataApiRegister(Data)
  }
  const deletDataUser = () =>{
    setDataApiRegister(undefined)
  }

  // functions for save data of register of user
  const saveDataSignupRegister = (Data: DataSignupRegister) => {
    setDataSignupRegister(Data)
  }
  return(
    <SignupContext.Provider value ={{dataApiRegister,saveDataApiRegister,deletDataUser,
    dataSignupRegister,saveDataSignupRegister}}>
        {children}
    </SignupContext.Provider>
  )
}
 
export const useSignup = () =>  React.useContext(SignupContext);