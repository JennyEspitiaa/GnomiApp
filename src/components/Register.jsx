import React from 'react'
import{ Form } from 'react-bootstrap'
import { ButtonRegister, FormRegister, ImgFace, ImgGoogle, InfoLogin, RegisterDiv, RegisterText, RegisterTittle, SocialDiv } from '../styles/styles'
import Navbars from './Navbar'
import { useDispatch } from 'react-redux'
import { useForm } from '../Hooks/useForm';
import { GoogleLogin, registerUserAsync } from '../redux/actions/actionRegister'

const Register = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
          email:'',
          password:''
    })

    const {email, password} = values

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(values)
      dispatch(registerUserAsync(email, password))
      reset()
  }

  const GoogleIn = () =>{
    dispatch(GoogleLogin())
}

  return (
    <div> 
    <Navbars/>
    <RegisterDiv>
    <div>
    <RegisterTittle>Registrate</RegisterTittle>
    <RegisterText>Registrate en nuestra app <strong>Gnomi</strong> con tu correo y conoce más funciones a las que puedes acceder</RegisterText>
    <InfoLogin>También puedes registrarte con :</InfoLogin>
    <SocialDiv>
        <ImgGoogle onClick={GoogleIn} src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657075049/WeatherApp/search_z0jevh.png' alt='google' />
        <ImgFace src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657075048/WeatherApp/facebook_2_fnhynl.png' alt='facebook'/>
    </SocialDiv>
    </div>
      <FormRegister onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleInputChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="escribe tu contraseña" name="password" value={password} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
      <ButtonRegister variant="primary" type="submit">
        Registrarme
      </ButtonRegister>
    </FormRegister>
    </RegisterDiv>
    </div>
  )
}

export default Register