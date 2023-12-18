import { useEffect, useState } from "react"
import { ApiStatus } from "../models/status"

export const useApi = (url: string) => {
    
    var [data, setData] = useState<ApiStatus>({ state: 'Loading'})
    
    useEffect(() => {
        console.log(`Calling ${url}`)
        fetch(url).then(res => {
            return res.json()
        }).then(json => {
            setData({ state: 'Success', data: json })
        }).catch(err => {
            setData({ state: 'Failure' })
        })
    }, [url])
    

    return { ...data}
}