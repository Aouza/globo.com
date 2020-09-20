import React from 'react';

import BoxNotices from '../BoxNotices';
import filteredType from '../../tools/filterTypeNotices';
import { Container } from './style';

import { notices } from '../../services/api';

const filteredNews = filteredType(notices, 'news').slice(-6);

const GridMainCall = () => {
    return(

        <Container>

            {filteredNews.map((notice, i) => i > 2 ? <BoxNotices key={i} image={notice.image} hasImage={false} title={notice.title} description={notice.description}/> : <BoxNotices key={i} image={notice.image} hasImage={true} title={notice.title} description={notice.description}/>)}

        </Container>
    );
}

export default GridMainCall;