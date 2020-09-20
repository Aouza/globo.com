import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid var(--color-field-border);
    padding: 0px 10px;
    margin-right: 10px;
    border-radius: 3px;

    > svg {
        margin-right: 10px;
        font-size: 20px;
        color: var(--color-dark-blue);
    }

    > input {
        width: 250px;
        padding: 12px;

    }
`;