import styled from 'styled-components';


export const Container = styled.h2`

    font-size: 1.125rem;
    line-height: 1.2;
    letter-spacing: -.035em;

    &::before{
        content: '';
        width: 5px;
        height: 5px;
        background: var(--color-dot);
        display: inline-block;  
        border-radius: 50px;
        vertical-align: middle;
        margin-right: .8rem;
    }
    
    & + h2{
        margin-top: .3rem;
    }
`;