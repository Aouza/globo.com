import React from 'react';

import { Container } from './style.js';

const AsideArticles = ({image, title, description, type}) => {
    return (
        <Container type={ type }>
            <img src={ image } alt={ title }/>
            <h2>{ title }</h2>
            <p>{ description }</p>
        </Container>
    )
}

export default AsideArticles;