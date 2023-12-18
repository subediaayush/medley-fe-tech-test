import { useEffect, useState } from "react"

export const useDebouncer = (timeout: number, onDebounce: (query: string) => void) => {

    const [query, setQuery] = useState('')

    useEffect(() => {
        const defer = setTimeout(() => {onDebounce(query)}, timeout)
        return () => clearTimeout(defer)
    }, [query])

    return setQuery
}