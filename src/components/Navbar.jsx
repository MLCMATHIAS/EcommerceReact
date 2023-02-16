import React from 'react'
import styled from 'styled-components'
import {Badge, Search} from "@mui/icons-material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Container = styled.div`
height: 60px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
align-items:center;
justify-content: space-between;
`;

const Languaje = styled.span`
font-size: 14px;
cursor: pointer;
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
`
const Logo = styled.h1`
font-weight: bold;
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

`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
       <Left>
        <Languaje>EN</Languaje>
        <SearchConteiner>
          <Input/>
          <Search style={{color:"grey", fontSize:16}}/>
        </SearchConteiner>
       </Left>
       <Center><Logo>MLC.</Logo></Center>
       <Rigth>
         <MenuItem>Registrarce</MenuItem>
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
