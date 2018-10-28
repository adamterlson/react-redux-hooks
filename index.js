import React, { createContext, useContext, useEffect, useState } from 'react'

export const Context = createContext({})
export const Provider = ({ store, children }) => <Context.Provider value={store}>{children}</Context.Provider>

export const useRedux = getter => {
    const store = useContext(Context)
    const initialState = store.getState(getter)
    const [state, setState] = useState(getter(initialState))

    useEffect(() => {
        return store.subscribe(() => {
            setState(getter(store.getState()))
        })
    })

    return [getter(initialState), store.dispatch]
}
