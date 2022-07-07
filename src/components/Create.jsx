import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../Hooks/useForm'
import { CrearText, CrearTitle, FirstPart, FormCrear, SecondDiv, SubmitBtn } from '../styles/styles'
import Footer from './Footer'
import Navbars from './Navbar'

const Create = () => {
    const dispatch = useDispatch()

    const {fotosNuevas} = useSelector((store)=>store.fotoReducers)

    const [values,handleInputChange,reset] = useForm({
        ubicacion:'',
        foto:'',
        pic:'',
        texto:'',
        autor:''
    })

  return (
    <>
    <Navbars/>
    <CrearTitle>Haz parte de Gnomai</CrearTitle>
    <CrearText>Sube tu foto con el clima del día y compartela con los demás usuarios!</CrearText>
    <div style={{'height':'45vh'}}>
    <FormCrear>
        <FirstPart>
      <Form.Group className="mb-3" >
        <Form.Label>Lugar</Form.Label>
        <Form.Control type="text" placeholder="Escribe donde estuviste" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="file"/>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Foto de perfil</Form.Label>
        <Form.Control type="file"/>
      </Form.Group>
      </FirstPart>

    <SecondDiv>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Cuentanos sobre tu foto</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nombre del autor</Form.Label>
        <Form.Control type="password" placeholder="ejemplo: Johana Hernandez" />
      </Form.Group>
      
      <Form.Group className="mb-3">
      </Form.Group>
      <SubmitBtn variant="primary" type="submit">
        Subir
      </SubmitBtn>
      
      </SecondDiv>
    </FormCrear>
    </div>
    <Footer/>
    </>
  )
}

export default Create