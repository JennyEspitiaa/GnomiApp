import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import useCreate from "../Hooks/useCreate";
import { editFotoAsync } from "../redux/actions/actionFotos";
import {
  CrearText,
  CrearTitle,
  FirstPart,
  FormCrear,
  SecondDiv,
  SubmitBtn,
} from "../styles/styles";

const Edits = ({ info }) => {

  const dispatch = useDispatch()

  // modal pantalla completa
  const [fullscreen, setFullscreen] = useState(true);
  // abro modal
  const [show, setShow] = useState(true);
  // cierro modal
  const handleClose = () => setShow(false);

  // eslint-disable-next-line
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [formValue, handleInputChange, reset] = useCreate({
    ubicacion: info.ubicacion,
    foto: info.foto,
    pic: info.pic,
    texto: info.texto,
    autor: info.autor,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(editFotoAsync(formValue))
    reset();
  };

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <CrearTitle>Edita en Gnomai</CrearTitle>
          <CrearText>
            Resube tu foto si te equivocaste en algun dato, nadie se dará
            cuenta!
          </CrearText>
          <div style={{ height: "45vh" }}>
            <FormCrear onSubmit={handleSubmit}>
              <FirstPart>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
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
                  <Form.Control
                    type="text"
                    name="foto"
                    value={formValue.foto}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Foto de perfil</Form.Label>
                  <Form.Control
                    type="text"
                    name="pic"
                    value={formValue.pic}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </FirstPart>

              <SecondDiv>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Cuentanos sobre tu foto</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="texto"
                    value={formValue.texto}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nombre del autor</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ejemplo: Johana Hernandez"
                    name="autor"
                    value={formValue.autor}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3"></Form.Group>
                <SubmitBtn variant="primary" type="submit">
                  Editar
                </SubmitBtn>
              </SecondDiv>
            </FormCrear>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edits;
