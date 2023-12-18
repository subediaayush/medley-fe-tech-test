import styled from "styled-components";

export const Padding = styled.div<{ $left?: number | string; $right?: number | string; }>`
    padding-left: ${props => props.$left};
    padding-right: ${props => props.$right};
`

export const Row = styled.div<{ gap: number | string}>`
    display: flex;
    gap: ${props => props.gap}
`