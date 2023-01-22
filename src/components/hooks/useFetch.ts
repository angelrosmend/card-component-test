import axios from 'axios'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

interface useFetchProps {
    url: string,
    timeout?: number
}

function useFetch({url, timeout}: useFetchProps) {
    const initialState = useMemo(()=>{
        return {
                data: {},
                loading: false,
                error: false,
                errorMessage: null
            }
    },[])
    const [state, setState] = useState(initialState)

    const getData = useCallback(async() =>{
        setState((prevState)=> ({...prevState, loading: true}))
        try{
         let response = await axios.get(url)
         setState((prevState)=> ({...prevState, data: response.data, error: false, errorMessage: null}))
        }catch(err:any){
         setState((prevState)=> ({...prevState, error: true, errorMessage: err.message, data: {}}))
        }finally{
          setState((prevstate) => ({...prevstate, loading: false}))
        }
    }, [setState])

    useEffect(()=>{
        getData()
    },[])
    return [state, setState]
}

export default useFetch