import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anuncios from "../components/Anuncios";
import Newsletter from "../components/Newsletter";
import Footer  from "../components/Footer"; 
import {  Add, Remove, } from "@mui/icons-material";


const Container = styled.div`
`;
const Wrapper = styled.div`
padding:50px;
display:flex;
`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:100%;
height:90vh;
`;
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`;
const Title = styled.h1`
font-weight:200;
`;
const Desc = styled.p`
margin:20px 0px;
`;
const Price = styled.span`
font-weight:100;
font-size:40px;
`;
const FilterContainer = styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
`;
const Filter = styled.div`
display:flex;
align-items:center;
`;
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`;
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props => props.color};
margin:0px 5px;
cursor:pointer;
`;
const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`;
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`;
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin: 0px 5px;

`;
const Button = styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color: grey;
}
`;

const Product = () => {
  return (
   <Container>
     <Navbar/>
     <Anuncios/>
     <Wrapper>
        <ImgContainer>
          <Image src="https://img.freepik.com/foto-gratis/hermosa-chica-sexy-sonriente-hermosa-sueter-verde-moda-mujer-posando-gafas-sol-redondas-modelo-divirtiendose_158538-5263.jpg?w=740&t=st=1676567877~exp=1676568477~hmac=6e6d998d33d018fda292c4c95deaab5fe1a3aa7c1ec916b13062fff4e8a668fd"/>
        </ImgContainer>
        <InfoContainer>
        <Title>sadd dasd</Title>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sapiente ipsum quod laudantium vitae dolor ex? Quam quaerat optio temporibus sunt, ad laudantium sint a, sequi molestiae delectus ipsum nemo?</Desc>
        <Price>$2200</Price>
        <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
            </Filter>
            <Filter>
                <FilterTitle disabled selected>Talle</FilterTitle>
                <FilterSize >
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    <FilterSizeOption>XLL</FilterSizeOption>
                </FilterSize>
            </Filter>
        </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
     </Wrapper>
     <Newsletter/>
     <Footer/>
   </Container>
  )
}

export default Product
