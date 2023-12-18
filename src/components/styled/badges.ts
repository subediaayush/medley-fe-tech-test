import styled from "styled-components";

export const Plain = styled.div<{ $color?: string; }>`
    height: auto;
    width: 0.75em;
    background-color: ${props => props.$color};
    border-radius: 0.125rem; 

`