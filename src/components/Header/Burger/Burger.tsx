import React, {useState} from 'react';
import LeftNav from "./LeftNav";
import {PropsType} from "../Header";
import {StyledBurger} from "../../../styles/StyledBurger";


function Burger(props: PropsType) {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <StyledBurger
                open={open}
                onClick={() => setOpen(!open)}
            >
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <LeftNav
                open={open}
                tittle={props.title}
            />

        </>
    );
}

export default Burger;
