import React from 'react'
import { ActualDate, Dates, Datos1, Datos2, Day, DivGeneral, DivGeneral1, DivHour, DivHour1, Grados, Grados1, Hour, IconCloud, IconCloud1, IconWeather, InfoLi, InfoSpan, LocalStorage, MoreInfo, OtherInfo, SpanNumber, TypeWeather, WeatherDiv, WeatherText, Where } from '../styles/styles'
import { TbTemperature, TbSunset } from "react-icons/tb";
import { IoWaterOutline } from "react-icons/io5";
import { RiCloudWindyLine } from "react-icons/ri";
import { HiOutlineSun } from "react-icons/hi";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { Spinner } from 'react-bootstrap';

const Weather = ({mostrarData,cargarData,weathers,forecasts}) => {

    const today = new Date();
    const weekday = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];    
    const day = weekday[today.getDay()];
    const dayN = today.getDate();
    const month = monthNames[today.getMonth() + 1];
    const year = today.getFullYear();
 
    if(cargarData){
      return(
        <div style={{'margin':'0 auto', 'display':'flex', 'justifyContent':'center', 'alignItems':'center', 'height':'20vh', 'gap':'20px'}}><Spinner animation="border" variant="primary"/></div>
      )
    }

  
    const HandleLocalStorage = () => {
      const local = weathers;
      localStorage.setItem("city", JSON.stringify(local));
    }

  return (
    <>

     {
       mostrarData === true ? (
        <>
        <ActualDate>
        <Dates>{day}, {dayN} de {month} de {year}</Dates>
    
      </ActualDate>
  
      <WeatherDiv>
        <IconWeather/>
      <Where>{weathers.name}</Where>
      <WeatherText>{(weathers.main.temp -273.15).toFixed(0)}°C</WeatherText>
      </WeatherDiv>
  
      <TypeWeather>{weathers.weather[0].description}</TypeWeather>
  
      <MoreInfo>
        <li><TbTemperature/> Sensación térmica:<SpanNumber>{(weathers.main.feels_like -273.15).toFixed(0)}°C</SpanNumber></li>
        <li><IoWaterOutline/> Humedad:<SpanNumber>{weathers.main.humidity}%</SpanNumber></li>
        <li><RiCloudWindyLine/> Viento:<SpanNumber>{(weathers.wind.speed).toFixed(0)} km/h</SpanNumber></li>
      </MoreInfo>
  
      <OtherInfo>
        <InfoLi><HiOutlineSun/> Amanecer<InfoSpan>{(weathers.sys.sunrise)}</InfoSpan></InfoLi>
        <p style={{'color':'#2e5ab4'}}>|</p>
        <InfoLi><TbSunset/> Atardecer<InfoSpan>{(weathers.sys.sunset)}</InfoSpan></InfoLi>
        <p style={{'color':'#2e5ab4'}}>|</p>
        <InfoLi><AiOutlineArrowUp/> Máx<InfoSpan>{(weathers.main.temp_max -273.15).toFixed(0)}°C</InfoSpan></InfoLi>
        <p style={{'color':'#2e5ab4'}}>|</p>
        <InfoLi><AiOutlineArrowDown/> Min<InfoSpan>{(weathers.main.temp_min -273.15).toFixed(0)}°C</InfoSpan></InfoLi>
      </OtherInfo>
  
      <Datos1>PRONÓSTICO POR HORA</Datos1>
  
      <DivGeneral>
          <DivHour>
              <Hour>6:00</Hour>
              <IconCloud src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/cloud-computing_dqaaci.png' alt='IconCloud' />
              {/* <IconSun src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/sun_fjufl6.png' alt='IconSun'/> */}
             <Grados>{(forecasts.list[0].main.temp -273.15).toFixed(0)}°C</Grados>
          </DivHour>
  
          <DivHour>
              <Hour>9:00</Hour>
              <IconCloud src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/cloud-computing_dqaaci.png' alt='IconCloud' />
              {/* <IconSun src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/sun_fjufl6.png' alt='IconSun'/> */}
             <Grados>{(forecasts.list[1].main.temp -273.15).toFixed(0)}°C</Grados>
          </DivHour>
  
          <DivHour>
              <Hour>12:00</Hour>
              <IconCloud src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/cloud-computing_dqaaci.png' alt='IconCloud' />
              {/* <IconSun src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/sun_fjufl6.png' alt='IconSun'/> */}
             <Grados>{(forecasts.list[2].main.temp -273.15).toFixed(0)}°C</Grados>
          </DivHour>

          <DivHour>
              <Hour>15:00</Hour>
              <IconCloud src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/cloud-computing_dqaaci.png' alt='IconCloud' />
              {/* <IconSun src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/sun_fjufl6.png' alt='IconSun'/> */}
             <Grados>{(forecasts.list[3].main.temp -273.15).toFixed(0)}°C</Grados>
          </DivHour>

          <DivHour>
              <Hour>18:00</Hour>
              <IconCloud src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/cloud-computing_dqaaci.png' alt='IconCloud' />
              {/* <IconSun src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/sun_fjufl6.png' alt='IconSun'/> */}
             <Grados>{(forecasts.list[4].main.temp -273.15).toFixed(0)}°C</Grados>
          </DivHour>

      </DivGeneral>
  
  
      <Datos2>Pronostico por día</Datos2>
  
      <DivGeneral1>
            <DivHour1>
              <Day>Viernes</Day>
              <IconCloud1 src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/cloud-computing_dqaaci.png' alt='iconn' />
              {/* <IconSun1 src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/sun_fjufl6.png' alt='IconSun'/> */}
              <Grados1>{(forecasts.list[17].main.temp -273.15).toFixed(0)}°C</Grados1>
            </DivHour1>

            <DivHour1>
              <Day>Sabado</Day>
              <IconCloud1 src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/cloud-computing_dqaaci.png' alt='iconn' />
              {/* <IconSun1 src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/sun_fjufl6.png' alt='IconSun'/> */}
              <Grados1>{(forecasts.list[22].main.temp -273.15).toFixed(0)}°C</Grados1>
            </DivHour1>

            <DivHour1>
              <Day>Domingo</Day>
              <IconCloud1 src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/cloud-computing_dqaaci.png' alt='iconn' />
              {/* <IconSun1 src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/sun_fjufl6.png' alt='IconSun'/> */}
              <Grados1>{(forecasts.list[6].main.temp -273.15).toFixed(0)}°C</Grados1>
            </DivHour1>

            <DivHour1>
              <Day>Lunes</Day>
              <IconCloud1 src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/cloud-computing_dqaaci.png' alt='iconn' />
              {/* <IconSun1 src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657066987/WeatherApp/sun_fjufl6.png' alt='IconSun'/> */}
              <Grados1>{(forecasts.list[38].main.temp -273.15).toFixed(0)}°C</Grados1>
            </DivHour1>
 
      </DivGeneral1>

        
      <LocalStorage
        onClick={HandleLocalStorage}
      >
        Guardar
      </LocalStorage>

      </>
       ):(
        <p style={{'margin':'0 auto', 'display':'flex', 'justifyContent':'center', 'alignItems':'center', 'height':'20vh', 'gap':'20px'}}>No hay datos todavía</p>
       )
     }

       
    </>
  )
}

export default Weather