import React from 'react';

import { Container } from './style';

const BoxNotices = ({image, title, description, hasImage}) => {
    return(

        <Container hasImage={hasImage}>
            <a href="#">
                <img src={ image } alt="Thumb notice"/>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </a>
        </Container>
    );
}

export default BoxNotices;