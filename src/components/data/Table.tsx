import { Component, ReactNode, useCallback, useEffect, useMemo, useState } from "react"
import { useApi } from "../../hooks/useApi"
import { Column, Row, Table, TableCell, TableRow } from "../styled/layout"
import { PayoutHistory, PayoutHistoryPayload } from "../../models/payoutHistory"
import { Pagination } from "./Pagination"
import { totalmem as totalItem } from "os"

export type RemoteTableProps = {
    headers: string[],
    headersMapping: { [key: string]: string },
    url: string,
    enablePagination?: boolean,
    cell: (value: any, key: string) => ReactNode
}

export type RemoteTableHeaderProps = {
    title: string
}

export const RemoteTable = ({ ...props }: RemoteTableProps) => {
    const headers = props.headers;
    const [apiValue, setValue] = useState<PayoutHistoryPayload>()
    const [apiState, setApiState] = useState('Loading')
    const [url, setUrl] = useState(props.url)

    useEffect(() => {
        setUrl(props.url)
    }, [props.url])

    const payoutApi = useApi(url);
    useEffect(() => {
        setApiState(payoutApi.state)
        if (payoutApi.state === 'Success') {
            setValue(payoutApi.data)
        }
    }, [payoutApi])

    const valueIndex = useMemo(() => headers.indexOf('Value'), [headers])

    const [currentPage, limit, totalItem] = useMemo(() => {
        const metadata = apiValue?.metadata
        if (metadata) {
            return [metadata.page, metadata.limit, metadata.totalCount / metadata.limit]
        } else {
            return [0, 0, 0]
        }
    }, [apiValue])

    const tableItem = useCallback((value: PayoutHistory, index: number) => headers.map((h, hIndex) => {
        const cellValue = value[props.headersMapping[h] as keyof PayoutHistory];
        return <TableCell key={index + '.' + h} colSpan={hIndex === valueIndex ? 1 : 2}>
            {props.cell(cellValue, props.headersMapping[h])}
        </TableCell>
    }), [])

    const onPaginationCallback = useCallback((page: number, limit: number) => {
        setUrl(`${props.url}?page=${page}&limit=${limit}`)
    }, [])

    return <Column gap="1em">
        <Column>
            <Table>
                <tbody>
                    <TableRow>
                        {headers.map((title, index) => {
                            return <TableCell key={title} colSpan={index === valueIndex ? 1 : 2}>
                                <td><span>{title}</span></td>
                            </TableCell>
                        })}
                    </TableRow>
                </tbody>
            </Table>
            <div>
                <Table>
                    <tbody>
                        {apiValue?.data ? apiValue.data.map((value, index) =>
                            <TableRow key={index} alternate={index % 2 === 0}>
                                {tableItem(value, index)}
                            </TableRow>)
                            : null}
                    </tbody>
                </Table>
                {apiState === 'Loading' ? <div>

                </div> : null}
            </div>
        </Column>
        {apiValue && props.enablePagination ? <Pagination
            page={currentPage}
            limit={limit}
            totalPages={totalItem}
            onPaginationCallback={onPaginationCallback}
        /> : null}
    </Column>
}