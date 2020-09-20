import styled, { css } from 'styled-components';

export const Container = styled.li`

width: calc(100%/3);
margin-bottom: 1.6rem;
padding-right: 1.6rem;
border-top: 1px solid var(--color-border);
padding-top: 1.6rem;

a{
    color: inherit;

    > img {

    ${({hasImage}) => !hasImage && css `display: none`};
    width: 100%;
    border-radius: 4px;
    }

    > h2 {
        font-size: 1.375rem;
        line-height: 1.25;
        letter-spacing: -.04em;
        margin-bottom: .75rem;
    }

    > p {

        font-size: 1rem;
        line-height: 1.25;
        letter-spacing: -.035em;
        padding-left: .8em;
        position: relative;

        &::before{
            content: "";
            width: 5px;
            height: 5px;
            background-color: var(--color-dot);
            display: inline-block;
            position: absolute;
            border-radius: 100rem;
            left: 0;
            top: 17%;
        }
    }
}

`;