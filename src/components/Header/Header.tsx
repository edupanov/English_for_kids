import React from 'react';
import Navbar from "./Burger/Navbar";
import { CategoriesType } from '../../App';
import {StyledHeader} from "../../styles/StyledHeader";

export type PropsType ={
    title: CategoriesType[]
}

function Header(props:  PropsType) {
    return (
        <StyledHeader>
            <Navbar title={props.title}/>
        </StyledHeader>
    );
}

export default Header;
