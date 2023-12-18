type LoadingStatus = {
    state: 'Loading'
}

type SuccessStatus = {
    state: 'Success'
    data: any
}

type FailureStatus = {
    state: 'Failure'
}

export type ApiStatus = LoadingStatus | SuccessStatus | FailureStatus