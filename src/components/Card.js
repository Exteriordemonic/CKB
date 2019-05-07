import styled from "styled-components"
import React from "react"
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <CardStyled as="a" href="https://www.facebook.com/pg/MCTreningowe">
            <CardImage src={props.image}></CardImage>
            <CardTitle className="subtitle bold">{props.title}</CardTitle>
            <CardText className="text">{props.children}</CardText>
        </CardStyled>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

const CardStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-decoration: none;
`

const CardImage = styled.img`
    height: 200px;
    width: 100%;
    object-fit: contain;
`

const CardTitle = styled.h3`
    color: black;
    margin: 20px 0;
    font-size: 24px;
`

const CardText = styled.p`
    font-size: 16px;
    color: black;
`


export default Card;