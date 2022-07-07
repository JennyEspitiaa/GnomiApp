import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { DatosBase } from "../../firebase/firebaseConfig"
import { typesFoto } from "../types/types"


// add
export const AddFotoAsync = (formValue) => {
    return (dispatch) => {
        addDoc(collection(DatosBase, "fotosUser"), formValue)
        .then( resp =>{
            dispatch(addFotoSync(formValue))
            dispatch(listFotosAsync())
        })
        .catch(error =>{
            console.warn(error, 'Foto no guardada')
        })

    }
}

export const addFotoSync = (formValue) => {
    return {
        type: typesFoto.add,
        payload: formValue
    }

}


// listar
export const listFotosAsync = () =>{
    return async(dispatch)=>{

        const listarFotos = await getDocs(collection(DatosBase, "fotosUser"))
        console.log(listarFotos)
        const Foticos = []
        listarFotos.forEach(pintar =>{
            Foticos.push(
                {
                    ...pintar.data()
                }
            )
        })
        dispatch(listFotosSync(Foticos))
    }
}

export const listFotosSync = (comentar)=>{
    return {
     type: typesFoto.list,
     payload: comentar
 }
}