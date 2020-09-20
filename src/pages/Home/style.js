import styled, { css } from 'styled-components';

const colorNotices = {
    news: css `
        color: var(--color-red-content);
    `,
    sport: css`
        color: var(--color-green-content);
    `,
    entertainment: css`
        color: var(--color-orange-content);
    `
}


export const Container = styled.div`
    max-width: 79.0625rem;
    margin: 0 auto 2rem auto;

    display: grid;
    grid-template-areas: 
    'articles articles articles'
    'sign-boxes sign-boxes sign-boxes'
    'notices-boxes sport-boxes entertainment-boxes'
    'video-section video-section video-section' 
    ;
    
`;

export const Articles = styled.div`
    grid-area: articles;

    display: grid;
    grid-template-columns: 5fr 2fr 2fr;

    margin-bottom: 3.75rem;
`;

export const MainArticles = styled.div`
    ${({type}) => colorNotices[type]}

    margin-right: 20px;
    border-right: 1px solid var(--color-border);
    padding-right: 1.6rem;
`;

export const FirstAsideArticles = styled.div`
    ${({type}) => colorNotices[type]}   
    border-right: 1px solid var(--color-border);
    
`

export const SecondaryAsideArticles = styled.div`
    ${({type}) => colorNotices[type]}   
`;


export const SignBoxes = styled.div`
    grid-area: sign-boxes;
    
    display: grid;
    grid-template-columns: .8fr 1fr 1fr 1fr;
    gap: .15rem;
    margin-bottom: 3.75rem;

    > div {
        padding: 20px;
        border-radius: 3px;

        > h2 {
            font-size: 1rem;
            line-height: 1.25;
            letter-spacing: -.035em;
            color: var(--color-white-text);
    }

    &:nth-child(1) {
        background-color: var(--color-red-content);
        color: var(--color-white-text);

        > h2 {
            
                &::after{
                    content: '';
                    width: 20%;
                    height: 4px;
                    display: block;
                    background-color: var(--color-white-text);
                    opacity: .5;
                    margin: .4rem 0;
                }
            }

            > h3 {
                font-size: 1.75rem;
                line-height: 1.08;
                letter-spacing: -.03em;
                margin-bottom: .5rem;
            }

            > a {
                color: var(--color-white-text);
                font-weight: 600;
                opacity: .5;
                font-size: .875rem;
                line-height: 1.43;
                letter-spacing: -.035em;
            }

        }
    }

    > div + div{
        
        position: relative;

        > h2 {
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 1rem;
            z-index: 1;
            font-size: 1.125rem;
            line-height: 1.2;
            letter-spacing: -.035em;
        }

        
        &::after {
            content: "";
            position: absolute;
            background-image: linear-gradient(180deg,transparent 60%,rgba(0,0,0,.6));
            background-color: transparent;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
        }
        
    }

`;

export const NoticesBoxes = styled.ul`
    grid-area: notices-boxes;
    ${({type}) => colorNotices[type]}   
`;

export const SportBoxes = styled.ul`
    grid-area: sport-boxes;
    ${({type}) => colorNotices[type]}   
`;

export const EntertainmentBoxes = styled.ul`
    grid-area: entertainment-boxes;
    ${({type}) => colorNotices[type]}   
`;

