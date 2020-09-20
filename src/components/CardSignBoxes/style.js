import styled from 'styled-components';


export const Container = styled.div`
    background-image: url(${({image}) => `'${image}'`});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;