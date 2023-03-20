import React from 'react'

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


    export var dataApiRegisterr = {
        typeAccount: 0,
        genders: [
            {
                id: 0,
                name: ""
            },
        ],
        countries: [
            {
                id: 0,
                name:"",
                indicative:""
            },
        ],
        preferences: [
            {
                id: "",
                name: ""
            },
    
        ]
    }
    
    
    
    
    
    
    


export function deletDataUser(data:any){
   dataApiRegisterr=data
}

