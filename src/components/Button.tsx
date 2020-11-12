import React from 'react';
import { StyledCheckbox } from '../styles/StyledCheckbox';

type ButtonType = {
    isOn: boolean
    handleToggle: () => void
}


function Button(props: ButtonType) {
    return (
        <StyledCheckbox isOn={props.isOn}>
            <input
                checked={props.isOn}
                onChange={props.handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`}/>
            </label>
        </StyledCheckbox>
    );
}

export default Button;
