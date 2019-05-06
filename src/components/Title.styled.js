import styled from "styled-components"
import { colors } from "../styles/variables"

export const TitleStyled = styled.h1`
  width: fit-content;
  color: ${props => (props.inverted ? colors.white : colors.black)};
  font-size: 50px;
  font-weight: normal;
  ${props => (props.hero ? HeroTitle : null)};
  ${props => (props.minor ? MinorTitle : null)};
`

const HeroTitle = `
    position: relative;
    font-size: 70px;
    font-weigt: bold;
    color: ${colors.white};

    &:before {
        position: absolute;
        background: ${colors.white};
        height: 10px;
        top: calc(50% - 5px);
        width: 260px;
        left: -300px;
        content: "";
    }
`

const MinorTitle = `
    position: relative;
    padding-bottom: 27px;
    font-size: 27px;
    font-weight: bold;

    &:before {
        position: absolute;
        background: ${colors.golden}
        height: 2px;
        bottom: 0;
        width: 120px;
        left: -6rem;
        content: "";

        @media (max-width: 982px) {
            left: -4rem;
        }

        @media (max-width: 768px) {
            left: -3rem;
        }

        @media (max-width: 576px) {
            left: -3rem;
        }
    }
`
