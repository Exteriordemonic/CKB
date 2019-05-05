import styled from 'styled-components';

export const ContainerStyled = styled.div`
    padding: ${props => props.small ? '0 6rem' : '0 12rem'};
    height: 100%;
    max-width: 100%;

    @media (max-width: 982px) {
        padding: ${props => props.small ? '0 4rem' : '0 8rem'};
    }

    @media (max-width: 768px) {
        padding: ${props => props.small ? '0 3rem' : '0 6rem'};
    }

    @media (max-width: 576px) {
        padding: ${props => props.small ? '0 1rem' : '0 2rem'};
    }
`
