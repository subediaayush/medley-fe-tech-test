import { Button } from "../styled/input"
import { Row } from "../styled/layout"

export type PaginationProps = {
    page: number
    totalPages: number
    limit: number
    onPaginationCallback: (page: number, limit: number) => void
}
export const Pagination = ({ page, limit, totalPages, onPaginationCallback }: PaginationProps) => {
    return <Row gap='4px'  align="end">
        <Button disabled={page <= 1} onClick={() => onPaginationCallback(page - 1, limit)}>&lt;</Button>
        <Button>{page}</Button>
        <Button disabled={page >= totalPages} onClick={() => onPaginationCallback(page + 1, limit)}>&gt;</Button>
    </Row>
}