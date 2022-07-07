import { typesFoto } from "../types/types";

const initialState = {
    fotosNuevas: []
}

export const fotoReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesFoto.list:
            return{
                fotosNuevas:[...action.payload]
            }
            case typesFoto.edit:
                return{
                   ...state
                }
    
        default:
            return state
    }
}

