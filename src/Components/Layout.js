import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import '../Styling/back.css';


export const Layout = (props) =>(
    
    <Container>
        {props.children}
    </Container>
)