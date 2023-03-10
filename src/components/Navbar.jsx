import React from 'react'
import styled from 'styled-components'
import {Badge, Search} from "@mui/icons-material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive"


const Container = styled.div`
height: 60px;
${mobile({height:"50px"})}
`
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
align-items:center;
justify-content: space-between;
${mobile({padding:"10px 0px"})}
`;

const Languaje = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display:"none"})}
`;
const SearchConteiner = styled.div`
border:0.5px solid lightgray;
display: flex;
align-items:center;
margin-left:25px;
padding:5px;
`;

const Input = styled.input`
border:none;
${mobile({width:"50px"})}
`
const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize:"24px"})}
`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Center = styled.div`
flex:1;
text-align:center;
`;
const Rigth = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2,justifyContent:"center"})}
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
${mobile({fontSize:"12px",marginLeft:"10px"})}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
       <Left>
        <Languaje>ES</Languaje>
        <SearchConteiner>
          <Input placeholder='Buscar'/>
          <Search style={{color:"grey", fontSize:16}}/>
        </SearchConteiner>
       </Left>
       <Center><Logo>W&M.</Logo></Center>
       <Rigth>
         <MenuItem>Registrat√©</MenuItem>
         <MenuItem>Sing in</MenuItem>
         <MenuItem>
           <Badge badgecontent={4} >
             <ShoppingCartOutlinedIcon />
           </Badge>
         </MenuItem>
       </Rigth>
      </Wrapper>
    </Container>
  )
}

export default Navbar
