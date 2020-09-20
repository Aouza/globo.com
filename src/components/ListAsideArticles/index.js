import React from 'react';
import { notices } from '../../services/api';

import AsideArticles from './AsideArticles';

import { Container } from './style';

const ListAsideArticles = ({data}) => {
    return(
        <Container>
            {data.slice(-3).map(notice => <AsideArticles type={notice.type} title={notice.title} description={notice.description} image={notice.image} />)}
        </Container>
    )
}

export default ListAsideArticles;