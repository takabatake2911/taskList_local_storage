import React, { FC } from 'react';
import styled from 'styled-components';
type PropsType = {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    word: string;
};

const Container = styled.div`
    position: relative;
    display: block;
    /* size */
    width: auto;
    height: auto;
    /* margin */
    margin-top: 1rem;
    margin-right: 5vw;
    margin-bottom: 0;
    margin-left: 5vw;
    /* padding */
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    /* border */
    border-width: 1;
    border-color: black;
    border-style: solid;
    border-radius: 1rem;
    /* font */
    font-size: 2.5rem;
    font-family: Arial, Helvetica, sans-serif;
    /* spacing */
    letter-spacing: 0.3rem;
    word-spacing: 10rem;
    word-wrap: break-word;
    /* color */
    background-color: lightgreen;
`;
const Button = styled.button`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    /* margin */
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0;
    /* padding */
    padding-top: 0.3rem;
    padding-right: 0.5rem;
    padding-bottom: 0.3rem;
    padding-left: 0.5rem;
    /* border */
    border-width: 1;
    border-color: black;
    border-style: solid;
    border-radius: 0.5rem;
    /* font */
    font-size: 1rem;
    /* color */
    background-color: white;
    color: black;
    &:hover {
        background-color: black;
        color: white;
    }
`;
const Card: FC<PropsType> = (props) => {
    return (
        <Container>
            {props.word}
            <Button onClick={props.handleClick}>×</Button>
        </Container>
    );
};

export default Card;
