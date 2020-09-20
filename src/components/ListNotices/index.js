import React from 'react';

import { Container } from './style';

const ListNotices = ({image, title, type}) => {
    return (
        <Container type={type}>
            <img src={ image } alt={title}/>
            <h2>{ title }</h2>
        </Container>
    )
}

export default ListNotices;
