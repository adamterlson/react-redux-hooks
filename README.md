# React Redux Hooks

Simple way to hook components into Redux, without the overhead of react-redux's higher order function `connect`.

## Example

API usage identical to that of React's `useReducer` hook, but instead leverages an entire store. Include an initial getter to react to a particular piece of state.

```javascript
import { useRedux } from 'react-redux-hooks'
import myStore from '../myStore'

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

You can also return larger sets of data from state:

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
