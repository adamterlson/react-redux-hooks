import React, { createContext, useContext, useEffect, useState } from 'react'

export const ReduxContext = createContext({})
export const Provider = ({ store, children }) => <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>

export const useRedux = (store, getter) => {
    const initialState = store.getState(getter)
    const [state, setState] = useState(getter(initialState))

    useEffect(() => {
        return store.subscribe(() => {
            setState(getter(store.getState()))
        })
    })

    return [getter(initialState), store.dispatch]
}
