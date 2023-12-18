export type PayoutHistory = {
    dateAndTime: Date
    status: string
    value: number
    username: string
}

export interface PayoutHistoryPayload {
    metadata: Metadata
    data: PayoutHistory[]
}

export interface Metadata {
    page: number
    limit: number
    totalCount: number
}

