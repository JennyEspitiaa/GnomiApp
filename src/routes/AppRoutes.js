import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {Spinner} from 'react-bootstrap';
import { PublicRoutes } from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import DashboardRoutes from './DashboardRoutes';
import Create from '../components/Create';

const AppRoutes = () => {

  const[validate, setValidate] = useState(true);
  const[loggedIn, setLoggedIn] = useState(false);

  useEffect(() =>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user?.uid){
        console.log(user);
        setLoggedIn(true);
        user.getIdToken()
        .then((token)=>{})
      }else {
        setLoggedIn(false);
      }
      setValidate(false)
    });
  }, [setLoggedIn, setValidate])

  if(validate){
    return(
      <div style={{'margin':'0 auto', 'display':'flex', 'justifyContent':'center', 'alignItems':'center', 'height':'100vh', 'gap':'20px'}}>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="warning" />
      </div>
    )
  }

  return (
    <BrowserRouter>

            {/* PUBLICAS */}

        <Routes>
            <Route path='/registro' element={
              <PublicRoutes isAuthenticated={loggedIn} >
                     <Register/>
              </PublicRoutes>
            } />

            <Route path='/login' element={
              <PublicRoutes isAuthenticated={loggedIn} >
                     <Login/>
              </PublicRoutes>
            } />

          

            {/* PRIVADAS */}
                
              <Route path='*' element={
               <PrivateRoutes isAuthenticated ={loggedIn}>
                    <DashboardRoutes/>
                </PrivateRoutes>}/>

              
            <Route path='/crear' element={
              <PrivateRoutes isAuthenticated={loggedIn} >
                     <Create/>
              </PrivateRoutes>
            } />

            </Routes>


    </BrowserRouter>
  )
}

export default AppRoutes