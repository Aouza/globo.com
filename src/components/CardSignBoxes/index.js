import React from 'react';

import { Container } from './style';

const CardSignBoxes = ({ title, image }) => {
    return(
        <Container image={image}>
            <h2>{title}</h2>
        </Container>
    )
}

export default CardSignBoxes;