import styled from 'styled-components'



const Container = styled.div`
height:30px;
background-color: teal;
color: white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500;
`

const Anuncios = () => {
  return (
    <Container>
        Envío gratuito! en pedidos superiores a $2000
    </Container>
  )
}

export default Anuncios
