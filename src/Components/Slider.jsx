import { ArrowLeftOutlined, ArrowRightOutlined} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

// for the container tag
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: coral;
position : relative;
overflow: hidden;
`;

//for the wrapper
const Wrapper = styled.div `
  
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

        </Wrapper>
        <Arrow  direction = 'right'> 
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
