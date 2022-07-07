import { typesLogin } from "../types/types";

export const registerReducers = (state={}, action)=>{
    switch (action.type) {
        case typesLogin.register:
            return{
                email:action.payload.email,
                password:action.payload.password,
            }
        case typesLogin.login:
            return{
                email:action.payload.email,
                password:action.payload.password,
            }
            case typesLogin.logout:
                return{

                }
    
        default:
            return state

    }
}