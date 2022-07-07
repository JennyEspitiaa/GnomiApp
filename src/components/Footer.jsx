import React from 'react'
import { AppStore, Copy, Foot, FootDiv, GooglePlay, ItemUl, LogoImg } from '../styles/styles'

const Footer = () => {
  return (
    <FootDiv>
        <Foot>
            <LogoImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656973812/WeatherApp/clima_ngk40h.png' alt='LogoImg'/>
            <ItemUl>
                <GooglePlay src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657071863/WeatherApp/es-419_badge_web_generic_pfaivz.png' alt='googlePlay'/>
                <AppStore src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657072669/WeatherApp/png-clipart-app-store-apple-google-play-apple-text-logo_nzfxgy.png' alt='apple'/>
            </ItemUl>
        </Foot>
        <Copy>Copyright © 2022 Sprint 4 - Academia Geek. </Copy>
    </FootDiv>
  )
}

export default Footer