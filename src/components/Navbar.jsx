import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Items, LogoApp } from '../styles/styles'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logoutAsync } from '../redux/actions/actionRegister';

const Navbars = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const LogoutIn = () =>{
    dispatch(logoutAsync())
    navigate("/registro")
  }
  return (
    <>
       <Navbar expand="lg" bg="dark" variant="dark">
  <Container>
  <Link style={{'textDecoration':'none'}} to="/"> <Navbar.Brand className='text-light' style={{'fontWeight':'600'}} href="#home"><LogoApp src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656973812/WeatherApp/clima_ngk40h.png' alt='logoapp'/>Gnomai app</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Items>
       <Nav.Link className='text-light' href="/">Inicio</Nav.Link>
        <Nav.Link className='text-light' href="#">Ayuda</Nav.Link>
       <Nav.Link className='text-light' ><Link to="/crear" style={{'textDecoration':'none', 'color':'white'}}>Crear</Link></Nav.Link>
        <NavDropdown title="Usuario" id="collasible-nav-dropdown">
        <Link style={{'textDecoration':'none'}} to="/registro"><NavDropdown.Item href="#action/3.1">Registrate</NavDropdown.Item></Link>
        <Link style={{'textDecoration':'none'}} to="/login"><NavDropdown.Item href="#action/3.2">Log in</NavDropdown.Item></Link>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" onClick={LogoutIn}>Cerrar sesión</NavDropdown.Item>
        </NavDropdown>
     </Items>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Navbars