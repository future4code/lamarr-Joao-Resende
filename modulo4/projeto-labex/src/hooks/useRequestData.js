import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        setIsLoading(true);
        axios.get(url)
            .then(response => {
                setIsLoading(false)
                setData(response.data)
            }).catch(err => {
                setIsLoading(false)
                setError(err)
            })
    }

    return [data, isLoading, error, getData];
}

export default useRequestData;
