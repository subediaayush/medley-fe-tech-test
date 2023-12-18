import styled from "styled-components";

export const Button = styled.button<{ disabled?: boolean | undefined}>`
    background: None;
    color: ${props => props.disabled ? '#cccccc': '#5599bb'};
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${props => props.disabled ? '#cccccc': '#5599bb'};
    border-radius: 3px;
`

export const Input = styled.input`
    background: None;
    color: #5599bb;
    font-size: 1em;
    padding: .5em .5em;
    min-width: 20em;
    border: 2px solid #5599bb;
    border-radius: 6px;
    placeholder: Hello

    ::disabled: {
        border: 2px solid #00000;
    }
`