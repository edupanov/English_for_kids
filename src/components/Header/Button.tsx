import React from 'react';
import styled from "styled-components";

type ButtonType  = {
    isOn: boolean
    handleToggle: () => void
}

const StyledCheckbox = styled.div<{ isOn: boolean }>`
position: relative;
right: 50px;
.react-switch-checkbox {
  height: 0;
  width: 0;
  visibility: hidden;
}
.react-switch-label:before {
content: 'Off';
position: relative;
right: 45px;
}
.react-switch-label:after {
position: relative;
right: -50px;
content: 'Play';
}
.react-switch-label {
  display: flex;
  position: absolute;
  top: 2px;
  right: 80px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
      font-size: 1.5rem;

  width: 80px;
  height: 40px;
  background: ${({isOn}) => !isOn ? '#646464' : '#e2d211'};
  border-radius: 80px;
  transition: background-color .2s;

  .react-switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 36px;
    height: 36px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
}

.react-switch-checkbox:checked + .react-switch-label .react-switch-button {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

.react-switch-label:active .react-switch-button {
  width: 60px;
}
`

function Button(props:ButtonType) {
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
