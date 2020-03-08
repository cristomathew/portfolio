import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import '../Styling/back.css';

const Styles = styled.div`
    
    .overlay{
        background-color: #fff;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    .bg {
        height: 100%;
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
        overflow: hidden;

    }
    h1, p{
        color: white;
    
        &:hover{
        color: yellow;
        font-weight: bold;
        }
    }
`;
export const Jumbotron = () =>(
    <Styles>
        <Jumbo fluid className="bg">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
            <div className="overlay"></div>
            <Container >
                <h1>Welcome</h1>
                <p>Learn to Code</p>
            </Container>

        </Jumbo>
    </Styles>

)