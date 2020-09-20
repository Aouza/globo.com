import styled, { css } from 'styled-components';


const menuColors = {
    news: css`
        color: var(--color-dark-red);
    `,
    sport: css`
        color: var(--color-dark-green);
    `,

    entertainment: css`
        color: var(--color-dark-orange);
    `,

    tech: css`
        color: var(--color-dark-gray);
    `,

    videos: css`
        color: var(--color-dark-blue);
    `
}

export const Container = styled.li`

    display: flex;
    align-items: center;

    a{
        font-weight: 600;
        font-size: 20px;
        display: flex;
        align-items: center;
        padding: 10px 5px;
        margin: 4px;
        letter-spacing: -1px;

        svg{
            position: relative;
            top: 4px;
            font-weight: 600;
            
        }

        ${({type}) => menuColors[type]};

    }

`

