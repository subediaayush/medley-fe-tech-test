import styled from "styled-components";

export const Padding = styled.div<{ $left?: number | string; $right?: number | string; }>`
    padding-left: ${props => props.$left};
    padding-right: ${props => props.$right};
`

export const Row = styled.div<{ gap?: undefined | number | string; align?: string; }>`
    display: flex;
    gap: ${props => props.gap ?? 0};
    place-content: ${props => props.align ?? 'start'};
`

export const Column = styled(Row)`
    flex-direction: column; 
`

export const Table = styled.table`
    width: 100%
`

export const TableRow = styled.tr<{ gap?: undefined | number | string; alternate?: boolean | undefined}>`
    display: flex;
    gap: ${props => props.gap ?? 0};
    background-color: ${props => props.alternate ? '#f8f8f8' : null};
    height: 2em;
    padding-left: 1em;
`


export const TableCell = styled.td<{ colSpan: undefined | number }>`
    flex: ${props => props.colSpan ?? 1};
`

export const Body = styled.div`
    background-color: #fcfcfc;
    padding: 4em;
`