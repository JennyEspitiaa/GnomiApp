import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFotoAsync, listFotosAsync } from '../redux/actions/actionFotos';
import { Delete, DivComment, DivDel, Edit, GalleryDiv, GalleryTittle, LocationIcon, PhotoDiv, PhotoPic, PhotoPrg, PhotoWhere, UserName, UserPic } from '../styles/styles'
import Edits from './Edit';


const Gallery = () => {

    const dispatch = useDispatch()

    const {fotosNuevas} = useSelector((store)=>store.fotoReducersListar)
    console.log(fotosNuevas);

    const [info, setInfo] = useState([])
    const [modal, setModal] = useState(false)

    const handleEditar=(foto)=>{
        setInfo(foto)
        setModal(true)
    }

    const handleDelete = (pic)=>{
        alert('Se eliminará este comentario', pic)
        dispatch(deleteFotoAsync(pic))
  
    }

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
            <div style={{'display':'flex', 'gap':'10px'}}>
            <Edit onClick={()=>handleEditar(fotos)}>Editar</Edit>
        <Delete onClick={()=>handleDelete(fotos.pic)}>Borrar</Delete>
        </div>
        <UserName>{fotos.autor}</UserName>
        </DivDel>
    </PhotoDiv>

        ))
    }
    </GalleryDiv>
    {
        modal === true ? <Edits info={info}/> : ''
    }
    </>
  )
}

export default Gallery