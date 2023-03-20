import React, {createContext, useState, useContext} from 'react';

 interface Data {
    uuid: String,
    name: string,
    lastName: string,
    email: String,
    password:string,
    gender: String,
    phone: String,
    birthday:String,
    username:String,
    country:String,
    province: String,
    city: string,
    preferences:any,
    salary: Number,
    summary:String,
    links: any,
    titular: String,
    video: String,
    photo: String,
    social_netwoeks:any,
    experience: any,
    skills:any,
    langueges:any,
    followers:any,
    followed:any,
    views: any

}
interface Context {
  isAuthenticated: boolean;
  signing: () => void;
  dataUser: Data | any;
  saveData: (Data: Data) => void;
  deletDataUser: () => void;
}


const AuthContext = createContext<Context>({} as Context);

export const AuthProvider: React.FC<{children: JSX.Element}> = ({children}) => {
  const [auth, setAuth] = useState(false);
  const [dataUser, setDataUser] = React.useState<Data>()

  const signing = () => {
    setAuth(true);
  };
  const saveData = (Data: Data) => {
    setDataUser(Data)
    console.log(dataUser)
 
  }
  const deletDataUser = () =>{
  }
  return (
    <AuthContext.Provider value={{dataUser , isAuthenticated: auth, signing,saveData,deletDataUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
