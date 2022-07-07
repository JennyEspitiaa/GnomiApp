import React from 'react'
import { Delete, DivComment, DivDel, GalleryDiv, GalleryTittle, LocationIcon, PhotoDiv, PhotoPic, PhotoPrg, PhotoWhere, UserName, UserPic } from '../styles/styles'

const Gallery = () => {
  return (
    <>
      <GalleryTittle>Fotos de nuestros usuarios</GalleryTittle>
    <GalleryDiv>
        <PhotoDiv>
            <PhotoWhere><LocationIcon/>Cartagena de Indias</PhotoWhere>
            <PhotoPic src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657122848/WeatherApp/pexels-promadik-travel-11642158_vqfxf5.jpg' alt='PhotoPic'/>
            <DivComment>
                <UserPic src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657123647/WeatherApp/pexels-artem-podrez-4816800_sfhxgn.jpg' alt='profile' />
            <PhotoPrg>Cartagena con su clima hoy bella y despejada, así si aguanta ir a la playa! Full Calor</PhotoPrg>
            </DivComment>
            <DivDel>
            <Delete>Borrar</Delete>
            <UserName>Adrey Maldonado</UserName>
            </DivDel>
        </PhotoDiv>

        <PhotoDiv>
            <PhotoWhere><LocationIcon/>Cartagena de Indias</PhotoWhere>
            <PhotoPic src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657122848/WeatherApp/pexels-promadik-travel-11642158_vqfxf5.jpg' alt='PhotoPic'/>
            <DivComment>
                <UserPic src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657123647/WeatherApp/pexels-artem-podrez-4816800_sfhxgn.jpg' alt='profile' />
            <PhotoPrg>Cartagena con su clima hoy bella y despejada, así si aguanta ir a la playa! Full Calor</PhotoPrg>
            </DivComment>
            <DivDel>
            <Delete>Borrar</Delete>
            <UserName>Adrey Maldonado</UserName>
            </DivDel>
        </PhotoDiv>

        <PhotoDiv>
            <PhotoWhere><LocationIcon/>Cartagena de Indias</PhotoWhere>
            <PhotoPic src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657122848/WeatherApp/pexels-promadik-travel-11642158_vqfxf5.jpg' alt='PhotoPic'/>
            <DivComment>
                <UserPic src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657123647/WeatherApp/pexels-artem-podrez-4816800_sfhxgn.jpg' alt='profile' />
            <PhotoPrg>Cartagena con su clima hoy bella y despejada, así si aguanta ir a la playa! Full Calor</PhotoPrg>
            </DivComment>
            <DivDel>
            <Delete>Borrar</Delete>
            <UserName>Adrey Maldonado</UserName>
            </DivDel>
        </PhotoDiv>

        <PhotoDiv>
            <PhotoWhere><LocationIcon/>Cartagena de Indias</PhotoWhere>
            <PhotoPic src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657122848/WeatherApp/pexels-promadik-travel-11642158_vqfxf5.jpg' alt='PhotoPic'/>
            <DivComment>
                <UserPic src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657123647/WeatherApp/pexels-artem-podrez-4816800_sfhxgn.jpg' alt='profile' />
            <PhotoPrg>Cartagena con su clima hoy bella y despejada, así si aguanta ir a la playa! Full Calor</PhotoPrg>
            </DivComment>
            <DivDel>
            <Delete>Borrar</Delete>
            <UserName>Adrey Maldonado</UserName>
            </DivDel>
        </PhotoDiv>

        <PhotoDiv>
            <PhotoWhere><LocationIcon/>Cartagena de Indias</PhotoWhere>
            <PhotoPic src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657122848/WeatherApp/pexels-promadik-travel-11642158_vqfxf5.jpg' alt='PhotoPic'/>
            <DivComment>
                <UserPic src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1657123647/WeatherApp/pexels-artem-podrez-4816800_sfhxgn.jpg' alt='profile' />
            <PhotoPrg>Cartagena con su clima hoy bella y despejada, así si aguanta ir a la playa! Full Calor</PhotoPrg>
            </DivComment>
            <DivDel>
            <Delete>Borrar</Delete>
            <UserName>Adrey Maldonado</UserName>
            </DivDel>
        </PhotoDiv>
    </GalleryDiv>
    </>
  )
}

export default Gallery