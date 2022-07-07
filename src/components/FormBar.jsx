import React, {useState} from 'react'
import { LocationButton, LocationIcon, Search, SearchBar, SearchButton, SearchIcon} from '../styles/styles'

const FormBar = ({ciudadNew}) => {
  const [ciudad, setCiudad] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ciudad});
    if(ciudad === "" || !ciudad) return;

          // ciudad en el input
    ciudadNew(ciudad);
  }

  return (
    <>
    <Search onSubmit={onSubmit}>
        <LocationButton>
            <LocationIcon/>
        </LocationButton>
        <SearchBar type='text' placeholder='busca una ciudad...' onChange={(e)=> setCiudad(e.target.value)}/>
        <SearchButton type='submit'>
            <SearchIcon/>
        </SearchButton>
    </Search>
    </>
  )
}

export default FormBar