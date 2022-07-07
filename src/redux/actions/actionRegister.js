import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { google } from "../../firebase/firebaseConfig";
import { typesLogin } from "../types/types"


// LOGOUT

export const logoutAsync = () =>{
    return(dispatch) =>{
        const authorized = getAuth();
        signOut(authorized)
        .then((user) => {
            dispatch(logoutSync)
            console.log('Has cerrado sesión');
        })
        .catch(error => {
            console.log((error));
        })
    }
}

export const logoutSync = () =>{
    return{
        type: typesLogin.logout,
    }
}


// LOGIN

export const LoginAsync = (email, password) => {
    return (dispatch)=> {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            console.log("Usuario autorizado, bienvenido a GnomaiApp");
            dispatch(LoginSync(user.email, user.password))
        })
        .catch((error)=>{
            console.warn(error, 'usuario no autorizado');
        })
    }
}


export const LoginSync = (email, password) => {
    return{
        type:typesLogin.login,
        payload: {
            email, password
        }
    }
}

//     GOOGLE

export const GoogleLogin = ()=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user})=>{
            console.log(user, "Usuario autorizado");
            dispatch(registerUserSync(user.displayName, user.email))
        })
        .catch((error)=>{
            console.warn(error);
        })
    }
}


//      REGISTRAR USUARIO NUEVO

export const registerUserAsync = (email, password) =>{
    return (dispatch)=>{
        const auth = getAuth()
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
        .then(async ({user}) => {
                await updateProfile(auth.currentUser,{displayName: email})

            dispatch(registerUserSync(email, password))
                console.log(user, 'Usuario registrado con exito');
        })
        .catch(error => console.log(error))
    }
}

export const registerUserSync = (email, password) =>{
    return{
        type: typesLogin.register,
        payload: {
            email, password
        }
    }
}