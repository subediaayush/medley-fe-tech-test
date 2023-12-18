import styled from "styled-components";

export const Title = styled.h1`
    font-size: 1.5em;
`;

export const SubTitle = styled.h2`
    font-size: 1em;
`

export const TableItem = styled.span`
    font-size: 0.9em;
`

export const ValueItem = styled(TableItem)`
    font-weight: bold;
`

export const StatusChip = styled.span<{ status: string}>`
    background-color: ${props => {
        switch(props.status) {
            case 'Completed':
            case 'Paid':
                return '#60ca57'
            case 'Pending': 
                return '#c1c4c7'
            case 'Failed':
            case 'Error':
                return '#ea4335'
            default:
                return '#f5c02f'
        }
    }};
    padding: 3px 6px;
    font-size: 0.50em;
    font-weight: bold;
    border-radius: 0.5em;
`