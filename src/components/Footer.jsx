
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Container = styled.div`
display:flex;
`;
const Left = styled.div`
display: 1;
display:flex;
flex-direction: column;
padding:20px;
`;
const Logo = styled.h1`

`;

const Desc = styled.p`
margin:20px 0px;
width:260px;
`;
const SocialContainer = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;
const Center = styled.div`
flex:1;
padding:20px;
`;
const Title = styled.h3`
margin-botton:30px;
`;
const List= styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListIten = styled.li`
width:50%;
`;

const Right = styled.div`
flex:1;
padding:20px;
`;
const ContacIten  = styled.div`
margin-botton:20px;
display:flex;
align-items:center;
`;
const Payment  = styled.img`
margin:3px;
width:60%;

`;
const Copyright  = styled.div`
width:50%;
background:gray;
color:white;
margin:30px;
`;


const Footer = () => {
  return (
   <Container>
     <Left>
      <Logo>SHOPPING MLC</Logo>
      <Desc>
        Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Illum hic, commodi odio saepe fugiat, facilis, deleniti nisi nulla ipsum libero dolorem velit et labore tempore veniam beatae temporibus incidunt ex?
      </Desc>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <FacebookIcon />
        </SocialIcon>
      <SocialIcon color="E4405F">
        <InstagramIcon />
      </SocialIcon>
      <SocialIcon color="55ACEE">
        <TwitterIcon/>
      </SocialIcon> 
      </SocialContainer>
     </Left>
     <Center>
      <Title>Links Utiles</Title>
      <List>
        <ListIten>Home</ListIten>
        <ListIten>Compras</ListIten>
        <ListIten>Hombres Fashion</ListIten>
        <ListIten>Mujeres Fashion</ListIten>
        <ListIten>Accesorios</ListIten>
        <ListIten>My Cuenta</ListIten>
        <ListIten>seguimiento del pedido</ListIten>
        <ListIten>Lista de Deseos</ListIten>
        <ListIten>Terminos</ListIten>
      </List>

     </Center>

     <Right>
       <Title>Contacto</Title>
       <ContacIten>
        <AddLocationIcon style={{marginRight:"10px"}} />2435 Buenos Aires, Capital Federal.
       </ContacIten>
       <ContacIten>
       <LocalPhoneIcon style={{marginRight:"10px"}}/>+54 1163032655
       </ContacIten>
       <ContacIten>
        <MailOutlineIcon style={{marginRight:"10px"}}/> mathias_mlc@outlook.com.ar
       </ContacIten>
       <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
       <Copyright>Copyright 2023 © -Mathias-Mlc www.yourSiteNow.com.ar </Copyright>
     </Right>
     
   </Container>
  )
}

export default Footer
