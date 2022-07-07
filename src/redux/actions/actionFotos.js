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


//  edit
export const editFotoAsync = (nuevaFoto) =>{
    return async (dispatch)=>{
       const collectionFoto = collection(DatosBase, "fotosUser")
       const m = query(collectionFoto, where("ubicacion", "==", nuevaFoto.ubicacion))
       const datosNew = await getDocs(m)
       let id = ""

        datosNew.forEach(async(docu)=>{
            id = docu.id
        })
       console.log(id)

       const referenceDoc = doc(DatosBase, "fotosUser", id)
       await updateDoc(referenceDoc, nuevaFoto)
        .then(response =>{
            dispatch(editFotoSync(nuevaFoto))
        })
        .catch(error => console.log(error))
        dispatch(listFotosAsync())
    }
}


export const editFotoSync = (nuevaFoto) =>{
    return{
        type: typesFoto.edit,
        payload:{nuevaFoto}
    }
}

// delete

export const deleteFotoAsync = (pic)=>{
    return async (dispatch)=>{
        const collectionPic = collection(DatosBase, "fotosUser")
        const d = query(collectionPic, where("pic", "==", pic))

        const datosD = await getDocs(d)
        console.log(datosD)

        datosD.forEach(docu =>{
            deleteDoc(doc(DatosBase, "fotosUser", docu.id))
        })
        dispatch(deleteFotoSync(pic))

  
}}

export const deleteFotoSync = (pic) => {
    return {
        type: typesFoto.delete,
        payload: pic
    }
}