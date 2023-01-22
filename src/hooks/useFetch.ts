import axios from 'axios'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { productsState } from '../types'

interface useFetchProps {
    url: string,
    timeout?: number,
    initialState: productsState,
}

function useFetch({url, timeout, initialState}: useFetchProps) {

    const [state, setState] = useState(initialState)

    const getData = useCallback(async() =>{
        setState((prevState)=> ({...prevState, loading: true}))
        try{
         let response = await axios.get(url, {timeout})
         setState((prevState)=> ({...prevState, data: response.data, error: false, errorMessage: null}))
        }catch(err:any){
         setState((prevState)=> ({...prevState, error: true, errorMessage: err.message, data: []}))
        }finally{
          setState((prevstate) => ({...prevstate, loading: false}))
        }
    }, [setState])

    useEffect(()=>{
        getData()
    },[])
    return state
}

export default useFetch