import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import useCreate from '../Hooks/useCreate'
import { AddFotoAsync } from '../redux/actions/actionFotos'
import { CrearText, CrearTitle, FirstPart, FormCrear, SecondDiv, SubmitBtn } from '../styles/styles'
import Footer from './Footer'
import Navbars from './Navbar'

const Create = () => {
    const dispatch = useDispatch()

    const [formValue, handleInputChange, reset] = useCreate({
        ubicacion:'',
        foto:'',
        pic:'',
        texto:'',
        autor:''
    })

     const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(AddFotoAsync(formValue))
        reset()
    }

  return (
    <>
    <Navbars/>
    <CrearTitle>Haz parte de Gnomai</CrearTitle>
    <CrearText>Sube tu foto con el clima del día y compartela con los demás usuarios!</CrearText>
    <div style={{'height':'45vh'}}>
    <FormCrear onSubmit={handleSubmit}>
        <FirstPart>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Lugar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe donde estuviste"
              name="ubicacion"
              value={formValue.ubicacion}
              onChange={handleInputChange}
            />
          </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" name='foto' value={formValue.foto} onChange={handleInputChange}/>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Foto de perfil</Form.Label>
        <Form.Control type="text" name='pic' value={formValue.pic} onChange={handleInputChange}/>
      </Form.Group>
      </FirstPart>

    <SecondDiv>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Cuentanos sobre tu foto</Form.Label>
    <Form.Control as="textarea" rows={3} name='texto' value={formValue.texto} onChange={handleInputChange}/>
  </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nombre del autor</Form.Label>
        <Form.Control type="text" placeholder="ejemplo: Johana Hernandez" name='autor' value={formValue.autor} onChange={handleInputChange}/>
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