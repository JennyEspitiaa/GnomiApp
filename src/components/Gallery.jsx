import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listFotosAsync } from '../redux/actions/actionFotos';
import { Delete, DivComment, DivDel, GalleryDiv, GalleryTittle, LocationIcon, PhotoDiv, PhotoPic, PhotoPrg, PhotoWhere, UserName, UserPic } from '../styles/styles'

const Gallery = () => {

    const dispatch = useDispatch()

    const {fotosNuevas} = useSelector((store)=>store.fotoReducersListar)
    console.log(fotosNuevas);

    useEffect(()=>{
        dispatch(listFotosAsync())
    },[dispatch])

  return (
    <>
     <GalleryTittle>Fotos de nuestros usuarios</GalleryTittle>
     <GalleryDiv>
    {
        fotosNuevas.map((fotos,index)=>(
        
    <PhotoDiv  key={index}>
        <PhotoWhere><LocationIcon/>{fotos.ubicacion}</PhotoWhere>
        <PhotoPic src={fotos.foto} alt='PhotoPic'/>
        <DivComment>
            <UserPic src={fotos.pic} alt='profile' />
        <PhotoPrg>{fotos.texto}</PhotoPrg>
        </DivComment>
        <DivDel>
        <Delete>Borrar</Delete>
        <UserName>{fotos.autor}</UserName>
        </DivDel>
    </PhotoDiv>

        ))
    }
    </GalleryDiv>
    </>
  )
}

export default Gallery