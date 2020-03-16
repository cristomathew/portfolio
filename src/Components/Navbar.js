import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
        position: fixed;
        width: 100%;
        &:hover{
            color: white;
        }
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        &:hover{
        color: white;
        font-weight: bold;
        }
    }
    @media only screen and (max-width: 767px) {
        .navbar {
          position:relative;
        }
        
      }
`;
export const NavigatorBar = () => (
    <Styles>
        <Navbar expand="lg"  variant="dark">
            <Navbar.Brand href="/">PortFolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

