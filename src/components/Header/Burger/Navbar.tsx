import React from 'react';
import styled from "styled-components";
import Burger from "./Burger";
import {PropsType} from "../Header";

const Nav = styled.nav`
    width: 100%;
    height: 45px;
    padding:0 20px;
    
        .logo {
            padding: 15px 0;
        }
`

function Navbar(props: PropsType) {
    return (
        <Nav>
            <Burger title={props.title}/>
        </Nav>
    );
}

export default Navbar;
