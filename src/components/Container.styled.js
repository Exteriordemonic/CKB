import styled from 'styled-components';

export const ContainerStyled = styled.div`
    padding: ${props => props.small ? '0 6rem' : '0 12rem'};
    height: 100%;
    max-width: 100%;

    @media (max-width: 1024px) {
        padding: ${props => props.small ? '0 100px' : '0 100px'};
    }

    @media (max-width: 768px) {
        padding: ${props => props.small ? '0 50px' : '0 50px'};
    }
`
