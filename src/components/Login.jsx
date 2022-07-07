import React from 'react'
import { ButtonLogin, FormLogin, ImgFace2, ImgGoogle2, InfoLogin2, LoginDiv, LoginText, LoginTittle, SocialDiv2 } from '../styles/styles'
import Navbars from './Navbar'
import{ Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useForm } from '../Hooks/useForm'
import { GoogleLogin, LoginAsync} from '../redux/actions/actionRegister'

const Login = () => {

    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm({
        email:'',
        password:''
    })

    const {email, password} = values

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        dispatch(LoginAsync(email, password))
        reset()
    }

    const GoogleIn = () =>{
        dispatch(GoogleLogin())
    }


  return (
    <div> 
    <Navbars/>
    <LoginDiv>
      <FormLogin onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example@mail.com" name="email" values={email} onChange={handleInputChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="escribe tu contraseña" name="password" values={password} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
      <ButtonLogin variant="primary" type="submit">
        Iniciar Sesión
      </ButtonLogin>
    </FormLogin>
    <div>
    <LoginTittle>Inicia sesión</LoginTittle>
    <LoginText>Inicia sesión en nuestra app <strong>Gnomi</strong> si ya te registraste antes con tu correo y contraseña</LoginText>
    <InfoLogin2>También puedes inciar sesión con :</InfoLogin2>
    <SocialDiv2>
        <ImgGoogle2 onClick={GoogleIn} src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657075049/WeatherApp/search_z0jevh.png' alt='google' />
        <ImgFace2 src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657075048/WeatherApp/facebook_2_fnhynl.png' alt='facebook'/>
    </SocialDiv2>
    </div>
    </LoginDiv>
    </div>
  )
}

export default Login