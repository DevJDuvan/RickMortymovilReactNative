export interface Data {
        message: string|any,
        data : {
         access_token : string,
         expires_in :number,
         user: {
            name:string,
            email: string,
            typeAccount: number
        }

        }
        error: number
    }


    export interface DataApiRegister{
            message: string,
            data: {
                typeAccount: number,
                genders: [
                    {
                        id: number,
                        name: string
                    },
                ],
                countries: [
                    {
                        id: number,
                        name:string,
                        indicative:string
                    },
                ],
                preferences: [
                    {
                        id: number,
                        name: string
                    },
            
                ]
            },
            error: number
        }
        export interface DataSignupRegister{
            user: {
                email: string,
                password: string,
                confirPassword: string,
                typeAccount: number,
                username:string
            },
            userData: {
                names: string,
                lastnames: string,
                phone: string,
                genderId: number,
                countrieId: number,
                departmentId: number
            },
            userDataOrganization: {
                name: string,
                typeOrganizationId: number,
                phone: string
            },
            preference: [
                {
                    id: number
                },
               
            ]
        }
    
       
export type TodoContextType ={
dataApiRegister : DataApiRegister|any;
saveDataApiRegister:(todo:DataApiRegister)=> void;
deletDataUser:()=> void;
dataSignupRegister:DataSignupRegister|any
saveDataSignupRegister:(todo:DataSignupRegister)=> void;
}



