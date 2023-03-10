import styled from "styled-components";


const Container = styled.div`
width:100vw;
height:100vh;
background: url("https://cdn.pixabay.com/photo/2017/09/01/21/53/sunglasses-2705642_1280.jpg");
display:flex;
align-items:center;
justify-content:center;
`;
const Wrapper = styled.div`
width:25%;
padding:20px;
background:white;
`;
const Form = styled.form`
display:flex;
flex-direction:column;
`;

const Title = styled.h1`
font-size:24px;
font-weight:300;
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0 ;
padding:10px;
`;

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-botton:10px;
`;
const Link = styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`;

const Login = () => {
  return (
   <Container>
    <Wrapper>
        <Title>Registrarce</Title>
        <Form>
            <Input placeholder="Username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>NO RECUERDA SU PASSWORD?</Link>
            <Link>CREAR UNA NUEVA CUENTA</Link>
          
        </Form>
     </Wrapper>
   </Container>
  )
}

export default Login
