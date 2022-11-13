import { createContext, useEffect, useState } from 'react'
import Spin from '../components/spin/spin'

const DEFAULT_VALUE = {
    isLoading: false,
}

const LoadingContext = createContext(DEFAULT_VALUE)

const LoadingProvider = (props) => {
    const [state, setState] = useState(DEFAULT_VALUE)

    useEffect(() => {
        if (state.isLoading) {
            document.querySelector('body').style.overflow = 'hidden'
        } else {
            document.querySelector('body').style.overflow = 'auto'
        }
    }, [state.isLoading])

    return (
        <LoadingContext.Provider value={[state, setState]}>
            {state.isLoading && <Spin />}
            {props.children}
        </LoadingContext.Provider>
    )
}

export { LoadingProvider, LoadingContext }
