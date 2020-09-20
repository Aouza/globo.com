import styled from 'styled-components';

export const Container = styled.header`
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 40px;
`;

export const Header = styled.div`

    max-width: 79.0625rem;
    width: 100%;
    margin: 0 auto;
    padding: .1rem 0;

    display: flex;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;

        &:nth-child(1){
            > img{
                width: 100px;
                margin-right: 14px;
            }
        }

        & + div {
            display: grid;
            grid-template-columns: auto auto auto auto;
            justify-content: flex-end;
            align-items: center;

            a{
                font-size: 11px;
                color: var(--color-gray-text);
                display: flex;
                align-items: center;

                & + a{
                    margin: 0 10px;

                    > svg {
                        font-size: 20px;
                    }
                }
            }
        }

        > svg {
            font-size: 28px;
            color: var(--color-dark-blue);
            cursor: pointer;

        }
    }

    

`