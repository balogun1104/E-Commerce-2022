import { ArrowLeftOutlined, ArrowRightOutlined} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

// for the container tag
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position : relative;
overflow: hidden;
`; 

//for the wrapper
const Wrapper = styled.div `
  height: 100%;
`
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
`;


const Image = styled.img `
  height: 80%;
`
const ImgContainer = styled.div`
height: 100%;

flex: 1;
`;
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;

const Title = styled.h1 `
font-size: 70px;
`
const Desc = styled.p `
margin: 50px 0;
font-size: 20px;
font-weight: 500px;
letter-spacing: 3px;
`
const Button = styled.button `
font-size: 20px;
padding: 10px;
background-color: transparent;
cursor: pointer;
`
 
// for the arrow tag
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

`




const Slider = () => {
  return (
    <Container>
        {/* for the left side arrow */}
        <Arrow  direction = 'left'>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
          <Slide>
          <ImgContainer>
          <Image src="https://i.pinimg.com/564x/ca/44/46/ca4446d969af66b3f02308225ba2386b.jpg"/>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>        
          </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow  direction = 'right'> 
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
