const globalStore = createStore(reducer, initialState)

function Counter({ initialCount }) {
    const [count, dispatch] = useRedux(globalStore, state => state.count)
    return (
        <>
            Count: {count}
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
    )
}

function App() {
    return (
        <div className="App">
            <Counter />
            <Counter />
            <h2>what about 2 counters? Start editing to see some magic happen!</h2>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
