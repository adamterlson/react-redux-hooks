import { setState } from 'react'

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
