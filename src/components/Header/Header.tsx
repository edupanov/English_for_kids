import React, {useState} from 'react';
import Button from "./Button";
import Navbar from "./Burger/Navbar";
import s from "./Header.module.css"
import { CategoriesType } from '../../App';

export type PropsType ={
    title: CategoriesType[]
}

function Header(props:  PropsType) {
    const [value, setValue] = useState<boolean>(false)
    return (
        <div className={s.header}>
            <Navbar title={props.title}/>
            <Button
                isOn={value}
                handleToggle={() => setValue(!value)}
            />
        </div>
    );
}

export default Header;
