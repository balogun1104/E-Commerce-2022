import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

// for the container tag
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: coral;

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
postion: absolute;
top: 0
bottom: 0;
margin: auto;
direction: flex-end;
`

const Slider = () => {
  return (
    <Container>
        {/* for the left side arrow */}
        <Arrow >
            <ArrowLeftOutlined />
        </Arrow>
        {/* for the right side arrow */}
        <Arrow>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
