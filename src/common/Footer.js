import styled from "styled-components"
import React from "react"

import { Colors} from '../vendors/variables'

const Footer = (props) => {
    return (
        <Wrapper className="text">
            © copyrights 2019 MCT
        </Wrapper>
    )
}


const Wrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: ${Colors.special};
    color: ${Colors.light};
    text-transform: uppercase;
`


export default Footer;