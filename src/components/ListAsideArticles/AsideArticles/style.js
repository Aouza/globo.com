import styled from 'styled-components';


export const Container = styled.li`

    margin-bottom: 2.5rem;

    &:nth-child(2){
       > p {
              display: none;
       }
    }

    &:nth-child(3){
       > h2 {
              display: none;
       }

       > p {
              margin-top: .5rem;
       }
    }

    > img {
            width: 240px;
            border-radius: 3px;
        }
     
     > h2 {
            font-size: 1.375rem;
            line-height: 1.25;
            letter-spacing: -.035em;
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
    
`