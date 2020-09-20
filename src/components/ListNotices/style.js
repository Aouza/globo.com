import styled from 'styled-components';

export const Container = styled.li`

    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding:  1.5rem 0;
    margin: 0 .75rem;

    &:nth-child(1){
        grid-template-columns: unset;

        > img {
            width: 398px;
            margin-bottom: .5rem;
        }

        > h2 {
            font-size: 1.5rem;
            line-height: 1.3;
            letter-spacing: -.03em;
        }
    }

    &:nth-child(4), &:nth-child(7){
        grid-template-columns: unset;

        > img {
            display: none
        }
    }
  
    > img {
        width: 180px;
        border-radius: 3px;
    }

    > h2 {
        font-size: 1.125rem;
        line-height: 1.3;
        letter-spacing: -.035em;
    }

    & + li {
        border-top: 1px solid var(--color-border);
        
    }

`;