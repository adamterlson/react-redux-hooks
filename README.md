# React Redux Hooks

Simple way to hook components into Redux, without the overhead of react-redux's higher order function `connect`.

## Example
Begin by wrapping your component tree as with `react-redux`.

```javascript
import { Provider } from 'react-redux-hooks'
import myStore from '../myStore'

function App() {
    return (
        <Provider store={myStore}>
            <App />
        </Provider>
    )
}
```

And then consume it out of context.  API usage identical to that of React's `useReducer` hook, but instead leverages an entire store. Include an initial getter to react to a particular piece of state, rather than re-rendering any time the entire redux store changes.

```javascript
import { useRedux } from 'react-redux-hooks'

function Counter({ initialCount }) {
    const [count, dispatch] = useRedux(state => state.count)
    return (
        <>
            Count: {count}
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
    )
}
```

You can also return larger sets of data from state, just like mapStateToProps:

```javascript
function MessageWithUser({ userId }) {
    const [{ message, user }, dispatch] = useRedux(state => {
        return {
            message: state.messages.filter(msg => msg.sender === userId),
            user: state.users.byId[userId],
        }
    })

    return (
        <>
            From: {user.firstName}:
            <textarea>{message.text}</textarea>
        </>
    )
}
```
