import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import{ Form, Button} from 'react-bootstrap'
import {FiWind} from 'react-icons/fi'

export const LogoApp = styled.img`
  width: 8%;
  margin-right: 15px;
`;

export const Items = styled(Nav)`
  width: 40%;
  justify-content: space-between;
`;
export const Search = styled.form`
  width: 60%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const LocationButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  border: none;
  background-color: #dcdcdc;
`;

export const SearchBar = styled.input`
  width: 80%;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  text-align: center;
  padding: 10px;
  &::placeholder {
    text-align: center;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  border: none;
  background-color: #66a3ff;
`;
export const LocationIcon = styled(HiLocationMarker)`
  color: #1f1f14;
  font-size: 20px;
`;

export const SearchIcon = styled(BiSearch)`
  color: #ffcc00;
  font-size: 20px;
`;

export const Temperture = styled.ul`
  padding: 10px;
  width: 10%;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 500;
  background-color: #f9c400;
  border-radius: 6px;
  color:white;
`;

export const ActualDate = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
  gap: 15px;
`;
export const Dates = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #696969;
`;
export const Time = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #696969;
`;

export const Where = styled.p` 
    font-size: 50px;
    text-align: center;
    font-weight: 500;
    margin-top:25px;
    color: #353535;
`

export const TypeWeather = styled.p` 
    font-size:20px;
    text-align: center;
    margin-top: 35px;
    color: #2e5ab4;
    font-weight: 500;
`
export const WeatherDiv = styled.div` 
    display: flex;
    margin:0 auto;
    margin-top:2%;
    width: 40%;
    justify-content: space-between;
  align-items: center;
`
export const IconWeather = styled(FiWind)` 
  font-size: 40px;
`
export const WeatherText = styled.p` 
    font-size: 45px;
    text-align: center;
    color:#494949;
`
export const MoreInfo = styled.ul` 
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
    color: #696969;
`
export const SpanNumber = styled.span` 
    font-weight: 500;
    font-size: 16px;
    margin-left: 10px;
`

export const OtherInfo = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    width: 70%;
    margin: 0 auto;
    margin-top: 4%;
    color: #696969;
`
export const InfoLi = styled.li`
    margin-left: 10px;
`

export const InfoSpan = styled.span` 
    font-weight: 500;
    font-size: 18px;
    color: #084064;
    margin-left: 5px;
`

export const Datos1 = styled.p` 
    font-weight:600;
    margin: 0 auto;
    margin-top: 4%;
    width: 55%;
    font-size: 18px;
    border-bottom: 2px solid #2e5ab4;
    line-height: 40px;
`

export const DivGeneral = styled.div` 
    display:grid;
    grid-template-columns: auto auto auto auto auto ;
    justify-content: space-between;
    align-items: center;
    width: 55%;
    margin: 0 auto;
    margin-top: 2%;
`

export const LocalStorage = styled.p`
    color: #e7e7e7;   
    margin: 0 auto;
    margin-top: 5%;
    text-align: center;
    cursor: pointer;
    &:hover{
      color: #5c9ff9; 
    }
`

export const DivHour = styled.div` 
    text-align: center;
`

export const Hour = styled.p`
    font-weight: 500;
`
export const IconCloud = styled.img` 
  width: 40px;
`

export const IconSun = styled.img` 
  width:50px
`
export const Grados = styled.p` 
   font-weight: 600;
   font-size: 20px;
   margin-top: 15px;
`

export const Datos2 = styled.p` 
    font-weight:600;
    margin: 0 auto;
    margin-top: 4%;
    width: 55%;
    font-size: 18px;
    border-bottom: 2px solid #2e5ab4;
    line-height: 40px;
`

export const DivGeneral1 = styled.div` 
    display:grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    margin-top: 2%;
`

export const DivHour1 = styled.div` 
    text-align: center;
`

export const Day = styled.p`
    font-weight: 500;
`
export const IconCloud1 = styled.img` 
  width: 40px;
`

export const IconSun1 = styled.img` 
  width:50px
`
export const Grados1 = styled.p` 
   font-weight: 600;
   font-size: 20px;
   margin-top: 15px;
`

export const FootDiv = styled.footer`
 background-color: #212529;
 width: 100%;
 margin-top: 5%;
 padding: 25px;
`

export const Foot = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
`

export const LogoImg = styled.img` 
  width: 80px;
  height: 80px;
`

export const ItemUl = styled.ul` 
  display: flex;
justify-content: flex-end;

`

export const GooglePlay = styled.img` 
  width: 15%;
`

export const AppStore = styled.img` 
  width:15%
`

export const Copy = styled.p` 
  font-size: 10px;
  color:white;
  text-align: center;
  margin-top: 10px;
  letter-spacing: 2px;
`

export const RegisterDiv = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 10%;
`

export const RegisterTittle = styled.p`
  font-size: 55px;
  font-weight: 700;
  width: 80%;
  margin: 0 auto;
  margin-top: 2%;
  color:#292929
`

export const RegisterText = styled.p`
  font-size:16px;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  color: #292929;
`

export const SocialDiv = styled.div` 
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 2%;
  gap:30px;
`

export const InfoLogin = styled.p`
font-size:16px;
  width: 80%;
  font-weight: 600;
  margin: 0 auto;
  margin-top: 10px;
  color: #292929;
  margin-top: 8%;
  border-top: 1px solid #7c7c7c;
  line-height: 50px;
`

export const ImgGoogle = styled.img` 
  width:5%;
  cursor:pointer;
`

export const ImgFace = styled.img` 
  width:5%;
  cursor:pointer;
`

export const FormRegister = styled(Form)` 
  margin:0 auto;
  margin-top: 2%;
  width: 70%;
  border-left: 1px solid #acd8f4;
  padding: 5%;
  border-radius: 20px;

`

export const ButtonRegister = styled(Button)`
background-color: #66a3ff;
font-weight: 500;
letter-spacing: 2px;
border:none;
&:hover{
    color:#ffcc00
}
`


/* LOGIN ----------- */

export const LoginDiv = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 10%;
`

export const LoginTittle = styled.p`
  font-size: 55px;
  font-weight: 700;
  width: 80%;
  margin: 0 auto;
  margin-top: 2%;
  color:#292929
`

export const LoginText = styled.p`
  font-size:16px;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  color: #292929;
`

export const SocialDiv2 = styled.div` 
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 2%;
  gap:30px;
`

export const InfoLogin2 = styled.p`
font-size:16px;
  width: 80%;
  font-weight: 600;
  margin: 0 auto;
  margin-top: 10px;
  color: #292929;
  margin-top: 8%;
  border-top: 1px solid #7c7c7c;
  line-height: 50px;
`

export const ImgGoogle2 = styled.img` 
  width:5%;
  cursor:pointer;
`

export const ImgFace2 = styled.img` 
  width:5%;
  cursor:pointer;
`

export const FormLogin = styled(Form)` 
  margin:0 auto;
  margin-top: 2%;
  width: 70%;
  border-right: 1px solid #acd8f4;
  padding: 5%;
  border-radius: 20px;

`

export const ButtonLogin = styled(Button)`
background-color: #66a3ff;
font-weight: 500;
letter-spacing: 2px;
border:none;
margin-top: 20px;
&:hover{
    color:#ffcc00
}
`



/* GALLERY */

export const GalleryDiv = styled.div` 
  display:grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 80%;
  margin: 0 auto;
  margin-top: 2%;
  padding: 20px;
`

export const GalleryTittle = styled.p` 
  font-size: 35px;
  text-align: center;
  border-bottom: 2px solid #cbcbcb;
  width: 80%;
  margin:0 auto;
  margin-top: 8%;
  line-height: 50px;
  font-weight: 700;
  color: #2e5ab4
`

export const PhotoDiv = styled.div` 
  margin:0 auto;
`

export const PhotoWhere = styled.p` 
  font-size: 18px;
  display:flex;
  gap:12px;
  align-items: center;
  width: 90%;
  margin:0 auto;
  margin-bottom: 10px;
`

export const PhotoPic = styled.img` 
  width: 280px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  margin:0 auto;
`

export const DivComment = styled.div` 
  display:flex;
  align-items: center;
  padding: 10px;
  height: 100px;
`

export const DivDel = styled.div` 
  display:flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
`

export const Edit = styled.p`
font-size: 12px;
  color:white;
  cursor: pointer;
  &:hover{
    color:#226cc3;
  }
`

export const Delete = styled.p` 
  font-size: 12px;
  color:white;
  cursor: pointer;
  &:hover{
    color:#226cc3;
  }
`

export const UserName = styled.p` 
  font-size: 12px;
  text-align: right;
  font-weight: 500;
  color:#353535;
`

export const UserPic = styled.img`
width:30px;
height: 30px;
border-radius: 50px;
border:2px solid rgb(34, 108, 195)
`

export const PhotoPrg = styled.p` 
  font-size:12px;
  margin: 0 auto;
  color:#525252;
  width:82%;
`

export const CrearTitle = styled.p` 
  font-size: 40px;
  font-weight: 600;
  color:#226cc3;
  width:80%;
  margin: 0 auto;
  margin-top: 8%;
`

export const CrearText = styled.p` 
  font-size:16px;
  color:#4b4b4b;
  width:80%;
  margin: 0 auto;
  margin-top: 20px;
`

export const FormCrear = styled(Form)`
  width: 80%;
  display:flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 5%;
`

export const FirstPart = styled.div` 
  width: 50%;
`

export const SecondDiv = styled.div` 
  width: 40%;
`

export const SubmitBtn = styled(Button)` 
  position:relative;
  margin-right: 0;
  background-color: #226cc3;
  border:none;
  float: right;
`