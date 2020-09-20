import React from 'react';

import { notices, signData } from '../../services/api';
import filteredType from '../../tools/filterTypeNotices';
import MainCall from '../../components/MainCall';
import GridMainCall from '../../components/GridMainCall';
import ListAsideArticles from '../../components/ListAsideArticles';
import JustTitleNotices from '../../components/JustTitleNotices';
import CardSignBoxes from '../../components/CardSignBoxes';
import ListNotices from '../../components/ListNotices';

import { Container, Articles, MainArticles, SecondaryAsideArticles, FirstAsideArticles, SignBoxes, NoticesBoxes, SportBoxes, EntertainmentBoxes } from './style';

const filteredNews = filteredType(notices, 'news');
const filteredSport = filteredType(notices, 'sport');
const filteredEntertainment = filteredType(notices, 'entertainment');

const lastMainCall = filteredNews[filteredNews.length -1];

const Home = () => {
    return( 
        <Container>
            <Articles>
                <MainArticles type={lastMainCall.type}>
                    <MainCall title={lastMainCall.title} />

                    {filteredNews.slice(-3)
                    .map(notice => <JustTitleNotices key={notice.title} description={false} title={notice.title} />)
                    }
                    
                    <GridMainCall />
                </MainArticles>
                <FirstAsideArticles type={filteredSport[0].type}>
                     <ListAsideArticles data={filteredSport}/>      
                </FirstAsideArticles>
                <SecondaryAsideArticles type={filteredEntertainment[0].type}>
                    <ListAsideArticles data={filteredEntertainment}/>    
                </SecondaryAsideArticles>
            </Articles>
            <SignBoxes>
                <div>
                    <h2>ASSINE O GLOBO</h2>
                    <h3>Conteúdo exclusivo em tempo real</h3>
                    <a href="#">ACESSE AGORA</a>
                </div>
                {signData.map(data => <CardSignBoxes image={data.image} title={data.title} />)}
                
            </SignBoxes>
            <NoticesBoxes type={filteredNews[0].type}>
                {filteredNews.slice(-10).map(news => <ListNotices image={news.image} title={news.title} />)}
            </NoticesBoxes>
            <SportBoxes type={filteredSport[0].type}>
                {filteredSport.slice(-10).map(sport => <ListNotices image={sport.image} title={sport.title} />)}
            </SportBoxes>
            <EntertainmentBoxes type={filteredEntertainment[0].type}>
                {filteredEntertainment.slice(-10).map(entertainment => <ListNotices image={entertainment.image} title={entertainment.title} />)}
            </EntertainmentBoxes>
        </Container>
    );
}

export default Home;