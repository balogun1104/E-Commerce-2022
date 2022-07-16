import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height:30px;
background-color: teal;
color: white;
font-weight: 500;
align-items: center;
font-size: 14px;
justify-content: center;
display: flex;
`

const Annocenment = () => {
    return(
        <Container>
        Super Deal ! Free Shipping on Orders Above $50
        </Container>
    )
}

export default Annocenment;