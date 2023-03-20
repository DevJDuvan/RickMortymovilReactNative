// function login
import EncryptedStorage from 'react-native-encrypted-storage';
const url = 'http://aprilive-api-v1.onrender.com/api/v1/users-signin'
const URL ='https://rickandmortyapi.com/api/'

export const signin = async (obj: any) => {
  try {
    const data = JSON.stringify(obj);
    return fetch(url, {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // request ok
      .then(resp => {
      
        return resp.json();
      })
      .then(response => {
        return response;
      })
      // request fail
      .catch(err => {
        console.log('err en request--->'+err);
        return err;
      });
  } catch (err) {
    console.log('-----' + err);
    return undefined;
  }
};
async function retrieveUserSession() {
  try { 
    const session:any =  await EncryptedStorage.getItem("user_TEncryption");  
     
      if (session !== undefined) {
    let tk =    JSON.parse(session)
 console.log('kkkkkñññññ'+tk.token)
 return tk.token
      }
      else{   console.log('kkkkkllll'+session)}
  } catch (error) {
     console.log('kkkkklll-----l')
  }
}

// obteniendo datos api
export const GetData = async () => {
  try {
    return fetch(`${URL}/character/`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // request ok
      .then(resp => {
        return resp.json();
      })
      .then(response => {
        return response;
      })
      // request fail
      .catch(err => {
        console.log('err en request--->' + err);
        return err;
      });
  } catch (err) {
    console.log('-----' + err);
    return undefined;
  }
}



export const GetDataUserSignin = async (obj: any) => {
  let tk  = await retrieveUserSession()
  var bearer = 'Bearer'+tk;
  console.log(bearer)
  try{
  const data = JSON.stringify(obj);
  console.log(obj.uuid)
  return fetch(`${URL}api/v1/user`, 

  {
    method: 'get',
    headers: {
      'Authorization':bearer,
      'Content-Type': 'application/json',
    },
  })
  // request ok
    .then(resp => {
      return resp.json();
    })
    .then(response => {
      return response;
    })
    // request fail
    .catch(err => {
      console.log('err en request--->'+err);
      return err;
    });
} catch (err) {
  console.log('-----' + err);
  return undefined;
}
}
export const GetDataItemsPreferences = async () => {
try {
 
  return fetch(`${URL}api/v1/preferences`, {
    method: 'GET',
   
    headers: {
      'Content-Type': 'application/json',
    },
  })
  // request ok
    .then(resp => {
      return resp.json();
    })
    .then(response => {
      return response;
    })
    // request fail
    .catch(err => {
      console.log('err en request--->'+err);
      return err;
    });
} catch (err) {
  console.log('-----' + err);
  return undefined;
}


}


// funcion para realizar registro de un suario
export const signUp =  (obj:any )=> {
  try {
    const data = JSON.stringify(obj);
    return fetch(url, {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => {
        return resp.json();
      })
      .then(response => {

        return response;
      })
      .catch(err => {
        console.log(err);
        return undefined;
      });
  } catch (err) {
    console.log('-----' + err);
    return undefined;
  }
};


// function that get data for register(preferences,countries,gender)

export const getDataRegister = async (id:number) => {
  try {
    return fetch(`${URL}oneTop/getTypeAccount/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // request ok
      .then(resp => {
        return resp.json();
      })
      .then(response => {
        return response;
      })
      // request fail
      .catch(err => {
        console.log(err);
        return err;
      });
  } catch (err) {
    console.log('-----' + err);
    return undefined;
  }
};
// function for get departaments
export const getDepartaments = async (id:number) => {
  try {
    return fetch(`${URL}oneTop/getDepartments/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // request ok
      .then(resp => {
        return resp.json();
      })
      .then(response => {
        return response;
      })
      // request fail
      .catch(err => {
        console.log(err);
        return err;
      });
  } catch (err) {
    console.log('-----' + err);
    return undefined;
  }
};
// function for get citiesgit
export const getCities = async (id:number) => {
  try {
    return fetch(`${URL}oneTop/getCities/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // request ok
      .then(resp => {
        return resp.json();
      })
      .then(response => {
        return response;
      })
      // request fail
      .catch(err => {
        console.log(err);
        return err;
      });
  } catch (err) {
    console.log('-----' + err);
    return undefined;
  }
};
// function for close sesion
export const LogOut = async (id:number) => {
  try {
    return fetch(`${URL}oauth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // request ok
      .then(resp => {
        return resp.json();
      })
      .then(response => {
        return response;
      })
      // request fail
      .catch(err => {
        console.log(err);
        return err;
      });
  } catch (err) {
    console.log('-----' + err);
    return undefined;
  }
};

// function
export const getValidEmailExist = async (email:string) => {
  try {
    return fetch(`${URL}oneTop/validEmailExist/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // request ok
      .then(resp => {
        return resp.json();
      })
      .then(response => {
        return response;
      })
      // request fail
      .catch(err => {
        console.log(err);
        return err;
      });
  } catch (err) {
    console.log('-----' + err);
    return undefined;
  }
};

export const getValidUsernamelExist = async (username:string) => {
  try {
    return fetch(`${URL}oneTop/validEmailExist/${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // request ok
      .then(resp => {
        return resp.json();
      })
      .then(response => {
        return response;
      })
      // request fail
      .catch(err => {
        console.log(err);
        return err;
      });
  } catch (err) {
    console.log('-----' + err);
    return undefined;
  }
};



export default { signin, signUp,getDataRegister,getDepartaments,getValidEmailExist,getValidUsernamelExist }
