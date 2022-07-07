import React, {useState} from 'react'
import FormBar from './FormBar'
import Footer from './Footer';
import Navbars from './Navbar';
import Gallery from './Gallery';
import Weather from './Weather';

const Home = () => {

  let apiWeather = "https://api.openweathermap.org/data/2.5/weather?appid=0a1360ecdc8b3ca3e8f963217f2cd479&lang=es"
  let ciudadUrl = "&q="

  let pronosticoUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=0a1360ecdc8b3ca3e8f963217f2cd479&lang=es"

  const [clima, setClima] = useState([])
  const [prediccion, setPrediccion] = useState([])
  const [carga, setCarga] = useState(false)
  const [show, setShow] = useState(false)
  const [ubicacion, setUbicacion] = useState("")

  const getUbicacion = async(ubi) =>{
    setCarga(true);
    setUbicacion(ubi);

    // el tiempo real

    apiWeather = apiWeather + ciudadUrl + ubi;

    await fetch(apiWeather).then((resp) => {
      if(!resp.ok) throw {resp}
      return resp.json();
      //    parametro
    }).then((climaData) => {
        console.log(climaData);
        setClima(climaData)

    }).catch(error =>{
      console.log(error);
      setCarga(false);
      setShow(false);
    })

    // predicción

    pronosticoUrl = pronosticoUrl + ciudadUrl + ubi;
    await fetch(pronosticoUrl).then((resp) => {
      if(!resp.ok) throw{resp}
      return resp.json();
      //    parametro
    }).then((pronosticoData) => {
        console.log(pronosticoData);
        setPrediccion(pronosticoData)

        setCarga(false)
        setShow(true)

    }).catch(error =>{
      console.log(error);
      setCarga(false);
      setShow(false);
    })
  }

  return (
    <div style={{'background': 'radial-gradient(circle at top, #ccdbff , #ffffd5)', 'height':'100%'}}>
    <Navbars/>
    <FormBar
      // prop
        ciudadNew = {getUbicacion}
    />
       <Weather
          mostrarData = {show}
          cargarData = {carga}
          weathers ={clima}
          forecasts = {prediccion}
       />
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Home